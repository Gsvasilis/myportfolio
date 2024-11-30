import "../styles/Loader.scss"
import {motion} from "framer-motion"

function Loader() {
  return (
    <div className='loader'>
      <motion.div initial={{y:-500,opacity:0}} animate={{y:0,opacity:1}}
      transition={{duration:1}}
      className="title">
          <h1>Welcome to my home.</h1>
      </motion.div>
    </div>
  )
}

export default Loader
