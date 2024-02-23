import React from 'react'
import Footer from '../../../Footer/Footer'
import './SliderApproach.css'
import { motion } from 'framer-motion'
import NavBar from '../../../Navbar/NavBar'
import { Link } from 'react-router-dom'
const SliderApproach = () => {
    const variants = {
        visible: {
          x: '0',
          opacity: 1,
        },
        hidden: {
          x: '100vw',
          opacity: 0,
          transition:{delay:0.4,duration:2,ease:[0.6,0.01,-0.05,0.9]},
        },
        exit: {
          x: '100vw',
          transition:{delay:0.4,duration:2,ease:[0.6,0.01,-0.05,0.9]},
        },
      };
    
  return (
    <div className='SliderApproach'>
        <NavBar />
        <motion.h3
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variants}
        >Approach</motion.h3>
        <motion.div className='ApproachContent'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={variants}
        >
        <span>
        <h1>INNOVATIVE APPROACH</h1>
        <br></br>
        <h1>FOR INVESTMENTS</h1>
        </span>
        </motion.div>
        <Link to="/ApproachPage">
        <Footer id={2}/>
        </Link>
        
    </div>
  )
}

export default SliderApproach