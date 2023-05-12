import React from "react";
import Carousel from "./Carousel";
/* import data from '../../data.json'; */

function ContainerCarousel(pictures) {

    const containerStyles = {
        width: "100%",
        height: "300px",
      };

  const slides = {pictures};

  return (
    <div style={containerStyles}>
      <Carousel slides={slides} />
    </div>
  );
}

export default ContainerCarousel;