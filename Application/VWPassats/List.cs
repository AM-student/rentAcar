using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.VWPassats
{
    public class List
    {
        public class Query : IRequest<List<VWPassat>>{}

        public class Handler : IRequestHandler<Query, List<VWPassat>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<VWPassat>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.VWPassats.ToListAsync();
            }
        }
    }
}