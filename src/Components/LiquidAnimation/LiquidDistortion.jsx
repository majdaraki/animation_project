import React, { useRef, useEffect } from 'react';
import HoverEffect from 'hover-effect';
import * as THREE from 'three';
import { TweenMax } from 'gsap'; // Import from gsap instead of tweenmax

const LiquidDistortion = () => {
  const hoverRef = useRef(null);

  useEffect(() => {
    var distortion = new HoverEffect({
      parent: hoverRef.current,
      intensity: 2,
      image1: '../HomeSlider/SliderPages/images/1.ef972611.jpg',
      image2: '../HomeSlider/SliderPages/images/2.a47eb8f9.jpg',
      displacementImage: '../HomeSlider/SliderPages/images/4.64666605.jpg',
    });

    // Optional: Add some animations after the distortion effect is applied
    TweenMax.fromTo(
      distortion.displacementImage,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    return () => {
      // Set distortion to null to release the reference
      distortion = null;
    };
  }, []);

  return <div ref={hoverRef} />;
};

export default LiquidDistortion;
