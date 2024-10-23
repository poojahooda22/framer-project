import { useNavigate } from "react-router"
import { motion } from "framer-motion"



const Home = () => {
    const navigate = useNavigate()
    
  return (
    <div>
        <motion.div
            initial={{x: '-100%', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: '100%', opacity: 0}}
            transition={{duration: 1, ease: 'easeInOut'}}
        > 
            <div>
                <div>
                    <h2>Build minimally</h2>
                </div>  
                <div>
                    <h2>Deploy minimally</h2>
                </div>
                <button 
                    onClick={() => navigate('/contact') }
                >Start</button>
            </div>     
        </motion.div>
    </div>
  )
}

export default Home
