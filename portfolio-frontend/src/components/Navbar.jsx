// src/components/Navbar.jsx
import React from "react";

export default function Navbar(){
  return (
    <nav className="nav">
      <div style={{fontWeight:700, fontSize:18}}>Shruti Ghumde</div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
