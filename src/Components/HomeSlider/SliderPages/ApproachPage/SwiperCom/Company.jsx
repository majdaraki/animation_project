import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p1 from "../../images/marriott-black.png"
import p2 from "../../images/2.jpg"
import p3 from "../../images/radisson-hotels-logo-teaser-480x384.jpg"
import p4 from "../../images/5-480x320.jpg"
import p5 from "../../images/6.png"
import { CarouselItem } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={p1} alt='p1'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={p2} alt='p2'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={p3} alt='p3'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={p4} alt='p4'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={p5} alt='p5'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;