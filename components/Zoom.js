import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ZoomSlider = ({ images }) => {
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    // ... your other properties
  };

  return (
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <div key={index} className="flex justify-center w-full h-full">
          <img
            className="w-[1000px] h-[400px] object-fill rounded-lg shadow-xl"
            src={each}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default ZoomSlider;
