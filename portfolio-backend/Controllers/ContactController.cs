using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using portfolio_backend.Data;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ContactController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<IActionResult> GetMessages() =>
            Ok(await _context.ContactMessages.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> SendMessage([FromBody] Contact message)
        {
            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();
            return Ok(message);
        }
    }
}
