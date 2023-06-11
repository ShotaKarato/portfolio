import { useCallback } from "react";
import { projectsStyles } from "./Projects.css";

export type Props = {
  readonly title: string;
  readonly image: string;
  readonly onOverlayOpen: () => void;
  readonly onProjectSelect: (title: string) => void;
};

export const ProjectItem = ({
  title,
  image,
  onOverlayOpen,
  onProjectSelect,
}: Props) => {
  const handleClick = useCallback(() => {
    onProjectSelect(title);
    onOverlayOpen();
  }, []);

  return (
    <li key={title} className={projectsStyles.project} onClick={handleClick}>
      <div className={projectsStyles.projectBg}>
        <h3 className={projectsStyles.projectName}>{title}</h3>
      </div>
    </li>
  );
};
