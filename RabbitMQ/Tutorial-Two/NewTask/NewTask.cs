﻿using System;
using RabbitMQ.Client;
using System.Text;

namespace NewTask
{
    class NewTask
    {
        static void Main(string[] args)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.QueueDeclare(queue: "task_queue",
                                     durable: true,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var message = GetMessage(args);
                var body = Encoding.UTF8.GetBytes(message);

                var property = channel.CreateBasicProperties();
                property.Persistent = true;

                channel.BasicPublish(exchange: "", routingKey: "task_queue", basicProperties: property, body: body);
                Console.WriteLine("[x] sent task: {0}", message);
            }
            Console.WriteLine("Press [Enter] to exit");
            Console.ReadLine();
        }

        private static string GetMessage(string[] args)
        {
            return args.Length > 0 ? string.Join(" ", args) : "Hello World!";
        }
    }
}
