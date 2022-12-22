using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sprint2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        CommonContext db;
        public SignupController(CommonContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<Signup> get()
        {
            return db.Signups;
        } 
        [AllowAnonymous]
        [HttpPost("Create")]
        public IActionResult Create(Signup signups)
        {
            var isRegistration = db.Signups.Any(x => x.UserName == signups.UserName || x.Email == signups.Email);
          
            if (isRegistration)
            {
                return Ok("Already Registered!");
            }
            else if (signups.UserName == "Admin" && signups.Password == "Admin12345678")
            {
                signups.Role = "Admin";
            }
            else 
            {
                signups.Role = "User";
            }

            db.Signups.Add(signups);
                db.SaveChanges();
                return Ok("successfully registered");
            
           
        }
        [HttpDelete("DeleteUser")]
        public IActionResult DeleteUser(int id)
              
        {
            var DeleteData = db.Signups.FirstOrDefault(x => x.ID == id);
            var isdelete = db.Signups.Any(x => x.ID == id);
            if (isdelete)
            {
                db.Signups.Remove(DeleteData);
                db.SaveChanges();
                return Ok("Successfully deleted");
            }
            return Ok("Data not found");
        }


    }

}

