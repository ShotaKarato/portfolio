import { Bio } from "./components/Bio";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
