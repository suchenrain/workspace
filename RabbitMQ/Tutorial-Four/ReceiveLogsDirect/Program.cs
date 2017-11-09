using System;
using System.Text;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace ReceiveLogsDirect
{
    class Program
    {
        static void Main(string[] args)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.ExchangeDeclare(exchange: "direct_logs", type: "direct");

                //exit if no args
                if (args.Length < 1)
                {
                    Console.Error.WriteLine("usage:{0} [info] [warning] [error]", Environment.GetCommandLineArgs()[0]);
                    Console.WriteLine("Press [enter] to exit.");
                    Console.ReadLine();
                    Environment.Exit(-1);
                    return;
                }

                var quequeName = channel.QueueDeclare().QueueName;
                foreach (var severity in args)
                {
                    channel.QueueBind(queue: quequeName, exchange: "direct_logs", routingKey: severity);
                }
                Console.WriteLine("[x] waiting for message...");

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    var body=ea.Body;
                    var message=Encoding.UTF8.GetString(body);
                    var severity=ea.RoutingKey;
                    Console.WriteLine("[x] received '{0}':'{1}'",severity,message);
                };

                channel.BasicConsume(queue:quequeName,autoAck:true,consumer:consumer);

                Console.WriteLine("Press [enter] to exit.");
                Console.ReadLine();
            }

        }
    }
}
