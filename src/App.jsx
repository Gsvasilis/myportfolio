import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <About/>
      <hr style={{height:"2px", background:"aquamarine"}} />
      <Footer/>
    </div>
  )
}

export default App