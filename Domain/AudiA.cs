using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class AudiA
    {
        [Key]
        public int aa_id { get; set; }
        public string aa_image { get; set; }
        public string aa_name { get; set; }
        public string aa_type { get; set; }
        public int aa_year { get; set; }
        public int aa_vin { get; set; }
        public double aa_price { get; set; }
        public double aa_engine { get; set; }
        public string description_aa { get; set; }
        public string aa_fuel { get; set; }

    }
}