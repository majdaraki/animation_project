import { useState } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <p>MARRIOTT</p>
      <p className='op'>Hotels Group</p>
      </Carousel.Item>
      <Carousel.Item>
      <p>MILLENNIUM</p>
      <p className='op'>Hotels and Resorts</p>  
      </Carousel.Item>
      <Carousel.Item>
      <p>RADISSON HOTELS</p>
      <p className='op'>Hotels Group</p>
      </Carousel.Item>
      <CarouselItem>
      <p>InterContinental</p>
      <p className='op'>Hotels Group</p>
      </CarouselItem>
      <CarouselItem>
      <p>SHAZA</p>
      <p className='op'>Hotels Group</p>
      </CarouselItem>
    </Carousel>
  );
}

export default ControlledCarousel;