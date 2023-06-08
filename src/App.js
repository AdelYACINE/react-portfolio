import Navbar from "./Components/Navbar";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Home from "./Sections/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
