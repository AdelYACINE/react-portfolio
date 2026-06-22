import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Stack from "./Sections/Stack";
import Contact from "./Sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
