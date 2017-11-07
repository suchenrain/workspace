using RPCClient;
using System;

namespace RPCClient
{
    class Program
    {
        static void Main(string[] args)
        {
            var rpcClient=new RpcClient();
            Console.WriteLine("[x] requesting Fib(30)");
            var response=rpcClient.Call("30");
            Console.WriteLine("Fib(30) got:{0}",response);
            rpcClient.Close();
        }
    }
}
