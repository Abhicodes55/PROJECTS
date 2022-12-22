using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.Models
{
    public class Signup
    {
        public int ID { get; set; }
         public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Confirm_Password { get; set; }
        public string Role { get; set; }
    }
}
