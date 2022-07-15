using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.RollsRoyces
{
    public class List
    {
        public class Query : IRequest<List<RollsRoyce>{}

        public class Handler : IRequestHandler<Query, List<RollsRoyce>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<RollsRoyce>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.RollsRoyces.ToListAsync();
            }
        }
    }
}