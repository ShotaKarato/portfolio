import { About } from "./components/About";
import { Career } from "./components/Career";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
