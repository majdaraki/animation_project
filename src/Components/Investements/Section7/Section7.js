import { easeInOut , motion , AnimatePresence } from "framer-motion";
import { useState } from "react";
import './Section7.css'
import comm1 from '../photos/comm1.jpg'
import comm2 from '../photos/comm2.jpg'
import comm3 from '../photos/comm3.jpg'
import comm4 from '../photos/comm4.jpg'
import comm5 from '../photos/comm5.jpg'
import comm6 from '../photos/comm6.jpg'
import comm7 from '../photos/comm7.jpg'
import comm8 from '../photos/comm8.jpg'
export  default function Section7()
{
    const [commNumber , setcommNumber] = useState(1);
    const[index , setIndex] = useState(0);
    const [direction , setDirection] = useState(0);
    const commImages = [
        {
            'src' : comm1,
            'name': 'Office Building 1- Tilal Village'
        }
        ,
        {
            'src' : comm2,
            'name': 'Office Building 2- Tilal Village'
        }
        ,
        {
            'src' : comm3,
            'name': 'Office Building 3- Tilal Village'
        }
        ,
        {
            'src' : comm4,
            'name': 'Alrajhi Investement - HQ Riyadh'
        }
        ,
        {
            'src' : comm5,
            'name': 'Alsafa Complex - Riyadh'
        }
        ,
        {
            'src' : comm6,
            'name': 'Sharq Plaza Center - Riyadh'
        }
        ,
        {
            'src' : comm7,
            'name': 'Alshamsiah Building - Riyadh'
        }
        ,
        {
            'src' : comm8,
            'name': 'Al-rajhi Center - Makkah'
        }
    ];

    const animationSlider = {
        initial : {
            opacity:0,
        },
        animate : {
            opacity : 1,
            transition: {
                duration : 1.3,
                ease : easeInOut,
              }
        },
        exit : direction => {
            return  {
                x: direction > 0 ? -1000 : 1000,
                opacity:0,
                transition: {
                    duration : 1.3,
                    ease : easeInOut,
                  }
            }
        }
    }
    function prevImage()
    {
        setDirection(-1);

        if(index === 0)
       {
          setIndex(commImages.length-1);
          setcommNumber(commImages.length);
          return
       }
       setIndex((prev) => prev - 1);
       setcommNumber((prev) => prev - 1);
    }


    function nextImage()
    {
       setDirection(1);

       if(index === commImages.length-1)
       {
          setIndex(0);
          setcommNumber(1)
          return
       }
       setIndex((prev) => prev + 1) 
       setcommNumber((prev) => prev + 1)    
    }
    return(
          
        <div className="section7">
        <motion.h1
            initial={{opacity: 0 , y: 50}}
            whileInView={{opacity: 1 , y:0}}
            transition={{duration: 2 , ease: easeInOut}}
            viewport={{once: true}}
           >
             COMMERCIAL
            </motion.h1>
        <motion.div className="animation7"
                     initial={{x:-590 }}
                     whileInView={{x:0 }}
                     transition={{duration: 0.6 , ease: easeInOut}}
               >
               </motion.div>
        <motion.div className="comm-slider"
                     initial={{opacity: 0 , y: 50}}
                     whileInView={{opacity: 1 , y:0}}
                     transition={{duration: 4 , ease: easeInOut}}
                     viewport={{once: true}}
            >
           <AnimatePresence>
                <motion.img
                  src={commImages[index].src} 
                  alt=" "
                  key={commImages[index].src}
                  variants={animationSlider}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
               />
           </AnimatePresence>
        </motion.div>
        <div className="section7-ch">
           <div className="section7-ch-1">{commNumber} - 8</div>
                  <motion.div className="section7-ch-2"
                         initial={{opacity:0}}
                         animate={{opacity:1}}
                         transition={{duration:2}}
                         key={commImages[index].name}
                    >
                      {commImages[index].name}
                 </motion.div>
            <div className="section7-ch-3">
               <i onClick={prevImage}  className='fa fa-long-arrow-left'></i>
               <i onClick={nextImage}  className='fa fa-long-arrow-right'></i>
            </div>
        </div>
   </div>
    )
}