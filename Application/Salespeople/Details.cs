using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Salespeople
{
    public class Details
    {
        public class  Query : IRequest<Salesperson>
        {
            public int Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, Salesperson>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Salesperson> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Salespeople.FindAsync(request.Id);
            }
        }
    }
}