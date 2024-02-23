import {easeInOut, motion} from 'framer-motion';
import './Section5.css';
export default function Section5()
{
    return(
        <div className="section5">
                 <h1>TILLAL VILLAGE</h1>
                 <motion.div className="animation2"
                              initial={{x:-590 }}
                              whileInView={{x:0 }}
                              transition={{duration: 0.6 , ease: easeInOut}}
                 ></motion.div>
            <motion.div className="sec5-ch2"
                         initial={{opacity: 0 }}
                         whileInView={{opacity: 1 }}
                         transition={{duration: 2 , ease: easeInOut}}
                         viewport={{once: true}}
            >
                <h2>
                    <p>Area of land of the project is 326 thousand square meters, while area of constructed </p>
                    <p>floors is 1.2 million square meters. The project includes 92 residential buildings, </p>
                    <p>hotels comprising 5280 rooms. It allocated 57 thousand square meters for</p>
                    <p>commercial spaces, and 80 thousand square meters for office spaces. The project </p>
                    <p>includes Aisha Al-Rajhi Mosque, which can accommodate up to 48 thousand </p>
                    <p>worshipers One of the most important features of that project is its proximity to the</p>
                    <p>Holy Mosque in Makkah (Al-Haram Al-Makki), where the distance between them is </p>
                    <p>only 6.7 kilometers. It is located on the Third Ring Road crossed with Prince Sultan </p>
                    <p>Bin Abdulaziz Road in a strategic area near King Abdullah Medical City.</p>
                </h2>
            </motion.div>
        </div>
    )
}