using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace sprint2.Models
{
    public partial class LoginContext : DbContext
    {
        public LoginContext()
        {
        }

        public LoginContext(DbContextOptions<CommonContext> options)
            : base(options)
        {
        }

        public  DbSet<Signup> Signups { get; set; }
}
}