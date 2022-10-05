using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Feedback
    {
        [Key]
        public int fb_id { get; set; }
        public string fb_image { get; set; }

        public string name_fb { get; set; } = string.Empty;
        public string email_fb { get; set; } = string.Empty;
        public string text_fb { get; set; } = string.Empty;
    }
}