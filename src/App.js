import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import TimeLine from "./Components/TimeLine";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <TimeLine />
      <Skills />
    </div>
  );
}

export default App;
