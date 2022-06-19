using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.VWPassats
{
    public class Details
    {
        public class  Query : IRequest<VWPassat>
        {
            public string Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, VWPassat>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<VWPassat> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.VWPassats.FindAsync(request.Id);
            }
        }
    }
}