import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import ScrollIndicator from "./components/ScrollIndicator"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import { useState } from "react"




function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="app">
      {loading && <Loader setLoading={setLoading}/>}
      {!loading && (
        <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ScrollIndicator/>
        </>
      )}
   
    </div>
  )
}

export default App