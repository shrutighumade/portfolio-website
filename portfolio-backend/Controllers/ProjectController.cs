// Controllers/ProjectController.cs
using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Data;
using portfolio_backend.Models;
using Microsoft.EntityFrameworkCore;


[Route("api/[controller]")]
[ApiController]
public class ProjectController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProjectController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddProject([FromBody] Project project)
    {
        if (!ModelState.IsValid)
            return BadRequest("Invalid project data");

        _context.Projects.Add(project);
        await _context.SaveChangesAsync();
        return Ok(project);
    }

    [HttpGet]
    public async Task<IActionResult> GetProjects()
    {
        var projects = await _context.Projects.ToListAsync();
        return Ok(projects);
    }
}
