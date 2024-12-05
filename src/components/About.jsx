import "../styles/About.scss";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";


const arrowVariants = {
  arrowIcon: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function About() {


  return (
    <div className="about" id="about">
      <div className="title">
         <h1>About me</h1>  
      </div>
      <div className="container">
        <p>
          Hi, I'm <b>Vasilis Georgakopoulos</b>, a passionate{" "}
          <b>Junior Web Developer</b> embarking on an exciting journey in the tech industry. Although I'm
          new to the field,I've recently completed an intensive 12-month program at
          Datalabs, where I honed my skills and developed a deep understanding
          of web development. As a <b>Frontend Developer</b>, my
          expertise lies in <b>React.js</b>. I'm equally adept as a <b>Backend Developer</b> with <b>Node.js</b>, enabling me to build
          robust and scalable server-side applications.Beyond my
          professional pursuits, I have a few personal passions that keep me
          balanced and inspired. I enjoy gymnastics, which has taught me
          discipline and perseverance.Reading books is another passion
          of mine, always eager to learn and grow through new knowledge. Additionally, I love kayaking, which provides a sense of adventure and
          tranquility, helping me recharge and stay focused. I am committed
          to continuously learning and evolving in this ever-changing field.I'm excited about the opportunities
          ahead and am always open to new projects and collaborations. Feel free
          to get in touch to discuss potential projects, share ideas, or just
          say
          <b> hello</b>!
        </p>
      </div>
    </div>
  );
}

export default About;
