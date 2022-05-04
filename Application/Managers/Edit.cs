using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Managers
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Manager Managers { get; set; }

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
                var dbManager = await _context.Managers.FindAsync(request.Managers.manager_id);
                
                dbManager.personal_id = request.Managers.personal_id ;
                dbManager.atk_id = request.Managers.atk_id;
                dbManager.bankaccount = request.Managers.bankaccount;;
                dbManager.firstname = request.Managers.firstname ?? dbManager.firstname;
                dbManager.lastname = request.Managers.lastname ?? dbManager.lastname;
                dbManager.address = request.Managers.address ?? dbManager.address;
                dbManager.zip = request.Managers.zip;
                dbManager.title = request.Managers.title ?? dbManager.title;
                dbManager.managertype = request.Managers.managertype ?? dbManager.managertype;


                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}