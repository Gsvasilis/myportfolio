
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

import Skills from "./components/Skills/Skills";
function App() {


  return (
    <div className="app">
          <Navbar />
          <Hero />
          <Skills/>
          <About />
          <Portfolio />
          <Contact />
          
          <hr style={{ height: "2px", background: "aquamarine" }} />
          <Footer />
    </div>
  );
}

export default App;
