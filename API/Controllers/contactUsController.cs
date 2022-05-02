using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.ContactUs;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;
namespace API.Controllers
{   
    
    public class ContactUsController : BaseApiController

    {
 [HttpGet]
        public async Task<ActionResult<List<Contact>>> GetAllContactus()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetSingleCu(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddCu(Contact addCu)
        {    
            return Ok(await Mediator.Send(new Create.Command{contactus = addCu}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCu(int id, Contact updateCus)
        {
           updateCus.cu_id = id;
           return Ok(await Mediator.Send(new Edit.Command{contactus=updateCus}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCu(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
