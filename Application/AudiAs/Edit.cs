using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.AudiAs
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public AudiA AudiAs { get; set; }

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
                var dbAudiA = await _context.AudiAs.FindAsync(request.AudiAs.aa_id);
                
                 _mapper.Map(request.AudiAs, dbAudiA);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}