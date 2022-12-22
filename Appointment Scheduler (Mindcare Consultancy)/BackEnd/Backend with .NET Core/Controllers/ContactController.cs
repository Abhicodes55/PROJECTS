using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class ContactController : ControllerBase
    {
        CommonContext db;
        public ContactController(CommonContext _db)
        {
            db = _db;
        }
        
        [HttpGet]
       [Authorize(Roles ="Admin")]
        public IEnumerable<Contact> get()
        {
            return db.Contacts;
        }
        [HttpPost("Feedback")]
        [AllowAnonymous]
        public IActionResult Feedback(Contact contact)
        {
            db.Contacts.Add(contact);
            db.SaveChanges();
            return Ok("success");
        }
        [HttpDelete("DeleteFeedback")]
        [Authorize(Roles ="Admin")]
        public IActionResult DeleteAppoinment(int id)
        {
            var DeleteData = db.Contacts.FirstOrDefault(x => x.ID == id);
            var isdelete = db.Contacts.Any(x => x.ID == id);
            if (isdelete)
            {
                db.Contacts.Remove(DeleteData);
                db.SaveChanges();
                return Ok("Successfully deleted");
            }
            return Ok("Data not Exist");
        }
    }
}
