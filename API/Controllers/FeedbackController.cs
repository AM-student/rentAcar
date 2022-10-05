using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Feedbacks;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using MediatR;
namespace API.Controllers
{   
    
    public class FeedbackController : BaseApiController

    {
 [HttpGet]
        public async Task<ActionResult<List<Feedback>>> GetAllFeedback()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Feedback>> GetSingleFb(int id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
        
        [HttpPost]
        public async Task<IActionResult> AddFb(Feedback addFb)
        {    
            return Ok(await Mediator.Send(new Create.Command{Feedbacks = addFb}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFb(int id, Feedback updateFbs)
        {
           updateFbs.fb_id = id;
           return Ok(await Mediator.Send(new Edit.Command{Feedbacks=updateFbs}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFb(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
