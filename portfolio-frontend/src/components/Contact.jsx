// src/components/Contact.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
     const apiUrl = import.meta.env.VITE_CONTACT_API_URL;


      console.log("API URL:", apiUrl); // Debugging log

      const response = await axios.post(apiUrl, form);
      console.log("Server response:", response.data);

      setStatus("✅ Message sent successfully — thank you!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err.response?.data || err.message);
      setStatus("❌ Failed to send message. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="card">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <div style={{ marginTop: 8 }}>
          <button className="btn" type="submit">
            Send
          </button>
        </div>

        <p style={{ color: "var(--muted)", marginTop: "10px" }}>{status}</p>
      </form>
    </section>
  );
}
