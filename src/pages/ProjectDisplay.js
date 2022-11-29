import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon onClick={() => window.open(project.link)}/>
    </div>
  );
}

export default ProjectDisplay;