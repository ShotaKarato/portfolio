// style
import "./css/styles.css";
// components
import Header from "./components/Header";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Projects />
    </div>
  );
}

export default App;
