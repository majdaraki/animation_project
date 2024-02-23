import Aos  from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import {easeInOut, motion} from 'framer-motion';
import './Section2.css'
import p1 from '../photos/p1.jpg'
export default function Section2()
{
    useEffect(() => 
    {
        Aos.init({duration: 1500})
    },[]);
    return(
              <div className='section2'>
                  <h1>INVESTMENTS IN REAL ESTATE </h1>
                  <div className="animation-section1" data-aos="fade-right"></div>

                  <motion.div className="section2-ch" 
                     initial={{opacity: 0 }}
                     whileInView={{opacity: 1 }}
                     transition={{duration: 4 , ease: easeInOut}}
                     viewport={{once: true}}
                  >
                    <div className="section2-ch-ch2">
                         <img src={p1} alt=''/>
                    </div>
                     <div className="section2-ch-ch">
                        <h2>
                           <p> The real estate department within Alrajhi</p>
                           <p> Real Estate Investment Company is </p>
                           <p> responsible for investments in compounds</p>
                           <p> and commercial and offices centers.</p>
                        </h2>
                        <p className="pClass">
                            <p>In addition to join ventures and strategic partnerships</p> 
                            <p>contracts with a number of the most reputable </p>
                            <p> companies specialized in operating commercial centers </p>
                            <p> and residential compounds that have a vast experience </p>
                            <p> in the Saudi market.</p>
                        </p>
                     </div>
                  </motion.div>
              </div>
    )
}