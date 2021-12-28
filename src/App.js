// style
import "./css/styles.css";
// components
import Header from "./components/Header";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
