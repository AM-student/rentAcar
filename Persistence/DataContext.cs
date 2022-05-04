using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) :base (options)
        {

        }
        public DbSet <User> Users { get; set;}
        public DbSet <Contact> Contactus { get; set;}
        public DbSet <Salesperson> Salespeople { get; set;}
        public DbSet <Manager> Managers { get; set;}
        public DbSet <Security> Securitys { get; set;}


}
    }
   