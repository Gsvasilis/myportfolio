import "../styles/Contact.scss"
import { Mail, Phone, MapPinHouse,} from "lucide-react"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"
import { useState } from "react"

function Contact() {

    const ref = useRef()
    const formRef = useRef()

    const isInView = useInView(ref)
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d15ca9ac-5af6-41df-a91c-c34c0de10e96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(()=>{
        setResult("")
    },3000)
  };
  return (
    <motion.div ref={ref} className="contact" id="contact"  variants={variants}
    initial="initial"
    animate="animate">

        <motion.div variants={variants} className="textContainer">
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div variants={variants} className="personalDetails">
                <motion.div variants={variants} className="personal">
                    <Mail/>
                    <p>grkvasilis@gmail.com</p>
                </motion.div>
                <motion.div variants={variants} className="personal">
                    <Phone/>
                    <p>+30 6973980631</p>
                </motion.div>
                <motion.div variants={variants} className="personal">
                    <MapPinHouse/>
                    <p>Fillipou 32,Athens</p>
                </motion.div>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}} className="phoneSvg">
            <svg
            width="500px"
            height="500px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path initial={{pathLength:0}} animate={isInView &&{pathLength:1}} 
            transition={{duration:3}}
           
              d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
              stroke="aquamarine"
            />
            <motion.path initial={{pathLength:0}} animate={isInView &&{pathLength:1}} 
            transition={{duration:3}}
              d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
              stroke="aquamarine"
            />
            <motion.path initial={{pathLength:0}} animate={isInView &&{pathLength:1}} 
            transition={{duration:3}}
              d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
              stroke="aquamarine"
          
            />
          </svg>
            </motion.div>
            <motion.form onSubmit={onSubmit} ref={formRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}} >
                <input type="text" name="name" placeholder="Full Name" />
                <input type="email"name="email" placeholder="Email" />
                <textarea rows={8} name="message" placeholder="Your Message">
                </textarea>
                <button type="submit">Contact me</button>
                {result}
            </motion.form>
        </div>
        
    </motion.div>
  )
}

export default Contact