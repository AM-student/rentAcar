using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.AudiAs
{
    public class List
    {
        public class Query : IRequest<List<AudiA>>{}

        public class Handler : IRequestHandler<Query, List<AudiA>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<AudiA>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.AudiAs.ToListAsync();
            }
        }
    }
}