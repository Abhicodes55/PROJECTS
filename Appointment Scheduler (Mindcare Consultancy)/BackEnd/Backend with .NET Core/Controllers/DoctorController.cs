using sprint2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;

namespace sprint2.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        CommonContext db;
        public DoctorController(CommonContext _db)
        {
            db = _db;
        }
       // var role= JwtManagerRespository.AdminToken;
        [HttpGet]
      [AllowAnonymous]
        public IEnumerable<Doctor> get()
        {
            return db.Doctors;
        }
        [HttpGet("GetDoctors")]
        [Authorize(Roles ="Admin")]
        public IEnumerable<Doctor> GetDoctors(int id)
        {
            var GetDoctors = db.Doctors.FirstOrDefault(x => x.Id == id);
            yield return GetDoctors;
        }
        [HttpPost("Doctor")]
        [Authorize(Roles = "Admin")]
        public IActionResult Doctor(Doctor doctor)
        {
            db.Doctors.Add(doctor);
            db.SaveChanges();
            return Ok("success");
        }
        [HttpDelete("Delete")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id)
        {
            var delete = db.Doctors.FirstOrDefault(x => x.Id == id);
            var isdelete = db.Doctors.Any(x => x.Id == id);
            if (isdelete) {
                db.Doctors.Remove(delete);
                db.SaveChanges();
                return Ok("Successfully deleted");
            }
            return Ok("Data not existed");
        }
        [HttpPut("UpdateDoctor")]
        [Authorize(Roles = "Admin")]
        public IActionResult UpdateDoctor(int id, Doctor doctor)
        {
            var UpdateDoctor = db.Doctors.FirstOrDefault(x => x.Id == id);
            var isupdate = db.Doctors.Any(x => x.Id == id);
            if (isupdate) {

                UpdateDoctor.Name = doctor.Name;
                UpdateDoctor.Specialization = doctor.Specialization;
                UpdateDoctor.About = doctor.About;
                UpdateDoctor.Availability = doctor.Availability;


                db.Doctors.Update(UpdateDoctor);
                db.SaveChanges();
                return Ok("Successfully");
            }
            return Ok("Data not exist");
                }
    }
}
