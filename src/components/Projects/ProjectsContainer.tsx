import { useOverlay } from "~/src/ui/Overlay/utils/useOverlay";
import { Projects } from "./Projects";
// import { projects } from "~/src/data/projects";
import { useSelectedProject } from "./utils/useSelectedProject";
import { Project } from "./types";

export type Props = {
  readonly projects: Project[];
};

export const ProjectsContainer = ({ projects }: Props) => {
  const { isOverlayOpen, handleOverlayOpen, handleOverlayClose } = useOverlay();
  const { selectedProject, handleProjectSelect } = useSelectedProject(projects);

  return (
    <Projects
      projects={projects}
      selectedProject={selectedProject}
      isOverlayOpen={isOverlayOpen}
      onOverlayOpen={handleOverlayOpen}
      onOverlayClose={handleOverlayClose}
      onProjectSelect={handleProjectSelect}
    />
  );
};
