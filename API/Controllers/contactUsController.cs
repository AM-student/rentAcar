/*using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
    [Route("api/[controller]")]
    [ApiController]
    public class contactUsController : ControllerBase
    {

        private readonly DataContext _context;
        public contactUsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<contactus>>> GetAllContactUs()
        {
            return Ok(await _context.ContactUss.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<contactus>> GetSingleCu(int id)
        {
            var dbContactUs = await _context.ContactUss.FindAsync(id);
            if (dbContactUs == null)
            {
                return BadRequest("Cu not found!");
            }
            return Ok(dbContactUs);
        }

        [HttpPost]
        public async Task<ActionResult<contactus>> AddCu(contactus addCu)
        {
            _context.ContactUss.Add(addCu);
            await _context.SaveChangesAsync();
            return Ok(await _context.ContactUss.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<contactus>> UpdateCu(contactus updateCu)
        {
            var dbContactUs = await _context.ContactUss.FindAsync(updateCu.cu_id);
            if (dbContactUs == null)
            {
                return BadRequest("Cu not found!");
            }
            dbContactUs.name = updateCu.name;
            dbContactUs.email = updateCu.email;
            dbContactUs.cutext = updateCu.cutext;
         


            await _context.SaveChangesAsync();
            return Ok(await _context.ContactUss.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<contactus>> DeleteCu(int id)
        {
            var dbContactUs = await _context.ContactUss.FindAsync(id);
            if (dbContactUs == null)
            {
                return BadRequest("Cu not found!");
            }
            _context.ContactUss.Remove(dbContactUs);
            await _context.SaveChangesAsync();
            return Ok(await _context.ContactUss.ToListAsync());
        }
    }
}
*/