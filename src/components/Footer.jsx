import "../styles/Footer.scss";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
        <div className="footerContainer">
          <div className="socialContainer">
        <p>
          <a href="https://github.com/Gsvasilis" target="_blank">
            <FaGithub size={25} />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/vasilisgeorgakopoulos"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
        </p>
        <p>
          <a href="mailto:grkvasilis@gmail.com">
            {" "}
            <MdAlternateEmail size={25} />
          </a>
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href=""><FaHome size={25}/></a>
          </li>
          <li>
            <a href="#about"><SiAboutdotme size={55} /></a>
          </li>
          <li>
            <a href="#portfolio"><BsPersonWorkspace size={25}/></a>
          </li>
        </ul>
      </nav>   
        </div>
     

      <div className="policyContainer">
        <p>&copy; 2024 Vasilis Georgakopoulos. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
