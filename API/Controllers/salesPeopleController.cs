using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Salespeople;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class SalesPeopleController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Salesperson>>> GetAllSalespeople()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Salesperson>> GetSingleSP(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddSP(Salesperson addSp)
        {    
            return Ok(await Mediator.Send(new Create.Command{salespeople = addSp}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSp(int id, Salesperson updatesps)
        {
           updatesps.sp_id = id;
           return Ok(await Mediator.Send(new Edit.Command{salespeople=updatesps}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSp(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

