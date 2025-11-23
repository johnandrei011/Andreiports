import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a className="link" href="mailto:johnandreicabrera@example.com">
          johnandreicabrera011@gmail.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          className="link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/john-andrei-cabrera
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          className="link"
          href="https://github.com/johnandrei011/StudentPortfolio.github.io"
          target="_blank"
          rel="noreferrer"
        >
          github.com/johnandreicabrera
        </a>
      </p>
    </section>
  );
}

export default Contact;
