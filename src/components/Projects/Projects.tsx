import { Heading } from "../../ui/Heading";
import { ProjectItem } from "./ProjectItem";
import { projects } from "./mock";

export const Projects = () => (
  <section className="projects">
    <Heading className="projects__heading">Projects</Heading>
    <ul className="projects__container">
      {projects.map((props) => (
        <ProjectItem key={props.id} {...props} />
      ))}
    </ul>
  </section>
);
