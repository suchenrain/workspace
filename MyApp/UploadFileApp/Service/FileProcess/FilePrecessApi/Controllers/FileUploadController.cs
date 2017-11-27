using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FilePrecessApi.Controllers
{
    
    [Route("api/[controller]")]
    public class FileUploadController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> PostWithInfo([FromQuery]int projectId,[FromQuery]int sectionId)
        {
            var files = this.Request.Form.Files;
            return this.StatusCode(200);
        }
    }
}
