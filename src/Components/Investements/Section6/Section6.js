import { useState } from "react";
import './Section6.css';
import img1 from '../photos/hotel1.jpg';
import img2 from '../photos/hotel2.jpg';
import img3 from '../photos/hotel3.jpg';
import img4 from '../photos/hotel4.jpg';
import img5 from '../photos/hotel5.jpg';
import img6 from '../photos/hotel6.jpg';
import img7 from '../photos/hotel7.jpg';
import img8 from '../photos/hotel8.jpg';
import img9 from '../photos/hotel9.jpg';
import { easeInOut , motion , AnimatePresence } from "framer-motion";
export default function Section6()
{
    const [hotelNumber , sethotelNumber] = useState(1);
    const[index , setIndex] = useState(0);
    const [direction , setDirection] = useState(0);

    const Hotels = [
        {
            'src' : img1,
            'name' : 'Park Inn Hotel - Tilal Village'
        }
        ,
        {
            'src' :img2,
            'name' : 'Fourpoints Hotel - Tilal Village'
        }
        ,
        {
            'src' :img3,
            'name' : 'Copthorne Hotel - Tilal Village'
        }
        ,
        {
            'src' :img4,
            'name' : 'Millennium Hotel - Tilal Village'
        }
        ,
        {
            'src' :img5,
            'name' : 'Shaza Makkah'
        }
        ,
        {
            'src' :img6,
            'name' : 'Shaza Riyadh Hotel'
        }
        ,
        {
            'src' :img7,
            'name' : 'Adagio Hotel - Tilal Village'
        }
        ,
        {
            'src' :img8,
            'name' : 'Crowne Plaza Hotel - Al-Khobar'
        }
        ,
        {
            'src' :img9,
            'name' : 'Crowne Plaza Hotel - Al-Madinah'
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
          setIndex(Hotels.length-1);
          sethotelNumber(Hotels.length);
          return
       }
       setIndex((prev) => prev - 1);
       sethotelNumber((prev) => prev - 1);
    }


    function nextImage()
    {
       setDirection(1);

       if(index === Hotels.length-1)
       {
          setIndex(0);
          sethotelNumber(1)
          return
       }
       setIndex((prev) => prev + 1) 
       sethotelNumber((prev) => prev + 1)    
    }

    return(
        <div className="section6">
             <motion.h1
                  initial={{opacity: 0 , y: 50}}
                  whileInView={{opacity: 1 , y:0}}
                  transition={{duration: 2 , ease: easeInOut}}
                  viewport={{once: true}}
                >
                OUR HOTELS
              </motion.h1>
             <motion.div className="animation6"
                          initial={{x:-590 }}
                          whileInView={{x:0 }}
                          transition={{duration: 0.6 , ease: easeInOut}}
                    >
                    </motion.div>
             <motion.div className="Hotels-slider"
                          initial={{opacity: 0 , y: 50}}
                          whileInView={{opacity: 1 , y:0}}
                          transition={{duration: 4 , ease: easeInOut}}
                          viewport={{once: true}}
             >
                <AnimatePresence>
                     <motion.img
                       src={Hotels[index].src} 
                       alt=" "
                       key={Hotels[index].src}
                       variants={animationSlider}
                       initial="initial"
                       animate="animate"
                       exit="exit"
                       custom={direction}
                    />
                </AnimatePresence>
             </motion.div>
             <div className="section6-ch">
                <div className="section6-ch-1">{hotelNumber} - 9</div>
                       <motion.div className="section6-ch-2"
                             initial={{opacity:0}}
                             animate={{opacity:1}}
                             transition={{duration:2}}
                             key={Hotels[index].name}
                         >
                           {Hotels[index].name}
                      </motion.div>
                 <div className="section6-ch-3">
                    <i onClick={prevImage}  className='fa fa-long-arrow-left'></i>
                    <i onClick={nextImage}  className='fa fa-long-arrow-right'></i>
                 </div>
             </div>
        </div>
    )
}