import { Bio } from "./components/Bio";
import { Outline } from "./components/Outline";
import { Projects } from "./components/Projects";

import "./styles/app.css";

const App = () => (
  <div className="App">
    <Outline>
      <Bio />
      <Projects />
    </Outline>
  </div>
);

export default App;
