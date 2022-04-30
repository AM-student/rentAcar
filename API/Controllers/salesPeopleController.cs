/*using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class salesPeopleController : ControllerBase
    {
       
        private readonly DataContext _context;
        public salesPeopleController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<salespeople>>> GetAllSalesPeople()
        {
            return Ok(await _context.SalesPeoples.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<salespeople>> GetSingleSp(int id)
        {
            var dbSalesPeople = await _context.SalesPeoples.FindAsync(id);
            if (dbSalesPeople == null)
            {
                return BadRequest("Sp not found!");
            }
            return Ok(dbSalesPeople);
        }

        [HttpPost]
        public async Task<ActionResult<salespeople>> AddSp(salespeople addSp)
        {
            _context.SalesPeoples.Add(addSp);
            await _context.SaveChangesAsync();
            return Ok(await _context.SalesPeoples.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<salespeople>> UpdateSp(salespeople updateSp)
        {
            var dbSalesPeople = await _context.SalesPeoples.FindAsync(updateSp.sp_id);
            if (dbSalesPeople == null)
            {
                return BadRequest("Sp not found!");
            }
            dbSalesPeople.personal_id = updateSp.personal_id;
            dbSalesPeople.atk_id = updateSp.atk_id;
            dbSalesPeople.bankaccount = updateSp.bankaccount;
            dbSalesPeople.firstname = updateSp.firstname;
            dbSalesPeople.lastname = updateSp.lastname;
            dbSalesPeople.address = updateSp.address;
            dbSalesPeople.zip = updateSp.zip;


            await _context.SaveChangesAsync();
            return Ok(await _context.SalesPeoples.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<salespeople>> DeleteSp(int id)
        {
            var dbSalesPeople = await _context.SalesPeoples.FindAsync(id);
            if (dbSalesPeople == null)
            {
                return BadRequest("Sp not found!");
            }
            _context.SalesPeoples.Remove(dbSalesPeople);
            await _context.SaveChangesAsync();
            return Ok(await _context.SalesPeoples.ToListAsync());
        }
    }
}*/
