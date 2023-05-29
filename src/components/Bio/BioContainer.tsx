import { About, AboutProps } from "./sections/About";
import { Career } from "./sections/Career";
import { career } from "~/src/data/career";

export type Props = AboutProps;

export const BioContainer = (props: Props) => (
  <>
    <About {...props} />
    <Career careerList={career} />
  </>
);
