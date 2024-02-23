import logoen1 from "./imgs/Enwhite.png";
import logoen2 from "./imgs/EnDark.png";
import logoar1 from "./imgs/Arwhite.png";
import logoar2 from "./imgs/Arblack.png";
import { motion, useAnimate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import lightMod from "./imgs/sprite-light.179d34b8.png";
import darkMod from "./imgs/sprite-dark.61685b2d.png";

function LogoMain(Props) {
  const [scop3, animate3] = useAnimate();
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

  const handlhoverlogo = async () => {
    await animate3("#name", { scaleX: 0, scaleY: 1 }, { duration: 0.5 });
    await animate3("#name", { scaleX: 1, scaleY: 1 }, { duration: 0.5 });
  };
  const mod = Props.mod;
  const [lang, setLang] = useState(Props.lang);
  const [logoM, setLogoM] = useState(mod === "dark" ? lang==="en"?logoen2:logoar2 :lang==="en"? logoen1:logoar1);
  return (
    <div>
      <motion.div
        onMouseEnter={() => {
          handlhoverlogo();
          setStart(true);
        }}
        ref={scop3}
        className="logo-nav"
        style={{
          
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
          <img className="logo-l" alt="logo" src={logoM}></img>
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
    </div>
  );
}

export default LogoMain;
