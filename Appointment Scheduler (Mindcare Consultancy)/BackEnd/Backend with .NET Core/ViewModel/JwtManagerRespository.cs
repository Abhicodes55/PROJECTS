using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace sprint2.Models
{
    public class JwtManagerRespository
    {
        public string SecretKey { get; set; }
        public int TokenDuration { get; set; }
        public object Configuration { get; private set; }

        private readonly IConfiguration Config;

        public JwtManagerRespository(IConfiguration _Config)
        {
            Config = _Config;
            SecretKey = Config.GetSection("jwt").GetSection("key").Value;
            TokenDuration = Int32.Parse(Config.GetSection("jwt").GetSection("Duration").Value);

        }
        public string GenerateToken(string Role ,string UserName)
        {
            
            var Tokenhandeler = new JwtSecurityTokenHandler();
            var TokenKey = Encoding.UTF8.GetBytes(SecretKey);
            var payload = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] { new Claim(ClaimTypes.Role, Role),new Claim(ClaimTypes.Name, UserName)}),
                Expires = DateTime.Now.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(TokenKey), SecurityAlgorithms.HmacSha256)
            };
            var Token = Tokenhandeler.CreateToken(payload);
            string FinalToken = Tokenhandeler.WriteToken(Token);

            return FinalToken;

        }
    }
}