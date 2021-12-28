import React from "react";

export default function Overlay({
  projectInfo: { title, image, description, github, url, techStack },
  visibility,
  toggleOverlay,
}) {
  return (
    <div className={visibility ? "overlay overlay--visible" : "overlay"}>
      <div className="overlay__bg">
        <p className="overlay__btn-container">
          <span
            className="overlay__btn-close"
            onClick={() => toggleOverlay()}
          ></span>
        </p>
        <h3 className="overlay__prj-name">{title}</h3>
        <figure className="overlay__prj-image-container">
          <img src={image} alt={title} className="overlay__prj-image" />
        </figure>
        <p className="overlay__prj-desc">{description}</p>
        <h4 className="overlay__prj-techs-heading">Tech Stack</h4>
        <div className="overlay__prj-techs">
          {techStack ? (
            techStack.map((tech, index) => {
              const [icon] = Object.entries(tech);
              return (
                <img
                  alt={icon[0]}
                  src={icon[1]}
                  className="overlay__prj-tech-icon"
                  key={index}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
        {url ? (
          <div className="btn__container">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit the site
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View the code
            </a>
          </div>
        ) : (
          <div className="btn__container">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View the code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
