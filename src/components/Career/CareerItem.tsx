export type Props = {
  readonly period: string;
  readonly jobTitle: string;
  readonly description?: string;
  readonly img: string;
  readonly alt: string;
};
export const CareerItem = ({
  img,
  alt,
  period,
  jobTitle,
  description,
}: Props) => (
  <li className="career__item">
    <figure className="career__item-logo">
      <img src={img} alt={alt} className="career__item-logo-img" />
    </figure>
    <div className="career__info">
      <span className="career__period">{period}</span>
      <p className="career__institute">{jobTitle}</p>
      <p className="career__description">{description}</p>
    </div>
  </li>
);
