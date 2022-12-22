using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.Models
{
    public class CommonContext: DbContext
    {
        public CommonContext(DbContextOptions<CommonContext> options)
           : base(options)
        {
        }

        public DbSet<Signup> Signups { get; set; }

        public DbSet<Appoinment> Appoinments { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
    }
}
