import { useRef } from "react";
import "../styles/Services.scss";
import {animate, motion,useInView} from "framer-motion"


function Services() {

  const ref = useRef()
  const isInView = useInView(ref,{margin:"-100px"})

  const variants = {
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
    }
  }

  return (
    <motion.div variants={variants} initial="initial" animate={isInView && "animate"} ref={ref} className="services" id="services">
      <motion.div variants={variants} className="top">
        <div className="pContainer">
          <p>
            I focus on helping your brand grow <br />
            and move forward
          </p>
          <hr />
        </div>
      </motion.div>
      <motion.div variants={variants} className="center">
        <motion.div variants={variants} className="titleContainer">
            <div className="imgContainer">
                <img src="/people.webp" alt="" />
            </div>
            <h1>Unique Ideas</h1>
        </motion.div>
        <motion.div variants={variants} className="title">
          <h1>  For Your Business </h1>
          <button><a href="#portfolio">What We Do?</a></button>
        </motion.div>
      </motion.div>
      <motion.div variants={variants} initial="initial" animate="animate" className="bottom">
        <motion.div variants={variants} className="boxContainer">
            <motion.div  className="box">
                <h3>Web Development</h3>
                <p>Transforming ideas into visually stunning and fully functional websites is my passion. I specialize in building responsive, user-friendly web applications that provide seamless experiences across all devices. Utilizing the latest web technologies and best practices, I ensure your online presence stands out and performs optimally.</p>
            </motion.div>
            <motion.div  className="box">
                <h3>React Development</h3>
                <p>Harnessing the power of React, I create dynamic single-page applications that are fast, scalable, and maintainable. My expertise in React allows me to build intuitive and interactive user interfaces, ensuring a smooth user experience. From state management to component-based architecture, I have the skills to bring your project to life.</p>
            </motion.div>
            <motion.div  className="box">
                <h3>Backend Development</h3>
                <p>A robust backend is the backbone of any successful web application. I specialize in creating efficient and secure backend solutions using technologies like Node.js, Express, and MongoDB. By focusing on performance and scalability, I ensure your application can handle growing traffic and complex data requirements.</p>
            </motion.div>
            <motion.div  className="box">
                <h3>FullStack Development</h3>
                <p>As a FullStack Developer, I bridge the gap between front-end and back-end development to deliver complete, end-to-end solutions. Whether it's building a feature-rich client interface or architecting a resilient server infrastructure, I have the expertise to manage all aspects of the development process. My holistic approach ensures that every part of your application works seamlessly together.</p>
            </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
