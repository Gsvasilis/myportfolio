import  { useState, useEffect } from 'react';
import  "../styles/ScrollIndicator.scss"
import {motion} from "framer-motion"


const textVariants = {
  scrollBtn:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
    }
}
}

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop > 80 && (scrollTop + windowHeight) < docHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div  className="scrollBtn" style={{ display: isVisible ? 'block' : 'none' }}>
      <motion.img variants={textVariants}  animate="scrollBtn" src="/scroll.png" alt="Scroll down" />
    </div>
  );
};

export default ScrollIndicator;
