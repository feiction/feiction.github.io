import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList.js";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> Some of my projects... AAAA</h1>
      <h2> Note: this section is in progress, see <a href="https://github.com/fei-felicia-chen">my GitHub</a></h2>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;