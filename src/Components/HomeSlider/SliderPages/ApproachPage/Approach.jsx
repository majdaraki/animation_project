import React, { useEffect } from 'react'
import NavBar from '../../../Navbar/NavBar'
import s  from "../images/3.9cdffd8e.jpg"
import s2 from "../images/Exterior-2-960x640.jpg"
import s3 from "../images/culture-960x502.jpg"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import "./Approach.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Build from './SwiperScroll/Build'
import Company from './SwiperCom/Company'
import Brand from './SwiperBrand/Brand'
import FooterApproach from '../../../FooterApproach/FooterApproach'

export default function Approach() {
  useEffect(()=>{
    Aos.init({duration:2200,once:true});
      },[]);
    
  return (
    <div className='approach'>
      <NavBar/>
      <motion.div
        initial={{height:"100%",width:"100%",y:"0px"}}
        animate={{height:"30%",y:"-220px",overflow:"hidden"}}
        transition={{delay:1.4 ,ease:[0.13,0.1,-0.05,0.9],duration:2}}
        exit={{height:"100%",width:"100%",y:"0px"}}
       className='photo'>
        <motion.img
         initial={{scale:1.1,width:'100%',height:'100%'}}
         animate={{y:'70%',
        width:"70%",
        height:"30%",
        x:"20%",
       transition:{delay:1.4,duration:2,ease:[0.6,0.01,-0.05,0.9]},
     }}
     exit={{scale:1.1,width:'100%',height:'100%'}}
         src={s}
         alt='s'>
         </motion.img>
         <Link to="/">
                <motion.p
                animate={{}}
                 className='go'>go back to home</motion.p>
            </Link>
      </motion.div>
      <motion.span className="green5"
        initial={{opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1.5,delay:3}}
        ></motion.span>
        
        <div className='process' data-aos="fade-up">
            <h1 data-aos="fade-up">PROCESS:<br/>HOW WE INVEST ?</h1>
            <p data-aos="fade-up">We generate attractive risk-adjusted returns for our business across economic cycles<br/> and over the long term. The Al Rajhi Investments platform encompasses real estate<br/> projects across the risk spectrum , from defensive sectors to more opportunistic<br/> initiatives.</p>
        </div>
        <motion.span className="green1"
        initial={{x:-500}}
        whileInView={{x:0}}
        transition={{duration:1.5}}
        ></motion.span>
        <div className='investment' data-aos="fade-up">
            <h1 data-aos="fade-up">OUR INVESTMENT APPROACH</h1>
            <div className='content2'>
                <p data-aos="fade-up">Plans to create a transparent, secure and stable environment in Saudi Arabia are attracting domestic and foreign investment into real estate , and we’re confident about the outlook for our placements.
We see attractive opportunities across a growing range of areas including affordable housing , health care , education , transport , tourism , retail and entertainment , as well as commercial space for international technology developers. We are also involved in real estate investment opportunities beyond Saudi Arabia as we seek to diversify our portfolio into international markets and different currencies. All of this is with the aim of achieving the highest risk-adjusted returns.</p>
                <img src={s2} alt='s2'/>
            </div>
        </div>
        <motion.span className="green2"
        initial={{x:-500}}
        whileInView={{x:0}}
        transition={{duration:1.5}}
        ></motion.span>
        <div className='our' data-aos="fade-up">
            <h1 data-aos="fade-up">OUR INVESTMENT PROCESS</h1>
            <div className='content3'>
                <div className='right'>
                    <h5 data-aos="fade-up">Objectives</h5>
                    <p><span>01</span>Identify innovative real estate<br/> projects</p>
                    <p><span>02</span>Arrange financing and structure<br/> deals</p>
                    <p><span>03</span>Manage individual assets and <br/>optimize portfolios</p>
                    <p><span>04</span>Realize gains through timed exit<br/> strategies</p>
                </div>
                <div className='left'>
                <Build/>
                </div>
            </div>
        </div>
        <motion.span className="green3"
        initial={{x:-500}}
        whileInView={{x:-50}}
        transition={{duration:1.5}}
        ></motion.span>
        <div className='partners' data-aos="fade-up">
          <h1 data-aos="fade-up">OUR PARTNERS</h1>
          <div className='content4'>
              <p data-aos="fade-up">The foundations of our success come from the strategic partnerships we have developed with other leading businesses in the real estate and hospitality sectors both within Saudi Arabia and internationally.
They include property developers construction firms , hotel operators , retailers and other real estate occupiers which share our commitment and drive. We have also forged strong relationships with leading global consumer brands that want to expand their presence in KSA. Working together we have the expertise and market knowledge to facilitate their entry into Saudi Arabia and other GCC countries.</p>
              <img src={s3} alt='s3'/>          
          </div>
        </div>
        <motion.span className="green4"
        initial={{x:-500}}
        whileInView={{x:0}}
        transition={{duration:1.5}}
        ></motion.span>
        <div className='company' >
          <div className='comsw'> 
          <Company/> 
          </div>
          <div className='combrand'>
          <Brand/>
          </div>
        </div>
        <div>
        <FooterApproach/>
        </div>
        
    </div>
  )
}
