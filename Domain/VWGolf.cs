using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class VWGOLF
    {
        [Key]
        public string vwg_id { get; set; }
        public string vwg_image { get; set; }
        public string vwg_name { get; set; }
        public string vwg_type { get; set; }
        public int vwg_year { get; set; }
        public int vwg_vin { get; set; }
        public double vwg_price { get; set; }
        public string description_vwg { get; set; }
    }
}