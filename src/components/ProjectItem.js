import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, description, link }) {
  const navigate = useNavigate();
  return (
    <div className="projectItem">
      <div id="all">
  <div class="view view-first">
    <img src={image} />
    <div class="mask">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link} class="info" target="_blank" rel="noreferrer">Read More</a>
    </div>
        </div>
        </div>
    </div>
  );
}

export default ProjectItem;