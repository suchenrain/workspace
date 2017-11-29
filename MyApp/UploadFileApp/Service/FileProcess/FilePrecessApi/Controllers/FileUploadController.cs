using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Net;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Xml;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FilePrecessApi.Controllers
{

    [Route("api/[controller]")]
    public class FileUploadController : Controller
    {
        private readonly string[] extArray = { "TTX", "TTV", "PDF" };
        private const string DECRYPTKEY = "19972408";
        private static string utf8Header = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";

        [HttpPost]
        public async Task<IActionResult> PostWithInfo([FromQuery]int projectId, [FromQuery]int sectionId)
        {
            var files = this.Request.Form.Files;
            

            switch (files.Count)
            {
                case 1:
                    //String ext = System.IO.Path.GetExtension(files[0].FileName);
                    string[] segments = files[0].FileName.Split('.');
                    string fileExt = segments[segments.Length - 1].ToUpper();
                    if (!extArray.Contains(fileExt))
                    {
                        return this.StatusCode((int)HttpStatusCode.UnsupportedMediaType);
                    }
                    break;
                default: return this.StatusCode((int)HttpStatusCode.UnsupportedMediaType);
            }
            Stream s = files[0].OpenReadStream();
            s.Seek(0, SeekOrigin.Begin);
            string xmlString=DecryptFile(s, DECRYPTKEY);
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xmlString);
            string jsonText = JsonConvert.SerializeXmlNode(doc);
            return this.StatusCode((int)HttpStatusCode.OK,jsonText);
        }

        private static string DecryptFile(Stream fileStream, string key)
        {
            string fileData = String.Empty;

            DESCryptoServiceProvider des = null;
            ICryptoTransform desdecrypt = null;
            StreamReader streamRead = null;

            try
            {

                des = new DESCryptoServiceProvider();

                des.Key = ASCIIEncoding.ASCII.GetBytes(key);
                des.IV = ASCIIEncoding.ASCII.GetBytes(key);

                desdecrypt = des.CreateDecryptor();

                using (CryptoStream cryptostream = new CryptoStream(fileStream, desdecrypt, CryptoStreamMode.Read))
                {
                    streamRead = new StreamReader(cryptostream);
                    fileData = streamRead.ReadToEnd();

                    if (fileData.StartsWith(utf8Header, StringComparison.Ordinal))
                    {
                        fileData = fileData.Substring(utf8Header.Length);
                    }
                }
                return fileData.Trim();

            }
            catch (Exception ex)
            {
                throw new ApplicationException("TtxDecryptionException");
            }
            finally
            {
                if (desdecrypt != null)
                {
                    desdecrypt.Dispose();
                }
                if (fileStream != null)
                {
                    fileStream.Close();
                }

                if (streamRead != null)
                {
                    streamRead.Close();
                    streamRead.Dispose();
                }
            }
        }
    }
}
