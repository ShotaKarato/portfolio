import { Bio } from "./components/Bio";
import { Outline } from "./components/Outline";
import { Projects, ProjectsProps } from "./components/Projects";

import "./styles/app.css";
import type { BioProps } from "./components/Bio";

type Props = ProjectsProps & BioProps;
export const App = ({ projects, ...rest }: Props) => (
  <div className="App">
    <Outline>
      <Bio {...rest} />
      <Projects projects={projects} />
    </Outline>
  </div>
);
