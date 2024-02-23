import NavBar from '../Navbar/NavBar'
import './Investements.css'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import {easeInOut, motion} from 'framer-motion'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section7 from './Section7/Section7'
import Section8 from './Section8/Section8'
import { Link } from 'react-router-dom'
import Links from './Links/Links'
export default function Investements()
{
    return(
        <div className="inves">
            <NavBar mod='dark'/>
             <div className='section1'>
                <h1>OUR INVESTEMENTS</h1>
             </div>
             <div className="parent-section2">
                 <Section2/>
             </div>
             <div className='parent-section3'>
                 <Section3/>
             </div>
             <div className='section4'>
                <div className="sec4-ch">
                    <h1>REAL ESTATE PROJECTS</h1>
                    <motion.div className="animation"
                          initial={{x:-590 }}
                          whileInView={{x:0 }}
                          transition={{duration: 0.6 , ease: easeInOut}}
                    ></motion.div>
                </div>
             </div>
             <div className="parent-section5">
                <Section5/>
              </div>
              <div className='par-background'>
                 <div className="background-element">
                     <motion.div className='animation3'
                            initial={{x:-890}}
                            whileInView={{x:0}}
                            transition={{duration: 0.6 , ease: easeInOut}}
                         >
                     </motion.div>
                  </div>
              </div>
              <div className='parent-section6'>
                <Section6/>
              </div>
              <div className='parent-section7'>
                <Section7/>
              </div>
              <div className='parent-section7'>
                <Section8/>
              </div>
              <Links/>
              <br/>
              <br/>
              <br/>
        </div>
    )
}