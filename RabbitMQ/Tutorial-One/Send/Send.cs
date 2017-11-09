using System;
using System.Collections.Generic;
using System.Text;
using RabbitMQ.Client;

namespace Send
{
    class Send
    {
        public static void Main()
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(queue: "hello", durable: false, exclusive: false, autoDelete: false, arguments: null);
                    string message = "hello world!";
                    var body = Encoding.UTF8.GetBytes(message);

                    channel.BasicPublish(exchange: "", routingKey: "hello", basicProperties: null, body: body);
                    Console.WriteLine("Sender sent {0}", message);

                }
            }
            Console.WriteLine("Press [Enter] to exit");
            Console.ReadLine();

        }
    }
}
