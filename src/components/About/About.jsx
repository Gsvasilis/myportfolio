import "../../styles/About.scss"
import Frontend from "./Skills/Frontend"
import Backend from "./Skills/Backend"
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
function About() {
  return (
    <section className="about" id="about">
      <div className="titleContainer">
        <h1>About me</h1>
        <h4>My Skills</h4>
        </div>
        <div className="aboutContainer">
          <div className="left">
            <div className="frontContainer">
              <Frontend/>
            </div>
            <div className="backContainer">
              <Backend/>
            </div>
          </div>
          <div className="right">
            <div className="boxContainer">
              <div className="box">
                <FaGraduationCap size={25} />
                <h4>Experience</h4>
                <p>New Entry</p>
              </div>
              <div className="box">
                <FaBriefcase size={25} />
                <h4>Completed</h4>
                <p>3</p>
              </div>
              <div className="box">
                <FaHeadset size={25} />
                <h4>Support</h4>
                <p>24/7</p>
              </div>
            </div>
            <div className="parContainer">
              <p>
                Hi,I'm <b>Vasilis Georgakopoulos</b>, a{" "}
                <b>Junior Web Developer</b> . <br />I recently completed a
                12-month program at Datalabs, where I gained strong skills in{" "}
                <b>frontend</b> and
                <b> backend </b> development.I'm passionate about continuous
                learning and am open to new projects and collaborations. Outside
                of work, I enjoy gymnastics, reading, and kayaking. I'm excited
                about the opportunities ahead and am always open to new projects
                and collaborations. Feel free to get in touch to discuss
                potential projects, share ideas, or just say <b>hello!</b>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;
