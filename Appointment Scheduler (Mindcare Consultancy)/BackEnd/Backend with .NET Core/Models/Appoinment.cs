using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.Models
{
    public class Appoinment
    {
       
        public int ID { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string AppointmentFor { get; set; }
        public string AppointmentDescription { get; set; }

        public  string Date { get; set; }

        public string Time { get; set; }
        public string HowLong { get; set; }
    }
}
