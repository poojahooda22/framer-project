import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect} from "react";


interface AnimatedPageProps {
    children: React.ReactNode;
}

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};


 
const AnimatePage = ({ children }: AnimatedPageProps) => {
    // const [isPresent, safeToRemove] = usePresence();
    // const [scope, animate] = useAnimate();

    // useEffect(() => {
    //     if(!isPresent) {
    //         const exitAnimation = async () => {
    //             await animate(scope.current, {
    //                 opacity: 0,
    //                 x: 240
    //             },
    //         {
    //             ease: 'easeInOut',
    //             duration: 1
    //         })

    //         safeToRemove();
    //         }
    //         exitAnimation();
    //     }
    // }, [isPresent]);
    
    return (
        <motion.div
            variants={animations}
            transition={{ duration: 1 , ease: 'easeInOut'}}
        >
            {children}
        </motion.div>
    );
};

export default AnimatePage;
