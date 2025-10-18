// src/components/Home.jsx
import React from "react";

export default function Home() {
  return (
    <section id="home" className="card header">
      <img src="/images/profile.jpeg" alt="profile" className="profile-img" />
      <div>
        <h1 style={{ margin: 0 }}>Hi — I'm Shruti</h1>
        <p style={{ color: "var(--muted)" }}>
          Full-stack developer • .NET | React | SQL | Java
        </p>
        <p>
          I develop backend APIs with .NET, Java, and SQL, and create dynamic React frontends. I love learning new tech stacks and shipping projects.
        </p>

        <div style={{ marginTop: 12, display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a className="btn" href="#projects">
            See Projects
          </a>

          {/* Resume Download Button */}
          <a
            className="btn"
            href="/files/Ghumade.N.pdf"  // Put your resume in public/files/
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
