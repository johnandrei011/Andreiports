import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './styles/global.css';

const sections = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" }
];

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        {sections.map(section => (
          <a
            key={section.id}
            className="navbtn"
            href={`#${section.id}`}
          >
            {section.name}
          </a>
        ))}
      </nav>
      <section id="home"><Header /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
