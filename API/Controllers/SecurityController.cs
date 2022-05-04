using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Securitys;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class SecurityController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Security>>> GetAllSecuritys()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Security>> GetSingleSecurity(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddSecurity(Security addm)
        {    
            return Ok(await Mediator.Send(new Create.Command{Securitys = addm}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateS(int id, Security updates)
        {
           updates.security_id = id;
           return Ok(await Mediator.Send(new Edit.Command{Securitys=updates}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteS(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

