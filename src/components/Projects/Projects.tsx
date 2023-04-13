import { Overlay, OverlayProps } from "~/src/ui/Overlay";
import { Heading } from "~/src/ui/Heading";
import { ProjectItem } from "./ProjectItem";
import type { Props as ProjectItemProps } from "./ProjectItem";
import { projects } from "./mock";
import { projectsStyles } from "./Projects.css";

export type Props = {
  readonly isOverlayOpen: OverlayProps["isOpen"];
  readonly onOverlayOpen: ProjectItemProps["onOverlayOpen"];
  readonly onOverlayClose: OverlayProps["onClose"];
};
export const Projects = ({
  onOverlayOpen,
  isOverlayOpen,
  onOverlayClose,
}: Props) => {
  return (
    <section className={projectsStyles.projects}>
      <Heading className={projectsStyles.heading}>Projects</Heading>
      <ul className={projectsStyles.container}>
        {projects.map((props) => (
          <ProjectItem
            key={props.id}
            {...props}
            onOverlayOpen={onOverlayOpen}
          />
        ))}
      </ul>
      <Overlay isOpen={isOverlayOpen} onClose={onOverlayClose}>
        <p>Projects!</p>
      </Overlay>
    </section>
  );
};
