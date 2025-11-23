import React from "react";

function Header() {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <div>
          <span className="profile-greeting">Hi, I’m John Andrei Cabrera</span>
          <h1 className="profile-title">
            I&apos;m a<br />
            <span className="profile-accent">Computer Science Student</span>
          </h1>
          <p className="profile-desc">
            Passionate about web development, problem solving, and building useful applications.<br />
            <span className="profile-small">
              3rd Year BS Computer Science • Future Backend Developer
            </span>
          </p>
          <a href="#projects">
            <button className="main-btn">View My Projects</button>
          </a>
        </div>
      </div>
      <div className="profile-photo">
        <img src="/profile.png" alt="John Andrei Cabrera" className="profile-img" />
      </div>
    </div>
  );
}

export default Header;
