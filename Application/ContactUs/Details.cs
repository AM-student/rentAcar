using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ContactUs
{
    public class Details
    {
        public class  Query : IRequest<Contact>
        {
            public int Id { get; set;}
        }

        public class Handler : IRequestHandler<Query, Contact>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Contact> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Contactus.FindAsync(request.Id);
            }
        }
    }
}