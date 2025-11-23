import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles/global.css";

const sections = ["Home", "About", "Projects", "Skills", "Contact"];

function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="app">
      <nav className="navbar">
        {sections.map((section) => (
          <button
            key={section}
            className={`navbtn${active === section ? " active" : ""}`}
            onClick={() => setActive(section)}
          >
            {section}
          </button>
        ))}
      </nav>
      {active === "Home" && <Header />}
      {active === "About" && <About />}
      {active === "Projects" && <Projects />}
      {active === "Skills" && <Skills />}
      {active === "Contact" && <Contact />}
    </div>
  );
}

export default App;
