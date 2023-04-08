type Props = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
};

export const ProjectItem = ({ id, title, description, image }: Props) => (
  <li key={id} className="projects__project">
    <div className="projects__project-bg">
      <h3 className="projects__project-name">{title}</h3>
    </div>
  </li>
);
