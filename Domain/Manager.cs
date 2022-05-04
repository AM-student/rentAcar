using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Manager
    {
        [Key]
        public int manager_id { get; set; }
        public int personal_id { get; set; }
        public int atk_id { get; set; }
        public int bankaccount { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string address { get; set; }
        public int zip { get; set; }
        public string title { get; set; }
        public string managertype { get; set; }
    }
}