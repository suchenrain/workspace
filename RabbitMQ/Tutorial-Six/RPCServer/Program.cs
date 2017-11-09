﻿using System;
using System.Text;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace RPCServer
{
    class Program
    {
        static void Main(string[] args)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.QueueDeclare(queue: "rpc_queue", durable: false, exclusive: false, autoDelete: false, arguments: null);
                channel.BasicQos(0, 1, false);
                var consumer = new EventingBasicConsumer(channel);
                channel.BasicConsume(queue: "rpc_queue", autoAck: false, consumer: consumer);

                Console.WriteLine("[x] awaiting RPC request...");

                consumer.Received += (model, ea) =>
                {
                    string response = null;
                    var body = ea.Body;
                    var props = ea.BasicProperties;
                    var replyProps = channel.CreateBasicProperties();
                    replyProps.CorrelationId = props.CorrelationId;

                    try
                    {
                        var message=Encoding.UTF8.GetString(body);
                        int n=int.Parse(message);
                        Console.WriteLine("[x] Fibonacci [{0}]",n);
                        response=Fib(n).ToString();
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("[x]" + ex.Message);
                        response = "";
                    }
                    finally
                    {
                        var responseBytes=Encoding.UTF8.GetBytes(response);
                        channel.BasicPublish(exchange:"",routingKey:props.ReplyTo,basicProperties:replyProps,body:responseBytes);
                        channel.BasicAck(deliveryTag:ea.DeliveryTag,multiple:false);
                    }
                };
                Console.WriteLine("Press [Enter] to exit");
                Console.ReadLine();
            }
        }
        /// <summary>
        /// return fibonacci
        /// </summary>
        /// <param name="n"></param>
        /// <returns></returns>
        private static int Fib(int n)
        {
            if (n == 0 || n == 1) return n;
            return Fib(n - 2) + Fib(n - 1);
        }

    }
}
