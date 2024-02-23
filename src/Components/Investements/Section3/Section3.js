import AOS from 'aos'
import 'aos/dist/aos.css'
import {easeInOut, motion} from 'framer-motion'
import p2 from '../photos/p2.jpg'
import './Section3.css';
export default function Section3()
{
    return(
        <div className="section3">
            <motion.h1
                 initial={{opacity: 0 }}
                 whileInView={{opacity: 1 }}
                 transition={{duration: 4 , ease: easeInOut}}
                 viewport={{once: true}}
               >
                INVESTMENTS IN THE HOTEL SECTOR
                </motion.h1>
            <div className="animation-section3" data-aos="fade-right"></div>
            <motion.div className="section3-ch" 
                     initial={{opacity: 0 }}
                     whileInView={{opacity: 1 }}
                     transition={{duration: 2 , ease: easeInOut}}
                     viewport={{once: true}}
                  >
                     <div className="section3-ch-ch">
                        <h2>
                        <p>The hotel department within</p> 
                        <p>Alrajhi Real Estate Investment </p>
                        <p>Company is responsible for </p> 
                        <p>investments in the hospitality</p>
                        <p>sector. In addition, the company </p>
                        <p>manages many hotels around the Kingdom. </p>
                        <p>Based on the company keenness </p>
                        <p>to contribute to the development</p>
                        <p>and support of the tourism,</p>
                        <p>training and employment </p>
                        <p>sectors, and to play its role in </p>
                        <p>serving the guest of Allah </p>
                        <p>pilgrims, the Company is now </p>
                        <p>building world-class hotels </p>
                        <p>operated by the world’s renowned operators </p>
                        <p>InterContinental Hotels Group, </p>
                        <p>Carlson Rezidor Hotel Group, </p>
                        <p>Accor Hotels, Starwood Hotels </p>
                        <p>and Resorts,Millennium Hotels </p>
                        <p>and Resorts, Shaza Hotels</p>
                        </h2>
                     </div>
                     <div className="section3-ch-ch2">
                         <img src={p2} alt=''/>
                    </div>
                  </motion.div>
        </div>
    )
}