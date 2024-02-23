import React from 'react';
import '../../SliderPages/IntroPage/IntroPage.css';
import { motion } from 'framer-motion';
import NavBar from '../../../Navbar/NavBar';
import Footer from '../../../Footer/Footer';

const IntroPage = () => {
  const variants = {
    visible: {
      x: '0',
      opacity: 1,
    },
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    exit: {
      x: '-100vw',
      opacity: 0,
    },
  };

  return (
    <div className='IntroPage'>
      <NavBar />
      <motion.div
        className='content'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variants}
      >
        <div className='greenSpan'></div>
        WE ARE ONE OF SAUDI ARABIA’S
        <br></br>
        LEADING REAL ESTATE
        <br></br>
        COMPANIES
        <br></br>
        <p>
          Building on our solid foundations, experience, and expertise for real estate investment and development, for even greater success across the Kingdom and internationally
        </p>
      </motion.div>
      <Footer id={0} />
    </div>
  );
};

export default IntroPage;
