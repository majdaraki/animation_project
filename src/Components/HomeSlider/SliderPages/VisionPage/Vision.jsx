import shikh from "../images/shiekh1.jpg"
import company from "../images/Web-fllhdArtboard-1-copy-5_1-1440x810.jpg"
import home from "../images/DJI_0463-960x540.jpg"
import "./Vision.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import NavBar from "../../../Navbar/NavBar"
import {motion} from "framer-motion"
import sg from"../images/2.a47eb8f9.jpg"
import { Link } from "react-router-dom"
import FooterApproach from "../../../FooterApproach/FooterApproach"

export default function Vision() {
  useEffect(()=>{
Aos.init({duration:2000,once:true});
  },[]);
  
  return (
    
      <div className="vision">
        <NavBar/>
      <motion.div className='homebage'
      initial={{height:"100%",width:"100%",y:"0px"}}
      animate={{height:"30%",y:"150px",overflow:"hidden"}}
      transition={{delay:1.4 ,ease:[0.13,0.1,-0.05,0.9],duration:2}}
      exit={{height:"100%",width:"100%",y:"0px"}}
      >
      <motion.img
       initial={{scale:1.1,width:'100%',height:'100%'}}
       animate={{y:'-60%',
      width:"70%",
      height:"30%",
      x:"20%",
     transition:{delay:1.4,duration:2,ease:[0.6,0.01,-0.05,0.9]},
   }}
   exit={{scale:1.1,width:'100%',height:'100%'}}
        src={sg}
        alt="sg">
        </motion.img>
        <Link to="/">
                <motion.p
                animate={{}}
                 className='go'>go back to home</motion.p>
            </Link>
        <motion.span className="green5"
        initial={{opacity:0}}
        animate={{x:0,opacity:1,y:"-250%"}}
        transition={{duration:1.5,delay:3}}
        ></motion.span>
      </motion.div>
      
      <div className='one' data-aos="fade-up" >
        <img src={shikh} alt='shikh'/>
        <p>The first pioneer of real estate investments, Sheikh Sulaiman Abdulaziz Saleh Al Rajhi he was born around the year 1348H/1929. He grew up in Al-Bikairiya in a poor family with difficult living conditions. He was anxious of work , and his will to make a good living was strong. He worked in many occupations , carrying things for others , ashes cleaner , cook , coffee server , and a guard for goods of sellers in markets until Allah gifted him to be one of the most important businessmen in the world in both wealth and effect. Sheikh Sulaiman saved no effort to continue giving to his country , his countrymen , charitable , social and humanitarian works. His principal is to give, and dedicate in creating success and excellence. He also kept running all projects and existing companies by himself. He used to follow projects under construction , as well , to be finished and operated as quickly as possible.

<span>Sheikh Sulaiman AbdulAziz AlRajhi</span></p>

      </div>
      <div className="two" data-aos="fade-up">
        <h1>BOARD OF DIRECTORS</h1>
        <motion.span className="green"
        initial={{x:-500}}
        whileInView={{x:0}}
        transition={{duration:1.5}}
        ></motion.span>
        <div className="leader">
        
        </div>
       
        <p>Al Rajhi Investment, a subsidiary of Awqaf Sulaiman Abdulaziz Al-Rajhi Holding Co established in 2002 targeting to bring a change in value of investment in real estate owned by Awqaf (Endowments)of Sheikh Sulaiman bin Abdul Aziz Al Rajhi to be profitable investments with high financial revenues , enrich and develop ways and strategies of real estate investment in Saudi market. Mechanism to achieve the message of the company depended on working through innovative programs that offered creative solutions contributing in upgrading real estate sector to reach globalism. Volume of company investments doubled in the last period compared to the time of establishment. The company has given care to develop work environment to be more attractive for hiring best competencies and expertise in Saudi market. That was done by the favor of Allah , then by efforts of company team including administrators , executives and experts in real estate and investment sector.

What we have reached to today is another starting point to new and wide horizons as the size of our ambition and aspirations to achieve our vision which we have long worked for , and both father’s Sheikh Sulaiman AbdulAziz AlRajhi, may Allah protect him , and Awqaf Sulaiman bin Abdulaziz AlRajhi Holding Co’s.</p>
      <span>CEO  Fouad bin Abdullah AlRashed</span>
      </div>
      <div className="three" data-aos="fade-up">
        <h3>LOOKING FORWARD <br/>WITH CONFIDENCE</h3>
        <p>AlRajhi Investment is ideally positioned to take advantage of the positive outlook for Saudi<br/> Arabia’s real estate sector</p>
        <div className="num">
        <motion.span className="block2"
        initial={{x:-500}}
        whileInView={{x:0}}
        transition={{duration:1.5}}
        ></motion.span>
          <h5><span>4.7</span> billion SAR</h5>
          <p>COMPANY CAPITAL AND ADDITIONAL CONTRIBUTIONS</p>
        </div>
        <div className="num2">
          <h5><span>18.7</span> billion SAR</h5>
          <p>ESTIMATED MARKET VALUE FOR OWNED AND MANAGED INVESTMENTS</p>
        </div>
          </div>
          <motion.span className="block3"
          initial={{x:-200}}
          whileInView={{x:0}}
          transition={{duration:1.5}}
        ></motion.span>
          <div className="four" data-aos="fade-up">
          <div className="num3">
          <span>2030</span>
          <p>Widespread reforms to transform and modernize the economy as part of Vision 2030 include changes to building regulations, and ambitious new cities and infrastructure projects.

These initiatives will have a dramatic impact across many real estate sectors, including office, retail, residential, education and healthcare.</p>
          </div>
          <div className="num4">
            <p>Meanwhile, other initiatives to boost religious tourism as well as social reforms will create more demand for a wide range of facilities, from hotels to food and beverage outlets as well as a wider range of other facilities.</p>
            <span>FUTURE</span>
          </div>
        </div>
        <div className="five" data-aos="fade-up">
            <img src={company} alt="company"/>
            <motion.span className="block4"
          initial={{x:-500}}
          whileInView={{x:0}}
          transition={{duration:1.5}}
        ></motion.span>
            <h2>AL-RAJHI INVESTMENT HAS AN IDEAL<br/>LOCATION IN THE SAUDI REAL ESTATE<br/>SECTOR</h2>
            <p>The plans to create a transparent, secure and stable environment in the Kingdom of Saudi<br/>Arabia attract local and foreign investments in real estate, and we are confident of<br/> expectations for our locations.</p>
          </div>
          <div className="six" data-aos="fade-up">
            <h2>INTERNATIONAL DIVERSIFICATION</h2>
            <div className="content2">
            <p>Plans to create a transparent, secure and stable environment in Saudi Arabia are attracting domestic and foreign investment into real estate, and we’re confident about the outlook for our placements.
            <span>We see attractive opportunities across a growing range of areas, including affordable housing , health care , education , transport , tourism , retail and entertainment , as well as commercial space for international technology developers. We are also involved in real estate investment opportunities beyond Saudi Arabia as we seek to diversify our portfolio into international markets and different currencies. All of this is with the aim of achieving the highest risk-adjusted returns.</span>
            </p>
            <img src={home} alt="home"/>
            </div>
      </div>
      <FooterApproach/>
    </div>
  )
}
