import { useState } from "react";
import "../styles/Navbar.scss";
import { AlignJustify } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);



  return (
    <div className="navbar">
      <header className="header">
        <div className="logo">
          <p>
            <a href="/">Gs</a>
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
          </ul>
          <button>
            <a href="#contact">Contact me</a>
          </button> 
        </nav>
      </header>
      {/* sidebar */}
<div className="menu-icon">
            <AlignJustify className="icon"  onClick={() => setOpen((prev) => !prev)} />
          </div>
      <div className={open ? "sidebar active" : "sidebar"}>
        <ul>
          <li>
            <a href=""onClick={() => setOpen((prev) => !prev)} >home</a>
          </li>
          <li>
            <a href="#services" onClick={() => setOpen((prev) => !prev)} >services</a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setOpen((prev) => !prev)} >portfolio</a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen((prev) => !prev)} >about</a>
          </li>
          <button>
            <a href="#contact" onClick={() => setOpen((prev) => !prev)} >Contact me</a>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
