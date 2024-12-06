import "../styles/Footer.scss"
import { Mail, Linkedin,Github} from "lucide-react"

function Footer() {
  return (
    <div className="footer">
        <div className="container">
             <div className="social">
              <p><a href="https://github.com/Gsfortyone" target="_blank"><Github/></a></p>
          <p><a href="https://www.linkedin.com/in/vasilisgeorgakopoulos" target="_blank"><Linkedin/></a></p>
          <p><a href="mailto:grkvasilis@gmail.com"><Mail/></a></p>
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
        </ul>
      </nav>
        </div>
      <div className="policy">
      <p>&copy; 2024 Vasilis Georgakopoulos. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer