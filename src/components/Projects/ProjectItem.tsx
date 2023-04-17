import { useCallback } from "react";
import { projectsStyles } from "./Projects.css";

export type Props = {
  readonly id: number;
  readonly title: string;
  readonly image: string;
  readonly onOverlayOpen: () => void;
  readonly onProjectSelect: (id: number) => void;
};

export const ProjectItem = ({
  id,
  title,
  image,
  onOverlayOpen,
  onProjectSelect,
}: Props) => {
  const handleClick = useCallback(() => {
    onProjectSelect(id);
    onOverlayOpen();
  }, []);

  return (
    <li key={id} className={projectsStyles.project} onClick={handleClick}>
      <div className={projectsStyles.projectBg}>
        <h3 className={projectsStyles.projectName}>{title}</h3>
      </div>
    </li>
  );
};
