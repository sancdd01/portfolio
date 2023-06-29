import React from "react";
import { Proj_Feature } from "../../components";
import "./projects.css";
import data from "./data.json";

const Projects = () => {
  return (
    <div className="projects__container" id="projects">
      {data.map((project, index) => (
        <div key={index} className="proj__feature">
          <Proj_Feature
            video={project.video}
            title={project.title}
            blurb={project.blurb}
            url={project.url}
            source_code={project.source_code}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
