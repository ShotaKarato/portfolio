import { Bio } from "./components/Bio";
import { Outline } from "./components/Outline";
import { Projects } from "./components/Projects";

import "./styles/app.css";

export const App = () => {
  return (
    <div className="App">
      <Outline>
        <Bio />
        <Projects />
      </Outline>
    </div>
  );
};
