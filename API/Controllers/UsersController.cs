using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;

namespace API.Controllers
{   
    
    public class UsersController : BaseApiController
    {
        
        private readonly DataContext _context;
        public UsersController(DataContext context) 
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetSingleUser(int id)
        {
            var dbUsers = await _context.Users.FindAsync(id);
            if (dbUsers == null) {
                return BadRequest("User not found!");
            }
            return Ok(dbUsers);
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(User addUser)
        { 
            _context.Users.Add(addUser);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User updateUser)
        {
            var dbUsers = await _context.Users.FindAsync(updateUser.user_id);
            if (dbUsers == null)
            {
                return BadRequest("User not found!");
            }
            dbUsers.username = updateUser.username;
            dbUsers.email = updateUser.email;
            dbUsers.password = updateUser.password;
            dbUsers.firstname = updateUser.firstname;
            dbUsers.lastname = updateUser.lastname;
            dbUsers.address = updateUser.address;
            dbUsers.zip = updateUser.zip;
            dbUsers.usertype = updateUser.usertype;


            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var dbUsers = await _context.Users.FindAsync(id);
            if (dbUsers == null)
            {
                return BadRequest("User not found!");
            }
            _context.Users.Remove(dbUsers);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }
    }
}
