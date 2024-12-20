import { useState } from "react";
import "../styles/Navbar.scss"
import { IoIosMenu } from "react-icons/io";
function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="navbar">
        <div className="logo">
            <span><a href="">Gs</a></span>
        </div>
        <nav>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
    {/* sidebar */}
    <div className="sidebar-icon">
    <IoIosMenu onClick={()=>setOpenMenu((prev)=>!prev)} size={25} />
    </div>
    <div className={openMenu ? "sidebar active" : "sidebar"}>

            <ul>
                <li><a href="/" onClick={()=>setOpenMenu((prev)=>!prev)}>home</a></li>
                <li><a href="#about" onClick={()=>setOpenMenu((prev)=>!prev)}>about</a></li>
                <li><a href="#portfolio" onClick={()=>setOpenMenu((prev)=>!prev)}>portfolio</a></li>
                <li><a href="#contact" onClick={()=>setOpenMenu((prev)=>!prev)}>contact</a></li>
            </ul>
    </div>
    </div>
  )
}

export default Navbar