import "../styles/Footer.scss"
import { Mail, Linkedin} from "lucide-react"

function Footer() {
  return (
    <div className="footer">
        <div className="container">
             <div className="social">
          <p><a href="https://www.linkedin.com/in/vasilisgeorgakopoulos" target="_blank"><Linkedin/></a></p>
          <p><a href="mailto:grkvasilis@gmail.com"><Mail/></a></p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="#services">services</a>
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
        </div>
      <div className="policy">
      <p>&copy; 2024 Vasilis Georgakopoulos. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer