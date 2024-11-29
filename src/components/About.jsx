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
  // const ref = useRef();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 20) {
  //       ref.current.classList.add("active");
  //     } else {
  //       ref.current.classList.remove("active");
  //     }
  //   });
  // }, []);

  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="container">
        <p>
          Hi,I'm <b>Vasilis Georgakopoulos</b> , a passionate{" "}
          <b>Junior Web Developer</b>
          embarking on an exciting journey in the tech industry. Although I'm
          new to the field,
          <br /> I've recently completed an intensive 10-month program at
          Datalabs, where I honed my skills and developed a deep understanding
          of web development. <br /> As a <b>Frontend Developer</b>, my
          expertise lies in <b>React.js</b> , where I create dynamic and
          responsive user interfaces. <br /> I'm equally adept as a{" "}
          <b>Backend Developer</b> with <b>Node.js</b>, enabling me to build
          robust and scalable server-side applications. This combination of
          frontend and backend skills allows me to develop comprehensive
          solutions that provide seamless user experiences. <br /> Beyond my
          professional pursuits, I have a few personal passions that keep me
          balanced and inspired. I enjoy gymnastics, which has taught me
          discipline and perseverance. <br /> Reading books is another passion
          of mine, always eager to learn and grow through new knowledge. <br />{" "}
          Additionally, I love kayaking, which provides a sense of adventure and
          tranquility, helping me recharge and stay focused. <br /> What sets me
          apart is my unwavering passion and desire for this job. I am committed
          to continuously learning and evolving in this ever-changing field. I
          thrive on challenges and am always eager to collaborate and bring
          innovative ideas to life. <br /> I'm excited about the opportunities
          ahead and am always open to new projects and collaborations. Feel free
          to get in touch to discuss potential projects, share ideas, or just
          say
          <b> hello</b>!
        </p>
        <motion.div
          variants={arrowVariants}
          animate="arrowIcon"
          className="arrow"
        >
          <ArrowDown />
        </motion.div>
        <div className="contact-btn">
          <button>
            <a href="#contact">Contact me</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
