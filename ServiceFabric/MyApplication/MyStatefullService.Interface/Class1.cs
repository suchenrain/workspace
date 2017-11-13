using Microsoft.ServiceFabric.Services.Remoting;
using System.Threading.Tasks;

namespace MyStatefullService.Interface
{
    public interface ICounter : IService
    {
        Task<long> GetCountAsync();
    }
}
