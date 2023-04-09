import { useOverlay } from "~/src/ui/Overlay/utils/useOverlay";
import { Projects } from "./Projects";

export const ProjectsContainer = () => {
  const { isOverlayOpen, handleOverlayOpen, handleOverlayClose } = useOverlay();
  return (
    <Projects
      isOverlayOpen={isOverlayOpen}
      onOverlayOpen={handleOverlayOpen}
      onOverlayClose={handleOverlayClose}
    />
  );
};
