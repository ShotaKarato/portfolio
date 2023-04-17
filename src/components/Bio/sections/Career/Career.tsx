import { CareerItem, Props as CareerItemProps } from "./CareerItem";
import { Heading } from "~/src/ui/Heading";
import { careerStyles } from "./Career.css";

type Props = {
  readonly careerList: CareerItemProps[];
};

export const Career = ({ careerList }: Props) => (
  <section className={careerStyles.career}>
    <Heading className={careerStyles.heading}>Career</Heading>
    <ul className="career__timeline">
      {careerList.map((props) => (
        <CareerItem key={props.jobTitle} {...props} />
      ))}
    </ul>
  </section>
);
