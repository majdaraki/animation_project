import logoen1 from "./imgs/Enwhite.png";
import logoen2 from "./imgs/EnDark.png";
import logoar1 from "./imgs/Arwhite.png";
import logoar2 from "./imgs/Arblack.png";
import "./navbar.css";
import { motion, useAnimate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import lightMod from "./imgs/sprite-light.179d34b8.png";
import darkMod from "./imgs/sprite-dark.61685b2d.png";

function NavBar(Props) {
  const [pos, setPos] = useState(0);
  const [start, setStart] = useState(false);
  const [start2, setStart2] = useState(false);

  const handleChangeLogo = useCallback(() => {
    const newPos = pos + 50;
    start && setPos(newPos === 1600 ? 1600 : newPos);
    if (newPos === 1600) {
      setStart(false);
      setStart2(true);
    }
  }, [pos, start]);
  const handleChangeLogo2 = useCallback(() => {
    const newPos = pos - 50;
    start2 && setPos(newPos === 0 ? 0 : newPos);
    if (newPos === 0) {
      setStart2(false);
    }
  }, [pos, start2]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      handleChangeLogo2();
    }, 40);
    return () => clearInterval(interval2);
  }, [handleChangeLogo2]);
  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeLogo();
    }, 40);
    return () => clearInterval(interval);
  }, [handleChangeLogo]);

  const mod = Props.mod;
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scop3, animate3] = useAnimate();

  const handlhoverlogo = async () => {
    await animate3("#name", { scaleX: 0, scaleY: 1 }, { duration: 0.5 });
    await animate3("#name", { scaleX: 1, scaleY: 1 }, { duration: 0.5 });
  };
  const handlehovertext = () => {
    animate2("#t1", { scale: 1 }, { duration: 0.4 });
  };
  const handlehovertextoff = () => {
    animate2("#t1", { scale: 0 }, { duration: 0.3 });
  };
  const handlehovertext2 = () => {
    animate2("#t2", { scale: 1 }, { duration: 0.4 });
  };
  const handlehovertextoff2 = () => {
    animate2("#t2", { scale: 0 }, { duration: 0.3 });
  };
  const handlhoveroff1 = async () => {
    await animate1("#l1", { x: -50 }, { duration: 0.5 });
    await animate1("#l1", { scale: 0 }, { duration: 0.001 });
    await animate1("#l1", { x: 50 }, { duration: 0.001 });
    await animate1("#l1", { scale: 1 }, { duration: 0.001 });
    await animate1("#l1", { x: 0 }, { duration: 0.5 });
  };
  const handlhoveroff2 = async () => {
    await animate1("#l2", { x: 50 }, { duration: 0.5 });
    await animate1("#l2", { scale: 0 }, { duration: 0.001 });
    await animate1("#l2", { x: -50 }, { duration: 0.001 });
    await animate1("#l2", { scale: 1 }, { duration: 0.001 });
    await animate1("#l2", { x: 0 }, { duration: 0.5 });
  };
  const handlAn2 = async () => {
    await animate1("#l2", { x: -50 }, { duration: 0.5 });
    await animate1("#l2", { scale: 0 }, { duration: 0.001 });
    await animate1("#l2", { x: 50 }, { duration: 0.001 });
    await animate1("#l2", { scale: 2 }, { duration: 0.01 });
    await animate1("#l2", { x: 0 }, { duration: 0.5 });
  };

  const handlAn1 = async () => {
    await animate1("#l1", { x: 50 }, { duration: 0.5 });
    await animate1("#l1", { scale: 0 }, { duration: 0.001 });
    await animate1("#l1", { x: -50 }, { duration: 0.001 });
    await animate1("#l1", { scale: 2 }, { duration: 0.01 });
    await animate1("#l1", { x: 0 }, { duration: 0.5 });
  };

  const MoveToMenu = () =>
   {
       window.location.pathname = 'Menu';
   };

  const [lang, setLang] = useState("en");
  const [logoM, setLogoM] = useState(mod === "dark" ? logoen2 : logoen1);
  return (
    <>
      <div className="main-navbar ">
        <motion.div
          onMouseEnter={() => {
            handlhoverlogo();
            setStart(true);
          }}
          ref={scop3}
          className="logo-nav"
          style={{
            left: lang === "ar" ? "" : "5%",
            right: lang === "ar" ? "5%" : "",
            backgroundColor: "transparent",
          }}
        >
          <div
            className="img-logo"
            style={{
              overflow: "hidden",
              backgroundColor: "transparent",
              display: lang === "ar" ? "none" : "",
            }}
          >
            <img
              alt="logo"
              src={mod === "dark" ? darkMod : lightMod}
              style={{
                backgroundColor: "transparent",
                width: "100%",
                transform: `translateY(-${pos}px)`,
              }}
            ></img>
          </div>
          <motion.div id="name" style={{ backgroundColor: "transparent" }}>
            <img
              className="logo-l"
              alt="logo"
              style={{ width: "70px" ,height:"50px"}}
              src={logoM}
            ></img>
          </motion.div>

          <div
            className="img-logo"
            style={{
              overflow: "hidden",
              display: lang === "en" ? "none" : "",
            }}
          >
            <img
              alt="ll"
              src={mod === "dark" ? darkMod : lightMod}
              style={{ width: "100%", transform: `translateY(-${pos}px)` }}
            ></img>
          </div>
        </motion.div>

        <motion.div
          className="nav-button"
          ref={scope1}
          onMouseEnter={() => {
            handlAn1();
            handlAn2();
          }}
          onMouseLeave={() => {
            handlhoveroff1();
            handlhoveroff2();
          }}
          style={{
            left: lang === "en" ? "" : "5%",
            right: lang === "en" ? "5%" : "",
            top: "40px",
          }}
          onClick={MoveToMenu}
        >
          <motion.div className="inside-button">
            <div
              id="con1"
              style={{
                backgroundColor:
                  mod === "dark"
                    ? "rgb(75, 75, 75,0.4)"
                    : "rgb(255,255,255,0.4)",
              }}
            >
              <div
                id="l1"
                style={{
                  width: "30px",
                  backgroundColor: mod === "dark" ? "rgb(75, 75, 75)" : "white",
                  height: "2px",
                }}
              ></div>
            </div>
            <div
              id="con2"
              style={{
                backgroundColor:
                  mod === "dark"
                    ? "rgb(75, 75, 75,0.4)"
                    : "rgb(255,255,255,0.4)",
              }}
            >
              <div
                id="l2"
                style={{
                  width: "30px",
                  backgroundColor: mod === "dark" ? "rgb(75, 75, 75)" : "white",
                  height: "2px",
                  marginLeft: "10px",
                }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          ref={scope2}
          className="lang-sec"
          style={{
            position: "absolute",
            top: "50px",
            left: lang === "en" ? "" : "10%",
            right: lang === "en" ? "10%" : "",
          }}
        >
          <motion.div
            className="lang-one"
            onMouseEnter={() => {
              handlehovertext();
            }}
            onMouseLeave={() => {
              handlehovertextoff();
            }}
          >
            <p
              className="lan1"
              onClick={() => {
                setLang("en");
                setLogoM(mod === "dark" ? logoen2 : logoen1);
              }}
              style={{ color: mod === "dark" ? "rgb(75, 75, 75)" : "white" }}
            >
              En
            </p>
            <motion.div
              initial={{
                scale: 0,
              }}
              id="t1"
              style={{
                borderTop: "2px solid",
                borderColor: mod === "dark" ? "rgb(75, 75, 75)" : "white",
                color: mod === "dark" ? "rgb(75, 75, 75)" : "white",
              }}
            ></motion.div>
          </motion.div>
          <motion.div
            className="lang-one"
            onMouseEnter={() => {
              handlehovertext2();
            }}
            onMouseLeave={() => {
              handlehovertextoff2();
            }}
          >
            <p
              className="lan1"
              onClick={() => {
                setLang("ar");
                setLogoM(mod === "dark" ? logoar2 : logoar1);
              }}
              style={{ color: mod === "dark" ? "rgb(75, 75, 75)" : "white" }}
            >
              العربية
            </p>
            <motion.div
              initial={{
                scale: 0,
              }}
              id="t2"
              style={{
                borderTop: "2px solid",
                borderColor: mod === "dark" ? "rgb(75, 75, 75)" : "white",
                color: mod === "dark" ? "rgb(75, 75, 75)" : "white",
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default NavBar;
