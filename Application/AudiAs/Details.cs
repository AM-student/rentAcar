using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.AudiAs
{
    public class Details
    {
        public class  Query : IRequest<AA>
        {
            public string Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, AudiA>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<AudiA> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.AudiAs.FindAsync(request.Id);
            }
        }
    }
}