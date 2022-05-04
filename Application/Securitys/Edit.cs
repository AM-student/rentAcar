using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Securitys
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Security Securitys { get; set; }

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
                var dbSecurity = await _context.Securitys.FindAsync(request.Securitys.security_id);
                
                dbSecurity.personal_id = request.Securitys.personal_id ;
                dbSecurity.atk_id = request.Securitys.atk_id;
                dbSecurity.bankaccount = request.Securitys.bankaccount;;
                dbSecurity.firstname = request.Securitys.firstname ?? dbSecurity.firstname;
                dbSecurity.lastname = request.Securitys.lastname ?? dbSecurity.lastname;
                dbSecurity.address = request.Securitys.address ?? dbSecurity.address;
                dbSecurity.zip = request.Securitys.zip;
                dbSecurity.securitytype = request.Securitys.securitytype ?? dbSecurity.securitytype;


                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}