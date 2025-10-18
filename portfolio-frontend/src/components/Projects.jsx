// src/components/Projects.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Backend API URL (change if you have a real backend)
    const apiUrl = import.meta.env.VITE_PROJECTS_API_URL || "/api/projects";

    axios
      .get(apiUrl)
      .then((res) => setProjects(res.data))
      .catch(() => {
        // fallback static projects
        setProjects([
          {
            id: 1,
            title: "ECommerce ",
            tech: "React, .NET, MySQL",
            description: "fullstack websites,manage products, orders, and users. Implemented CRUD operations, shopping cart, and payment processing using .NET and SQL.",
            link: "https://github.com/shrutighumade/ECommerce"
          },
          {
            id: 2,
            title: "Portfolio Website ",
            tech: "React, .NET, MySQL",
            description: "Fullstack portfolio with contact form.",
            link: "https://github.com/shrutighumade/"

          },
          {
            id: 3,
            title: "Employee-Management-System",
            tech: ".Net, MySQL",
            description: "Signup/login/forgot password APIs with email confirmation.",
            link: "https://github.com/shrutighumade/Employee-Management-System"
          },
          {
            id: 4,
            title: "ServiceManagementSystem",
            tech: ".NET ,Sql",
            description: "Implemented CRUD operations, user management, and database interactions using OOP concepts and SQL for data storage.",
            link: "https://github.com/shrutighumade/ServiceManagementSystem"
          },
          {
            id: 5,
            title: "Maid Management System",
            tech: "Java, Angular",
            description: "Developed a system to manage maid profiles, service requests, and work schedules.",
            link: "https://github.com/shrutighumade/MaidManagementSystem"
          },
          {
            id: 6,
            title: "Quiz application",
            tech: "Java",
            description: "Developed a Quiz Application using Java to allow users to take multiple-choice quizzes in a user-friendly interface",
            link: "https://github.com/shrutighumade/quizapplication"
          }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      {projects.map((p) => (
        <div key={p.id} className="project">
          <h3>{p.title}</h3>
          <p style={{ color: "var(--muted)" }}>{p.tech}</p>
          <p>{p.description}</p>
          {p.link && (
            <a href={p.link} className="btn" target="_blank" rel="noopener noreferrer">
              View
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
