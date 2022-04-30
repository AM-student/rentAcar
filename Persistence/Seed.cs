using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Users.Any()) return;
            
            var users = new List<User>
            {
                 new User {
                    username = "test1",
                    email = "test@test.com",
                    password = "testing123",
                    firstname = "Test",
                    lastname = "Test",
                    address = "rr. Test, Prishtine",
                    zip = 10000,
                    usertype = "user"
                },
                new User {
                    username = "test2",
                    email = "test1@test1.com",
                    password = "testing456",
                    firstname = "Testi",
                    lastname = "Testi",
                    address = "rr. Testi, Prishtine",
                    zip = 10001,
                    usertype = "user"
                },
            };
            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
        }
    }
}
