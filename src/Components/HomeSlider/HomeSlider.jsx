import React, { useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HoverEffect from 'hover-effect'
import { TweenMax } from 'gsap' // Import from gsap instead of tweenmax
import * as THREE from 'three'
import { AnimatePresence, motion } from 'framer-motion'
import Carousel from 'react-bootstrap/Carousel'
import '../HomeSlider/HomeSlider.css'
import IntroPage from './SliderPages/IntroPage/IntroPage'
import SliderVision from './SliderPages/SliderVision/SliderVision'
import LiquidDistortion from '../LiquidAnimation/LiquidDistortion'
import image1 from '../HomeSlider/SliderPages/images/1.ef972611.jpg'
import image2 from '../HomeSlider/SliderPages/images/2.a47eb8f9.jpg'
import image3 from '../HomeSlider/SliderPages/images/4.64666605.jpg'
import SliderCulture from '../SliderCulture/SliderCulture'
import SliderCultureTest from '../SliderCulture/SliderCultureTest'
import SliderApproach from './SliderPages/SliderApproach/SliderApproach'

const HomeSlider = () => {
  const [index, setIndex] = useState(0)
  const [threeJsNumber, setthreeJsNumber] = useState(0)
  const [count, setcount] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    if (selectedIndex === 3 ) {
      alert('animation part')
      setIndex(2)
    }
    setIndex(selectedIndex)
    console.log('Next')
    console.log(index)
  }

  useEffect(() => {
    var image_liqued = new HoverEffect({
      parent: document.querySelector('carouselItem'),
      intensity: 0.3,
      image1: image1,
      image2: image2,
      displacementImage: image3
    })
  }, [])
  const variants = {
    enter: {
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="slider">
      <AnimatePresence mode="wait">
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel" key={index}>
          <Carousel.Item className="carouselItem" interval={18000000}>
            <motion.div key={index} variants={variants} initial="exit" animate="enter" exit="exit">
              <IntroPage />
            </motion.div>
          </Carousel.Item>
          <Carousel.Item className="carouselItem" interval={18000000}>
            <motion.div key={index} variants={variants} initial="exit" animate="enter" exit="exit">
              <SliderVision />
            </motion.div>
          </Carousel.Item>
          <Carousel.Item className="carouselItem" interval={18000000}>
            <SliderCultureTest x={0} y={0} />
          </Carousel.Item>
          <Carousel.Item className="carouselItem" interval={18000000}>
            <motion.div key={index} variants={variants} initial="exit" animate="enter" exit="exit">
              <LiquidDistortion />
              <SliderApproach />
            </motion.div>
          </Carousel.Item>
        </Carousel>
      </AnimatePresence>
    </div>
  )
}

export default HomeSlider
