import React from "react";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-title">{project.title}</div>
          <p style={{ marginBottom: "8px" }}>{project.description}</p>
          <div style={{ marginBottom: "8px" }}>
            {project.tech.map((t, i) => (
              <span key={i} className="badge">
                {t}
              </span>
            ))}
          </div>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              View project
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
