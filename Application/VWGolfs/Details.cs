using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.VWGolfs
{
    public class Details
    {
        public class  Query : IRequest<VWGOLF>
        {
            public int Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, VWGOLF>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<VWGOLF> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.VWGolfs.FindAsync(request.Id);
            }
        }
    }
}