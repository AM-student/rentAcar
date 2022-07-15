using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Feedbacks
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Feedback Feedbacks { get; set;}

        }
        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dbFeedbacks = await _context.Feedbacks.FindAsync(request.Feedbacks.fb_id);
                
                _mapper.Map(request.Feedbacks, dbFeedbacks);

                /*dbFeedbacks.username = request.Feedbacks.username ?? dbFeedbacks.username;
                dbFeedbacks.email = request.Feedbacks.email ?? dbFeedbacks.email;
                dbFeedbacks.password = request.Feedbacks.password ?? dbFeedbacks.password;
                dbFeedbacks.firstname = request.Feedbacks.firstname ?? dbFeedbacks.firstname;
                dbFeedbacks.lastname = request.Feedbacks.lastname ?? dbFeedbacks.lastname;
                dbFeedbacks.address = request.Feedbacks.address ?? dbFeedbacks.address;
                dbFeedbacks.zip = request.Feedbacks.zip;
                dbFeedbacks.usertype = request.Feedbacks.usertype ?? dbFeedbacks.usertype;
                */

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}