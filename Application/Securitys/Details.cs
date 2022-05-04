using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Securitys
{
    public class Details
    {
        public class  Query : IRequest<Security>
        {
            public int Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, Security>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Security> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Securitys.FindAsync(request.Id);
            }
        }
    }
}