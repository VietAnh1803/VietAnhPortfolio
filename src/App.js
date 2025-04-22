import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Objective from "./components/Objective";

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-indigo-100 via-indigo-50 to-indigo-100 min-h-screen">
      <Header />
      <Objective />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
