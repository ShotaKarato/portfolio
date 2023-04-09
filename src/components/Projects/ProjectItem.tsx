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
  <li key={id} className="projects__project">
    <div className="projects__project-bg">
      <h3 className="projects__project-name" onClick={onOverlayOpen}>
        {title}
      </h3>
    </div>
  </li>
);
