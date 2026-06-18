import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact container">
      <h1>Contact Us</h1>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>

        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;