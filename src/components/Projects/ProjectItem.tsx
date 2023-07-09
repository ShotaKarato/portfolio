import { useCallback } from "react";
import { bgImageStyle, projectsStyles } from "./Projects.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Project } from "./types";

export type Props = {
  readonly title: Project["title"];
  readonly image: Project["image"];
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
        [bgImageStyle.bgImage]: `url(${image.url})`,
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
