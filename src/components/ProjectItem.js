import React from "react";

function ProjectItem({ name, about, technologies }) {
  //deliverable 3
  const technologiesElements = technologies.map((technologies) =>{
    return <span key= {technologies}> {technologies} </span>
  })
  
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesElements}
      </div>
    </div>
  );
}

export default ProjectItem;
