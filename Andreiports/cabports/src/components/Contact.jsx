import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-row">
        <label>Email:</label>
        <a
          className="contact-link"
          href="mailto:johnandreicabrera011@gmail.com"
        >
          johnandreicabrera011@gmail.com
        </a>
      </div>
      <div className="contact-row">
        <label>LinkedIn:</label>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/john-andrei-cabrera"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/john-andrei-cabrera
        </a>
      </div>
      <div className="contact-row">
        <label>GitHub:</label>
        <a
          className="contact-link"
          href="https://github.com/johnandreicabrera"
          target="_blank"
          rel="noreferrer"
        >
          github.com/johnandreicabrera
        </a>
      </div>
    </section>
  );
}

export default Contact;
