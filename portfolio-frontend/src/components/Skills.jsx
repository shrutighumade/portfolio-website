// src/components/Skills.jsx
import React from "react";

const skills = [
  "C#", ".NET 6/7", "React", "HTML/CSS", "JavaScript", "Database Design & Optimization","Swagger", "Java (Core & Advanced)","Git", "SQL/PlSQL", "GitHub","JSON", "Postman", "RESTful APIs"
];

export default function Skills(){
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(s => <div key={s} className="skill">{s}</div>)}
      </div>
    </section>
  );
}
