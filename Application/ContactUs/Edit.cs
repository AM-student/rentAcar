using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.ContactUs
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Contact contactus { get; set; }

        }
        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dbCu = await _context.Contactus.FindAsync(request.contactus.cu_id);
                
                dbCu.cu_id = request.contactus.cu_id ; 
                dbCu.name = request.contactus.name  ?? dbCu.name;
                dbCu.email = request.contactus.email  ?? dbCu.email;
                dbCu.cutext = request.contactus.cutext ?? dbCu.cutext;

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}