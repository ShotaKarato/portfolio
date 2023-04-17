import { projectsStyles } from "./Projects.css";
import { Project } from "./types";

export type Props = Project;

export const ProjectDetail = ({
  title,
  description,
  image,
  github,
  url,
  techStack,
}: Props) => (
  <>
    <h3 className="overlay__prj-name">{title}</h3>
    <figure className={projectsStyles.projectImageContainer}>
      <img src={image} alt={title} className={projectsStyles.projectImage} />
    </figure>
    <p className={projectsStyles.projectDescription}>{description}</p>
    <h4 className={projectsStyles.projectTechsHeading}>Tech Stack</h4>
    <div className={projectsStyles.projectTechs}>
      {techStack ? (
        techStack.map((tech, index) => {
          const [icon] = Object.entries(tech);
          return (
            <img
              alt={icon[0]}
              src={icon[1]}
              className={projectsStyles.projectTechIcon}
              key={index}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
    {url && github ? (
      <div className="btn__container">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
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
    ) : !url && github ? (
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
    ) : (
      <div className="btn__container">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
          Visit the site
        </a>
      </div>
    )}
  </>
);
