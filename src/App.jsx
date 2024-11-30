import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Loader from "./components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
          <About />
          <hr style={{ height: "2px", background: "aquamarine" }} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
