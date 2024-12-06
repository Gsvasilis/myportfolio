import "../styles/About.scss";
import { GraduationCap,Headset, Briefcase} from "lucide-react";

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About me</h1>
        <h4>My Introduction</h4>
      </div>
      <div className="wrapper">
        <div className="imgContainer">
          <img src="/profilePhoto.jpg" alt="" />
        </div>
        <div className="textContainer">
          <div className="boxContainer">
              <div className="box">
          <GraduationCap/>
          <h4>Experience</h4>
          <p>New Entry</p>
          </div>
          <div className="box">
          <Briefcase/>
          <h4>Completed</h4>
          <p>3</p>
          </div>
          <div className="box">
          <Headset/>
          <h4>Support</h4>
          <p>24/7</p>
          </div>
          </div>
           <div className="container">
        <p>
          Hi,I'm <b>Vasilis Georgakopoulos</b>, a <b>Junior Web Developer</b> .{" "}
          <br />I recently completed a 12-month program at Datalabs, where I
          gained strong skills in <b>frontend</b> and
          <b> backend </b> development.I'm passionate about continuous learning
          and am open to new projects and collaborations. Outside of work, I
          enjoy gymnastics, reading, and kayaking. I'm excited about the
          opportunities ahead and am always open to new projects and
          collaborations. Feel free to get in touch to discuss potential
          projects, share ideas, or just say <b>hello!</b>
        </p>
      </div>
        </div>
      </div>
     
    </div>
  );
}

export default About;
