// Models/Project.cs
using System.ComponentModel.DataAnnotations;

namespace portfolio_backend.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Tech { get; set; } // added Tech field
        public required string Link { get; set; }
        public string? ImageUrl { get; set; }  // optional
    }
}
