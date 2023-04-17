import { careerStyles } from "./Career.css";

export type Props = {
  readonly period: string;
  readonly jobTitle: string;
  readonly description?: string;
  readonly image: string;
  readonly alt: string;
};
export const CareerItem = ({
  image,
  alt,
  period,
  jobTitle,
  description,
}: Props) => (
  <li className={careerStyles.item}>
    <div className={careerStyles.itemWrapper}>
      <figure className={careerStyles.logo}>
        <img src={image} alt={alt} className={careerStyles.logoImg} />
      </figure>
      <div>
        <span>{period}</span>
        <p className={careerStyles.job}>{jobTitle}</p>
        <p className={careerStyles.desc}>{description}</p>
      </div>
    </div>
  </li>
);
