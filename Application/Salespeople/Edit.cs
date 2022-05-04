using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Salespeople
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Salesperson Salespeople { get; set; }

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
                var dbSp = await _context.Salespeople.FindAsync(request.Salespeople.sp_id);
                
                dbSp.personal_id = request.Salespeople.personal_id ;
                dbSp.atk_id = request.Salespeople.atk_id;
                dbSp.bankaccount = request.Salespeople.bankaccount;;
                dbSp.firstname = request.Salespeople.firstname ?? dbSp.firstname;
                dbSp.lastname = request.Salespeople.lastname ?? dbSp.lastname;
                dbSp.address = request.Salespeople.address ?? dbSp.address;
                dbSp.zip = request.Salespeople.zip;
                

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}