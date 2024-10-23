import { useNavigate } from "react-router";
import { motion } from "framer-motion";


const Contact = () => {
    const navigate = useNavigate()
  return (
    <div>
        <motion.div initial={{x: '-100%', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: '100%', opacity: 0}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
            <div>
                <h2>Contact me</h2>
            </div> 
            <p>Send us a message</p>
            <button onClick={() => navigate('/')}>Back</button>
        </motion.div>
    </div>
  )
}

export default Contact
