using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class VWPassat
    {
        [Key]
        public int vwp_id { get; set; }
        public string vwp_targa { get; set; }
        public string vwp_image { get; set; }
        public string vwp_name { get; set; }
        public string vwp_type { get; set; }
        public int vwp_year { get; set; }
        public int vwp_vin { get; set; }
        public double vwp_price { get; set; }
        public string description_vwp { get; set; }
    }
}