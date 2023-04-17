import { useOverlay } from "~/src/ui/Overlay/utils/useOverlay";
import { Projects } from "./Projects";
import { projects } from "~/src/data/projects";
import { useSelectedProject } from "./utils/useSelectedProject";

export const ProjectsContainer = () => {
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
