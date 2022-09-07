import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import TimeLine from "./Components/TimeLine";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <TimeLine />
    </div>
  );
}

export default App;
