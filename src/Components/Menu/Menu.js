
import {motion} from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { easeIn } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import { Html } from '@react-three/drei';
export default function Menu()
{
    const ainm = {
        visible : { 
            rotateY: -10 ,
            rotateZ : 180,
            rotateX : -70,
            transition : {  
                rotateY : {
                    duration : 8,  
                    delay : 2,
                    repeat : Infinity,
                    ease : easeInOut
                }
            }
        }
    }
    return(

      <Html center style={{backgroundColor:'transparent', height:'100vh', overflow:'hidden'}} >
           <NavBar mod="!dark" />
      <div className="par-anim" >
        <div className="dsh">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'27rem'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'27rem'}}>
             <div style={{height:'100%',width:'100vw'}}>
                <motion.div
                     initial={{scale:0}}
                     animate={{scale:1}}
                     transition={{duration: 2 , ease: easeInOut}}
                >
                    <motion.div variants={ainm} animate="visible"
                             className="images-anim">
                                 <div className="after"></div>
                                 <div className="boto"></div>
                    </motion.div>
                </motion.div>
                <motion.div 
                     className="liii"
                     initial={{opacity: 0}}
                     animate={{opacity : 1}}
                     transition={{duration: 3 , ease: easeInOut}}
                >
                    <ul className="ul-list">
                          <li><a className="k" href='/vision'>Vision</a></li>
                          <li><a className="k" href='/approach'>Approach</a></li>
                          <li><a className="k" href='/culture'>Culture</a></li>
                          <li><a className="k" href='/investments'>Investments</a></li>
                      </ul>
                </motion.div>
             </div>
         </div>
         </div>
          </div>
     </div>
     <motion.div
         initial={{opacity: 0}}
         animate={{opacity : 1}}
         transition={{duration: 3 , ease: easeInOut}}
         style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw'}}>
           <Footer id={3} />
     </motion.div>
     
     </Html>
    )
}