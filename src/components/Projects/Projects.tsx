import { ProjectItem } from "./ProjectItem";
import { projects } from "./mock";

export const Projects = () => (
  <section className="projects">
    <h2 className="projects__heading">Projects</h2>
    <ul className="projects__container">
      {projects.map((props) => (
        <ProjectItem key={props.id} {...props} />
      ))}
    </ul>
  </section>
);
