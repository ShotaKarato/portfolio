import React, { useReducer, createContext } from "react";
import { langReducer, initialState } from "./reducer";
// style
import "./css/styles.css";
// components
import Header from "./components/Header";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export const LangContext = createContext();

function App() {
  const [state, dispatch] = useReducer(langReducer, initialState);
  return (
    <LangContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <About />
        <Career />
        <Projects />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
