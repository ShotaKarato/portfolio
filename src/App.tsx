import { About } from "./components/About";
import { Career } from "./components/Career";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Footer />
    </div>
  );
};

export default App;
