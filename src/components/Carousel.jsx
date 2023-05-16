import React, { useState } from "react";

const containerStyles = {
  width: "100%",
  height: "300px",
};

const picturesStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "50px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "50px",
  color: "white",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const slideNumber = {
  position: "relative",
  bottom: "2em",
  display: "flex",
  justifyContent: "center",
  color: "white",
  fontWeight: "500",
  fontSize: "20px",
};

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function imagePrev() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function imageNext() {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const backgroundImage = {
    ...picturesStyles,
    backgroundImage: `url(${pictures[currentIndex]})`,
  };
  function showArrowsAndSlideNumber() {
    if (pictures.length !== 1 && pictures.length !== 0) {
      return (
        <div>
          <div
            onClick={imagePrev}
            style={leftArrowStyles}
          >
            ❰
          </div>
          <div
            onClick={imageNext}
            style={rightArrowStyles}
          >
            ❱
          </div>
          <div style={slideNumber}>
            {currentIndex + 1}/{pictures.length}
          </div>
        </div>
      );
    }
  }
  return (
    <div style={containerStyles}>
      <div style={sliderStyles}>
        <div style={backgroundImage}></div>
        {showArrowsAndSlideNumber()}
      </div>
    </div>
  );
}

export default Carousel;
