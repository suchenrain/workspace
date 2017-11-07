using System;
using System.Text;
using System.Linq;
using RabbitMQ.Client;

namespace EmitLogsTopic
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

                var routingKey = args.Length > 0 ? args[0] : "anonymous.info";
                var message = args.Length > 1 ? string.Join(" ", args.Skip(1).ToArray()) : "hello world!";
                var body=Encoding.UTF8.GetBytes(message);

                channel.BasicPublish(exchange:"logs_topic",routingKey:routingKey,body:body);

                Console.WriteLine("[x] sent '{0}':'{1}'",routingKey,message);
            }
        }
    }
}
