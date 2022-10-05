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
    public class Delete
    {
        public class Command : IRequest 
        {
            public int Id { get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            public DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dbFeedbacks = await _context.Feedbacks.FindAsync(request.Id);
            
                _context.Remove(dbFeedbacks);
                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}