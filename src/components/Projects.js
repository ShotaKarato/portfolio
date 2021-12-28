import React, { useState } from "react";
// projects json
import { projects as data } from "../data/projects.json";
// component
import Overlay from "./Overlay";

export default function Projects() {
  // state - projects info
  const [projects] = useState(data);

  // state - selected project
  const [selectedProject, setSelectedProject] = useState({});
  // function to update selected project
  const updateSelectedProject = (id) => {
    const selectedItem = projects.find((project) => project.id === id);
    setSelectedProject(selectedItem);
    toggleOverlay();
  };
  // state - overlay
  const [isVisible, setIsVisible] = useState(false);
  const toggleOverlay = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <section className="projects">
        <h2 className="projects__heading">Projects</h2>
        <div className="projects__container">
          {projects.map(({ id, title, image }, index) => {
            return (
              <div
                className="projects__project"
                key={index}
                style={{
                  background: `url("${image}") no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => {
                  updateSelectedProject(id);
                }}
              >
                <div className="projects__project-bg">
                  <h3 className="projects__project-name">{title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Overlay
        projectInfo={selectedProject}
        visibility={isVisible}
        toggleOverlay={toggleOverlay}
      />
    </>
  );
}
