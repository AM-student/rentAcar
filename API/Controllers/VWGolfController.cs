using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.VWGolfs;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class VWGolfController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<VWGOLF>>> GetAllVWGolfs()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<VWGOLF>> GetSingleVWGolf(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddVWGolf(VWGOLF addvwg)
        {    
            return Ok(await Mediator.Send(new Create.Command{VWGolfs = addvwg}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVWG(int id, VWGOLF updatevwg)
        {
           updatevwg.vwg_id = id;
           return Ok(await Mediator.Send(new Edit.Command{VWGolfs=updatevwg}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVWG(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

