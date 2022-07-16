using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class RollsRoyce
    {
        [Key]
        public int rr_id { get; set; }
        public string rr_image { get; set; }
        public string rr_name { get; set; }
        public string rr_type { get; set; }
        public int rr_year { get; set; }
        public int rr_vin { get; set; }
        public double rr_price { get; set; }
        public double rr_engine { get; set; }
        public string description_rr { get; set; }
        public string rr_fuel { get; set; }

    }
}