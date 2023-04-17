import { useOverlay } from "~/src/ui/Overlay/utils/useOverlay";
import { Projects } from "./Projects";
import { projects } from "~/src/data/projects";

export const ProjectsContainer = () => {
  const { isOverlayOpen, handleOverlayOpen, handleOverlayClose } = useOverlay();
  return (
    <Projects
      projects={projects}
      isOverlayOpen={isOverlayOpen}
      onOverlayOpen={handleOverlayOpen}
      onOverlayClose={handleOverlayClose}
    />
  );
};
