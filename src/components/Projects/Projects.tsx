import { Overlay, OverlayProps } from "~/src/ui/Overlay";
import { Heading } from "~/src/ui/Heading";
import { ProjectItem } from "./ProjectItem";
import type { Props as ProjectItemProps } from "./ProjectItem";
import { projectsStyles } from "./Projects.css";
import { ProjectDetail } from "./ProjectDetail";
import type { Props as ProjectDetailProps } from "./ProjectDetail";

export type Props = {
  readonly projects: Omit<
    ProjectItemProps,
    "onOverlayOpen" | "onProjectSelect"
  >[];
  readonly selectedProject: ProjectDetailProps | null;
  readonly isOverlayOpen: OverlayProps["isOpen"];
  readonly onOverlayOpen: ProjectItemProps["onOverlayOpen"];
  readonly onProjectSelect: ProjectItemProps["onProjectSelect"];
  readonly onOverlayClose: OverlayProps["onClose"];
};
export const Projects = ({
  projects,
  selectedProject,
  isOverlayOpen,
  onOverlayOpen,
  onOverlayClose,
  onProjectSelect,
}: Props) => (
  <section className={projectsStyles.projects}>
    <Heading className={projectsStyles.heading}>Projects</Heading>
    <ul className={projectsStyles.container}>
      {projects.map((props) => (
        <ProjectItem
          key={props.title}
          {...props}
          onOverlayOpen={onOverlayOpen}
          onProjectSelect={onProjectSelect}
        />
      ))}
    </ul>
    <Overlay isOpen={isOverlayOpen} onClose={onOverlayClose}>
      {isOverlayOpen && selectedProject && (
        <ProjectDetail {...selectedProject} />
      )}
    </Overlay>
  </section>
);
