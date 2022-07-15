using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.AudiAs;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class AudiAController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<AudiA>>> GetAllAudiAs()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<AudiA>> GetSingleAudiA(string id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddAudiA(AudiA addAA)
        {    
            return Ok(await Mediator.Send(new Create.Command{AudiAs = addAA}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAA(string id, AudiA updateAA)
        {
           updateAA.aa_id = id;
           return Ok(await Mediator.Send(new Edit.Command{AudiAs=updateAA}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAA(string id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

