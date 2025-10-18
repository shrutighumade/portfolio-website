using System.ComponentModel.DataAnnotations;

namespace portfolio_backend.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Message { get; set; }
        public DateTime SentAt { get; set; } = DateTime.Now;
    }
}
