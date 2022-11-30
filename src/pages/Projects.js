import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList.js";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> Some of my projects...</h1>
      <h2> Note: this section is in progress, to see my projects, visit <a href="https://github.com/fei-felicia-chen" target="_blank" rel="noreferrer">my GitHub</a></h2>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem description={ project.description } name={project.name} image={project.image} link={project.link} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;