using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.RollsRoyces;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class RollsRoyceController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<RollsRoyce>>> GetAllRollsRoyces()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<RollsRoyce>> GetSingleRollsRoyce(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddRollsRoyce(RollsRoyce addRR)
        {    
            return Ok(await Mediator.Send(new Create.Command{RollsRoyces = addRR}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRR(int id, RollsRoyce updateRR)
        {
           updateRR.rr_id = id;
           return Ok(await Mediator.Send(new Edit.Command{RollsRoyces=updateRR}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRR(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

