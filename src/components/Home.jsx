import "../styles/Home.scss";
import CV from "../assets/VasilisGeorgakopoulos.pdf";
import { FaFileAlt } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import {motion} from "framer-motion"
import { useEffect, useRef } from "react";

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

    scrollBtn:{
      opacity:0,
      y:10,
      transition:{
          duration:2,
          repeat:Infinity
      }
  }
}

const imgVariants = {
  initial:{
    y:-500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}

function Home() {

  const ref = useRef()

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 80){
        ref.current.classList.add("active")
      }
      else{
        ref.current.classList.remove("active")
      }
    })
  },[])

  return (
    <section className="home" id="home">
      <motion.div variants={textVariants} initial="initial" animate="animate" className="left">
        <motion.div variants={textVariants} className="textContainer">
          <motion.h1 variants={textVariants}>
            {" "}
            Hi,I am <span>Vasilis Georgakopoulos</span>
          </motion.h1>
          <motion.h3 variants={textVariants}>Junior Web Developer</motion.h3>
          <motion.p variants={textVariants}>
            {" "}
            Passionate about crafting intuitive and engaging web experiences
            with elegant code and thoughtful design. <br />
            Let’s create something exceptional together.
          </motion.p>
        </motion.div>
        <motion.div variants={textVariants} className="btnContainer">
          <motion.button variants={textVariants}>
            <a href="#portfolio">Latest Works <BsPersonWorkspace size={20}/></a>
          </motion.button>
          <motion.button variants={textVariants}>
            <a href={CV} download={CV}>
              Download CV <FaFileAlt size={20} />
            </a>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div variants={imgVariants} initial="initial" animate="animate" className="right">
        <div className="imgContainer">
          <img src="/homeImg.jpg" alt="" />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
