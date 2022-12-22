using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.Models
{
    public class Doctor
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Specialization { get; set; }
        public string About { get; set; }
      
        public String Availability { get; set; }
    }
}
