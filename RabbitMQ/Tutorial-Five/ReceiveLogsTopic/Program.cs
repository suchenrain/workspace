using System;
using System.Text;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace ReceiveLogsTopic
{
    class Program
    {
        static void Main(string[] args)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.ExchangeDeclare(exchange: "logs_topic", type: "topic");


                if (args.Length < 1)
                {
                    Console.Error.WriteLine("usage:{0} [binding_keys...]", Environment.GetCommandLineArgs()[0]);
                    Console.WriteLine("press enter to exit");
                    Console.ReadLine();
                    Environment.Exit(-1);
                    return;
                }

                var queueName = channel.QueueDeclare().QueueName;
                foreach (var bindkey in args)
                {
                    channel.QueueBind(queue: queueName, exchange: "logs_topic", routingKey: bindkey);
                }
                Console.WriteLine("[x] waiting for logs...");

                var consumer = new EventingBasicConsumer(channel);

                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body;
                    var message = Encoding.UTF8.GetString(body);
                    var routingKey = ea.RoutingKey;
                    Console.WriteLine("[x] received '{0}':'{1}'", routingKey, message);
                };
                channel.BasicConsume(queue: queueName, autoAck: true, consumer: consumer);
                Console.WriteLine(" Press [enter] to exit.");
                Console.ReadLine();

            }
        }
    }
}
