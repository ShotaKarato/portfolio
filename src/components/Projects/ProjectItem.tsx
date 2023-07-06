import { useCallback } from "react";
import { bgImageStyle, projectsStyles } from "./Projects.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

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
    <li
      key={title}
      className={projectsStyles.project}
      style={assignInlineVars({
        [bgImageStyle.bgImage]: `url(${image})`,
        [bgImageStyle.bgSize]: "cover",
        [bgImageStyle.bgImagePosition]: "center center",
        [bgImageStyle.bgImageRepeat]: "no-repeat",
      })}
      onClick={handleClick}
    >
      <div className={projectsStyles.projectBg}>
        <h3 className={projectsStyles.projectName}>{title}</h3>
      </div>
    </li>
  );
};
