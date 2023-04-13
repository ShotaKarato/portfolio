import { projectsStyles } from "./Projects.css";

export type Props = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly onOverlayOpen: () => void;
};

export const ProjectItem = ({
  id,
  title,
  description,
  image,
  onOverlayOpen,
}: Props) => (
  <li key={id} className={projectsStyles.project} onClick={onOverlayOpen}>
    <div className={projectsStyles.projectBg}>
      <h3 className={projectsStyles.projectName}>{title}</h3>
    </div>
  </li>
);
