import { easeInOut , motion , AnimatePresence } from "framer-motion";
import './Section8.css';
import { useState } from "react";
import './Section8.css'
import res1 from '../photos/res1.jpg'
import res2 from '../photos/res2.jpg'
import res3 from '../photos/res3.jpg'
export default function Section8()
{
    const [resNumber , setresNumber] = useState(1);
    const[index , setIndex] = useState(0);
    const [direction , setDirection] = useState(0);

    const resImages = [
        {
            'src' : res1,
            'name' :'AJA Residential Towers - Hail'
        }
        ,
        {
            'src' : res2,
            'name' :'Hotel appartments Tilal - Village'
        }
        ,
        {
            'src' : res3,
            'name' :'Alrajhi Residential Buildings - Makkah'
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
          setIndex(resImages.length-1);
          setresNumber(resImages.length);
          return
       }
       setIndex((prev) => prev - 1);
       setresNumber((prev) => prev - 1);
    }


    function nextImage()
    {
       setDirection(1);

       if(index === resImages.length-1)
       {
          setIndex(0);
          setresNumber(1)
          return
       }
       setIndex((prev) => prev + 1) 
       setresNumber((prev) => prev + 1)    
    }
    return(
        <motion.div className="section8" >
        <motion.h1
                initial={{opacity: 0 , y: 50}}
                whileInView={{opacity: 1 , y:0}}
                transition={{duration: 2 , ease: easeInOut}}
                viewport={{once: true}}
           >
            RESIDENTIAL
            </motion.h1>
        <motion.div className="animation8"
                     initial={{x:-590 }}
                     whileInView={{x:0 }}
                     transition={{duration: 0.6 , ease: easeInOut}}
               >
               </motion.div>
        <motion.div className="res-slider"
                    initial={{opacity: 0 , y: 50}}
                    whileInView={{opacity: 1 , y:0}}
                    transition={{duration: 4 , ease: easeInOut}}
                    viewport={{once: true}}
           >
           <AnimatePresence>
                <motion.img
                  src={resImages[index].src} 
                  alt=" "
                  key={resImages[index].src}
                  variants={animationSlider}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
               />
           </AnimatePresence>
        </motion.div>
        <div className="section8-ch">
           <div className="section8-ch-1">{resNumber} - 3</div>
                  <motion.div className="section8-ch-2"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:2}}
                        key={resImages[index].name}
                    >
                      {resImages[index].name}
                 </motion.div>
            <div className="section8-ch-3">
               <i onClick={prevImage}  className='fa fa-long-arrow-left'></i>
               <i onClick={nextImage}  className='fa fa-long-arrow-right'></i>
            </div>
        </div>
   </motion.div>
    )
}