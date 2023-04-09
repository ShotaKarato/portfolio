import { careerStyles } from "./Career.css";

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
  <li className={careerStyles.item}>
    <div className={careerStyles.itemWrapper}>
      <figure className={careerStyles.logo}>
        <img src={img} alt={alt} className={careerStyles.logoImg} />
      </figure>
      <div>
        <span>{period}</span>
        <p className={careerStyles.job}>{jobTitle}</p>
        <p className={careerStyles.desc}>{description}</p>
      </div>
    </div>
  </li>
);
