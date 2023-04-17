import { profile } from "~/src/data/profile";
import { About } from "./sections/About";
import { Career } from "./sections/Career";
import { career } from "~/src/data/career";

export const BioContainer = () => (
  <>
    <About {...profile} />
    <Career careerList={career} />
  </>
);
