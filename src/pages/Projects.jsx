import React from "react";
import project from "./project";
import "./project.css";

export default function Projects() {
  return (
    <div className="pro-body">
      <h1>Projects</h1>
      <div className="grid-container">
        {project && project.length > 0
          ? project.map((item) => (
              <div className="card">
                <a href={item.link} target="_blank">
                  <img src={item.imgUrl} alt={item.title} />
                  <h3>{item.title}</h3>
                </a>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
