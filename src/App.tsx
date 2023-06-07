import { Bio } from "./components/Bio";
import { Outline } from "./components/Outline";
import { Projects } from "./components/Projects";

import "./styles/app.css";
import type { BioProps } from "./components/Bio";

type Props = BioProps;
export const App = (props: Props) => (
  <div className="App">
    <Outline>
      <Bio {...props} />
      <Projects />
    </Outline>
  </div>
);
