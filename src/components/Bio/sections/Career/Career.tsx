import { CareerItem, Props as CareerItemProps } from "./CareerItem";
import { Heading } from "~/src/ui/Heading";
import { careerStyles } from "./Career.css";

export type Props = {
  readonly career: CareerItemProps[];
};

export const Career = ({ career }: Props) => (
  <section className={careerStyles.career}>
    <Heading className={careerStyles.heading}>Career</Heading>
    <ul>
      {career.map((careerItem) => (
        <CareerItem key={careerItem.jobTitle} {...careerItem} />
      ))}
    </ul>
  </section>
);
