using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.Models
{
    public class Contact
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }
        public string MobilePhone { get; set; }
        public string Message { get; set; }
    }
}
