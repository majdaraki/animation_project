import { motion, useAnimate } from "framer-motion";
import "./footer.css";
import { useEffect, useState } from "react";
import src1 from "./imges/1.ef972611.jpg";
import src2 from "./imges/2.a47eb8f9.jpg";
import src3 from "./imges/3.9cdffd8e.jpg";
import src4 from "./imges/4.64666605.jpg";
import src5 from "./imges/5.60be4c78.jpg";
import NavBar from "../Navbar/NavBar";

function Footer(Props) {
  const Id = Props.id;
  const [darkMod, setDarkMod] = useState(false);
  const Textfooter = [
    {
      id: 1,
      text: "Scroll to explore",
      img: src1,
    },
    {
      id: 2,
      text: "Learn more about our vision",
      img: src2,
    },
    {
      id: 3,
      text: "Learn more about our approach",
      img: src3,
    },
    {
      id: 4,
      text: "Learn more about our latest developments",
      img: src4,
    },
    {
      id: 5,
      text: "Join us",
      img: src5,
    },
  ];

  const [scop, animate] = useAnimate();
  const [stop, setStop] = useState(false);

  const movright = async () => {
    await animate("#right", { scaleY: 1 }, { duration: 0.0001 });
    await animate("#right", { y: -35 }, { duration: 1 });
    await animate("#right", { scale: 0, y: 60 }, { duration: 0.0001 });
    await animate("#right", { scale: 1 }, { duration: 0.0001 });
    await animate("#right", { y: 0 }, { duration: 1 });
  };
  const hoverRight = async () => {
    await animate("#right", { y: -35 }, { duration: 0.5 });
    await animate("#right", { scaleY: 0, y: 60 }, { duration: 0.0001 });
    await animate("#right", { scaleY: 2 }, { duration: 0.0001 });
    await animate("#right", { y: 0 }, { duration: 1 });
  };
  const movleft = async () => {
    await animate("#left", { scaleY: 1 }, { duration: 0.0001 });
    await animate("#left", { y: 35 }, { duration: 1 });
    await animate("#left", { scale: 0, y: -60 }, { duration: 0.0001 });
    await animate("#left", { scale: 1 }, { duration: 0.0001 });
    await animate("#left", { y: 0 }, { duration: 1 });
  };
  const hoverleft = async () => {
    await animate("#left", { y: 35 }, { duration: 0.5 });
    await animate("#left", { scaleY: 0, y: -60 }, { duration: 0.0001 });
    await animate("#left", { scaleY: 2 }, { duration: 0.0001 });
    await animate("#left", { y: 0 }, { duration: 1 });
  };
  const movup = async () => {
    await animate("#up", { scaleX: 1 }, { duration: 0.0001 });
    await animate("#up", { x: "100%" }, { duration: 1 });
    await animate("#up", { scale: 0, x: "-100%" }, { duration: 0.0001 });
    await animate("#up", { scale: 1 }, { duration: 0.0001 });
    await animate("#up", { x: "0%" }, { duration: 1 });
  };
  const hoverup = async () => {
    await animate("#up", { x: "100%" }, { duration: 0.5 });
    await animate("#up", { scaleX: 0, x: "-100%" }, { duration: 0.0001 });
    await animate("#up", { scaleX: 2 }, { duration: 0.0001 });
    await animate("#up", { x: 0 }, { duration: 1 });
  };
  const movebottom = async () => {
    await animate("#bottom", { scaleX: 1 }, { duration: 0.0001 });
    await animate("#bottom", { x: "-100%" }, { duration: 1 });
    await animate("#bottom", { scale: 0, x: "100%" }, { duration: 0.0001 });
    await animate("#bottom", { scale: 1 }, { duration: 0.0001 });
    await animate("#bottom", { x: 0 }, { duration: 1 });
  };
  const hoverbottom = async () => {
    await animate("#bottom", { x: "-100%" }, { duration: 0.5 });
    await animate("#bottom", { scaleX: 0, x: "100%" }, { duration: 0.0001 });
    await animate("#bottom", { scaleX: 2 }, { duration: 0.0001 });
    await animate("#bottom", { x: "0%" }, { duration: 1 });
  };

  useEffect(() => {
    setTimeout(() => {}, 1000);
    if (!stop) {
      const interval = setInterval(() => {
        movright();
        movleft();
        movebottom();
        movup();
      }, 5000);

      return () => clearInterval(interval);
    };
  }, [stop]);

  return (
    <>
      <div
        onClick={() => {
          setDarkMod(false);
        }}
        className="bac-img"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "absolute",
          zIndex: 2,
          top: 0,
          padding: 0,
          overflow: "hidden",
          display: darkMod ? "" : "none",
        }}
      >
        <div
          style={{
            zIndex: 4,
          }}
        >
          <NavBar mod="dark" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: 5,
              padding: 0,
              width: "50%",
              overflow: "hidden",
            }}
          >
            <div>
              <img
                alt="back"
                src={Textfooter[Id].img}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-footer"
        style={{ justifyContent: Id === 0 || Id === 4 ? "flex-end" : "" }}
      >
        <motion.div
          ref={scop}
          onMouseEnter={() => {
            setStop(true);
            hoverRight();
            hoverleft();
            hoverup();
            hoverbottom();
          }}
          onMouseLeave={() => {
            setStop(false);
            movright();
            movleft();
            movebottom();
            movup();
          }}
          className="out-container"
        >
          <motion.div className="main-content">
            <div className="line-up" id="up"></div>
            <div
              className="in-content"
              onClick={() => {
                setDarkMod(true);
              }}
            >
              <motion.div className="left-line" id="left"></motion.div>

              <p id="footer-text"> {Textfooter[Id].text}</p>

              <div className="line-right" id="right"></div>
            </div>
            <div className="line-bottom" id="bottom"></div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
