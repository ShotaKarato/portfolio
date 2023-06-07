import { About, AboutProps } from "./sections/About";
import { Career, CareerProps } from "./sections/Career";

export type Props = {
  readonly about: AboutProps;
  readonly career: CareerProps["career"];
};

export const BioContainer = ({ about, career }: Props) => (
  <>
    <About {...about} />
    <Career career={career} />
  </>
);
