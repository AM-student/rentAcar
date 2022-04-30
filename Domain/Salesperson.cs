using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Salesperson
    {
        [Key]
        public int sp_id { get; set; }
        public int personal_id { get; set; }
        public int atk_id { get; set; }
        public int bankaccount { get; set; }
        public string firstname { get; set; } = string.Empty;
        public string lastname { get; set; } = string.Empty;
        public string address { get; set; } = string.Empty;
        public int zip { get; set; }
    }
}