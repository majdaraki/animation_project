import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Investements from "./Components/Investements/Investements";
import LogoMain from "./Components/Logo/LogoMain";
import Vision from "./Components/HomeSlider/SliderPages/VisionPage/Vision";
import ThreePoints from './Components/Menu/ThreePoints'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import HomeSlider from "./Components/HomeSlider/HomeSlider";
import SliderCultureTest from "./Components/SliderCulture/SliderCultureTest";
import { AnimatePresence } from "framer-motion";
import Approach from "./Components/HomeSlider/SliderPages/ApproachPage/Approach";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const FakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    FakeDataFetch();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <AnimatePresence>
     <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<SliderCultureTest/>} /> */}
            <Route path='/' element={<HomeSlider />} />
            <Route path='/Menu' element={<ThreePoints />} />
            <Route path='/VisionPage' element={<Vision />} />
            <Route path='/ApproachPage' element={<Approach />} />
            <Route path="/investments" element={<Investements/>}/>
        </Routes>
     </BrowserRouter>
     </AnimatePresence>
  );
}

export default App;
