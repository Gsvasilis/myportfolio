import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.scss";
import resume from "../assets/resume.pdf"
import {motion} from "framer-motion"

const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const imageVariants = {
    initial:{
      y:-500,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1
      }
    },
  }
  const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
      x:"-220%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:50,
        staggerChildren:0.1
      }
    },
  }

function Hero() {
  return (
    <div className="hero">
      <motion.div variants={textVariants} initial="initial" animate="animate" className="left">
        <motion.div variants={textVariants} className="textContainer">
          <motion.h1 variants={textVariants}>
            Hi, I am <span>Vasilis Georgakopoulos</span>
          </motion.h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              " Web Developer",
              1000,
              " ReactJs Developer",
              1000,
              " Backend Developer",
              1000,
              " FullStack Professional",
              1000,
            ]}
            speed={30}
            repeat={Infinity}
            className="text-animation"
          />
          <motion.p variants={textVariants}>
            {" "}
            Passionate about crafting intuitive and engaging web experiences
            with elegant code and thoughtful design. <br />Let’s create something
            exceptional together.
          </motion.p>
        </motion.div>
        <motion.div className="buttons" variants={textVariants}>
            <button><a href="#portfolio">see the latest works</a></button>
            <button><a href={resume} download="resume">my resume</a></button>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </motion.div>
      <motion.div variants={imageVariants}  initial="initial" animate="animate"  className="right">
        <motion.div variants={imageVariants} className="imgContainer">
          <img src="/profilePhoto.jpg" alt="" />
        </motion.div>
      </motion.div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate"  className="slider">
        <motion.h1 variants={sliderVariants} > Coding Dreams into Reality</motion.h1>
      </motion.div>
    </div>
  );
}

export default Hero;
