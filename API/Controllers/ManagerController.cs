using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Managers;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;

namespace API.Controllers
{
    public class ManagerController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Manager>>> GetAllManagers()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Manager>> GetSingleManager(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddManager(Manager addm)
        {    
            return Ok(await Mediator.Send(new Create.Command{Managers = addm}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateM(int id, Manager updatem)
        {
           updatem.manager_id = id;
           return Ok(await Mediator.Send(new Edit.Command{Managers=updatem}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteM(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

