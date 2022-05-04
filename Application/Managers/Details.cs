using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Managers
{
    public class Details
    {
        public class  Query : IRequest<Manager>
        {
            public int Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, Manager>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Manager> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Managers.FindAsync(request.Id);
            }
        }
    }
}