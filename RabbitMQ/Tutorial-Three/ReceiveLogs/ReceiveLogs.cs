using System;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

namespace ReceiveLogs
{
    class ReceiveLogs
    {
        static void Main(string[] args)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.ExchangeDeclare(exchange: "logs", type: "fanout");

                var queuename = channel.QueueDeclare().QueueName;

                channel.QueueBind(queue: queuename, exchange: "logs", routingKey: "");
                Console.WriteLine("[x] waiting for logs");

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body;
                    var message = Encoding.UTF8.GetString(body);
                    Console.WriteLine("[x] {0}", message);
                };

                channel.BasicConsume(queue: queuename, autoAck: true,consumer:consumer);

                Console.WriteLine("Press [Enter] to exit");
                Console.ReadLine();
            }
        }
    }
}
