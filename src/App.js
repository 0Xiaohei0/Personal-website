import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import TimeLine from "./Components/TimeLine";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <TimeLine />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
