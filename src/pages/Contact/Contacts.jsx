import { useState } from "react";
import "./contacts.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="letter">
        <form action="">
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Enter your email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="msg">Share your thoughts: </label>
          <input
            type="text"
            name="msg"
            id="msg"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <div className="contact-img"></div>
      </div>
      <footer>
        <p>Phone: 1234567890</p>
        <p>Email: </p>
      </footer>
    </div>
  );
}
