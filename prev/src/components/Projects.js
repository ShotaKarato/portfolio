import React, { useState, useEffect, useContext } from "react";
import { LangContext } from "../App";
// projects json
import { projects as dataEn } from "../data/projects_en.json";
import { projects as dataJp } from "../data/projects_jp.json";
// component
import Overlay from "./Overlay";

export default function Projects() {
  // state - language
  const {
    state: { lang },
  } = useContext(LangContext);

  // state - projects info
  const [projects, setProjects] = useState(dataEn);
  // function to switch project info between en and jp
  const updateProjects = (language) => {
    if (language === "en") {
      setProjects(dataEn);
    } else {
      setProjects(dataJp);
    }
  };

  // state - selected project
  const [selectedProject, setSelectedProject] = useState({});
  // function to update selected project
  const updateSelectedProject = (id) => {
    const selectedItem = projects.find((project) => project.id === id);
    setSelectedProject(selectedItem);
    toggleOverlay();
  };

  // state - overlay visibility
  const [isVisible, setIsVisible] = useState(false);
  const toggleOverlay = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  useEffect(() => {
    updateProjects(lang);
  }, [lang]);
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
