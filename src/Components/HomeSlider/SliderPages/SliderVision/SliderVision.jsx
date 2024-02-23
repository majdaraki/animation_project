import React, { useEffect } from 'react'
import Footer from '../../../Footer/Footer'
import '../SliderVision/SliderVision.css'
import { motion } from 'framer-motion'
import NavBar from '../../../Navbar/NavBar'
import { Link } from 'react-router-dom'
import hoverEffect from 'hover-effect'
import image from '../images/2.a47eb8f9.jpg'
import overlay from '../images/13.jpg'



const SliderVision = () => {
  useEffect(()=>{
    var Image_animate= new hoverEffect({
      parent:document.querySelector('.SliderVision'),
      intensity:0.3,
      image1:image,
      image2:image,
      displacementImage:overlay,
    })
  })
    const variants = {
        visible: {
          x: '0',
          opacity: 1,
        },
        hidden: {
          x: '100vw',
          opacity: 0,
          transition:{delay:2,duration:2,ease:[0.6,0.01,-0.05,0.9]},
        },
        exit: {
          x: '100vw',
          transition:{delay:2,duration:2,ease:[0.6,0.01,-0.05,0.9]},
        },
      };
    
  return (
    <div className='SliderVision'>
        <NavBar />
        
        <motion.h3
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variants}
        >Vision</motion.h3>
        <motion.div className='VisionContent'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={variants}
        >
        <span>
        <h1>INVEST</h1>
        <br></br>
        <h1>IN SAUDI 2030</h1>
        </span>
        </motion.div>
        <Link to="/VisionPage">
        <Footer id={1}/>
        </Link>
        
    </div>
  )
}

export default SliderVision