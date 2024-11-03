import { useState, useEffect, useRef } from "react"
import Navbar from "../navbar/Navbar"
import { UpdateFollower } from "react-mouse-follower"
import { AnimatePresence, easeOut, motion } from "framer-motion"
import styles from './Home.module.css'
import fanta1 from '../../assets/fanta1.png'
import fanta2 from '../../assets/fanta2.png'
import fanta3 from '../../assets/fanta3.png'


const heroData = [
    { 
        title: 'Orange Fanta',
        id: 1,
        image: fanta1,
        description: 'Fanta is a brand of fruit-flavored carbonated soft drinks created by Coca-Cola Deutschland under the leadership of German businessman',
        url: '/src/assets/fanta1.png',
        price: "$40",
        modal: 'Orange',
        color: '#FFCF9D',
        textColor: '#cf4f00'
    },
    {
        title: 'Cola Zero',
        id: 2,
        image: fanta2,
        description: 'Fanta is a brand of fruit-flavored carbonated soft drinks created by Coca-Cola Deutschland under the leadership of German businessman',
        url: '/src/assets/fanta2.png',
        price: "$140",
        modal: 'Zero',
        color: '#B7B7B7',
        textColor: '#727272'
    },
    {
        title: 'Cola Cola',
        id: 3,
        image: fanta3,
        description: 'Fanta is a brand of fruit-flavored carbonated soft drinks created by Coca-Cola Deutschland under the leadership of German businessman',
        url: '/src/assets/fanta3.png',
        price: "$100",
        modal: 'Cola',
        color: '#eb9c9f',
        textColor: '#ac1a00'
    },
]

const slideRight = (delay: number) => {
   return {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: {duration: 0.5, delay: delay, ease: easeOut} },
    exit: { y: -100, opacity: 0 }
   }
}

const Home: React.FC = () => {
    const btnRef = useRef<HTMLDivElement | null>(null);
    const [activeData, setActiveData] = useState(heroData[0]);

    const handleActiveData = (data: typeof heroData[0]) => {
        setActiveData(data);
    }

    

  const handleMouseMove = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const parentOffset = btn.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    const span = btn.querySelector('span') as HTMLElement;

    if (span) {
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    }
  };

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    btn.addEventListener('mouseenter', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseMove);

    // Clean up event listeners on unmount
    return () => {
      btn.removeEventListener('mouseenter', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseMove);
    };
  }, []);
   
    
  return (
    <div className="bg-orange-100 w-full h-full">
        <UpdateFollower
            className="sample"
            mouseOptions={{
                backgroundColor: 'black',
                zIndex: 9,
                followSpeed: 0.2,
                scale: 1.1,
            }}
        >
        <motion.div
            initial={{backgroundColor: activeData.color, color: activeData.textColor}}
            animate={{backgroundColor: activeData.color, color: activeData.textColor}}
            transition={{duration: .8}}
        > 
        <Navbar/>
        <div className="container mx-auto min-h-[89.6vh] flex items-center justify-center">
            <div className="flex items-start justify-between"> 
                <div className="w-[50%] space-y-8">
                    <AnimatePresence mode="wait">
                        <div className="overflow-hidden px-1">
                            <motion.h1 
                                key={activeData.id}
                                variants={slideRight(0.1)}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={`text-[5vw] font-bold text-shadow `}
                            >
                                {activeData.title}
                            </motion.h1>
                        </div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <div className="overflow-hidden">
                            <motion.p 
                                key={activeData.id}
                                variants={slideRight(0.3)}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="text-[1.6vw] leading-loose"
                            >
                                {activeData.description}
                            </motion.p>
                        </div>
                    </AnimatePresence>
                    <div 
                        ref={btnRef} className={`${styles.btn1}`}
                    >
                        Order Now
                        <span className={`${styles['small-one']} small-one`}></span>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col items-center justify-center gap-[4vw] ">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={activeData.id} 
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -100}}
                        transition={{duration: 0.5, ease: 'easeOut', delay:0}}
                        className="w-[12vw] img-shadow"
                    >
                        <img src={activeData.url} />
                    </motion.div>
                    </AnimatePresence>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        className="grid grid-cols-3 gap-10"
                    >
                        {heroData.map((data, index) => {
                            return (
                                <div key={index} 
                                    onClick={() => handleActiveData(data)}
                                    className="cursor-pointer space-y-3 hover:scale-105
                                    transition-all duration-200"
                                >
                                    <img src={data.url} 
                                        alt=""
                                        className={`w-[80px] img-shadow ${activeData.image === data.image ? 'opacity-100 scale-110' : 'opacity-50'}`}
                                    />
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
        </motion.div>
        </UpdateFollower>
    </div>
  )
}

export default Home
