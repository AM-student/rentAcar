using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.VWPassats;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class VWPassatController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<VWPassat>>> GetAllVWPassats()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<VWPassat>> GetSingleVWPassat(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddVWPassat(VWPassat addvwp)
        {    
            return Ok(await Mediator.Send(new Create.Command{VWPassats = addvwp}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVWG(int id, VWPassat updatevwp)
        {
           updatevwp.vwp_id = id;
           return Ok(await Mediator.Send(new Edit.Command{VWPassats = updatevwp}));
        } 
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVWG(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

