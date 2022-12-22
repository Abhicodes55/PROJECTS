using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using sprint2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace WebApplication8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        CommonContext db;
        private IConfiguration config;
        public LoginController(CommonContext _db, IConfiguration _config)
        {
            db = _db;
            config = _config;
        }
        [HttpPost("Authenticate")]
        public IActionResult Authenticate(Login login)
        {
            var islogin = db.Signups.FirstOrDefault(x => x.UserName == login.UserName && x.Password.Equals(login.Password));
            if (islogin != null)
            {
                return Ok(new JwtManagerRespository(config).GenerateToken(islogin.Role,islogin.UserName)
                    );
            }
            return Ok("Either username or password wrong");
        }
    }
}
