using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.RollsRoyces
{
    public class Details
    {
        public class  Query : IRequest<RR>
        {
            public string Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, RollsRoyce>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<RollsRoyce> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.RollsRoyces.FindAsync(request.Id);
            }
        }
    }
}