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
    [ApiController]
    [EnableCors("AllowOrigin")]
    
    public class AppoinmentController : ControllerBase
    {
        CommonContext db;
        public AppoinmentController(CommonContext _db)
        {
            db = _db;
        }
        [HttpGet]
        [Authorize(Roles ="Admin")]
        public IEnumerable<Appoinment> get()
        {
            return db.Appoinments;
        }
        [HttpPost("Appoinment")]
        [Authorize(Roles ="User")]
        public IActionResult Appoinment(Appoinment appoinment)
        {
            db.Appoinments.Add(appoinment);
            db.SaveChanges();
            return Ok("success");
        }
        [HttpDelete]
        [Authorize(Roles = "Admin")]
        public IActionResult DeleteAppoinment(int id)
        {
            var deleteData = db.Appoinments.FirstOrDefault(x => x.ID == id);
            var isdelete = db.Appoinments.Any(x => x.ID == id);
            if (isdelete)
            {
                db.Appoinments.Remove(deleteData);
                db.SaveChanges();
                return Ok("Successfully deleted");
            }
            return Ok("Data not Exist");
        }
        [HttpPut("UpdateAppoint")]
        [Authorize(Roles = "Admin")]
        public IActionResult UpdateAppoint(int id, Appoinment appoinment)
        {
            var UpdateData = db.Appoinments.FirstOrDefault(x => x.ID == id);
            var isupdate = db.Appoinments.Any(x => x.ID == id);
            if (isupdate)
            {

                UpdateData.Name = appoinment.Name;
                UpdateData.Email = appoinment.Email;
                UpdateData.ContactNumber = appoinment.ContactNumber;
                UpdateData.AppointmentFor = appoinment.AppointmentFor;
                UpdateData.AppointmentDescription = appoinment.AppointmentDescription;
                UpdateData.Date = appoinment.Date;
                UpdateData.Time = appoinment.Time;
                UpdateData.HowLong = appoinment.HowLong;

                db.Appoinments.Update(UpdateData);
                db.SaveChanges();
                return Ok("Successfully");
            }
            return Ok("Data not exist");
        }

    }
}
