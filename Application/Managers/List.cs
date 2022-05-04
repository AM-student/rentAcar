using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Managers
{
    public class List
    {
        public class Query : IRequest<List<Manager>>{}

        public class Handler : IRequestHandler<Query, List<Manager>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Manager>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Managers.ToListAsync();
            }
        }
    }
}