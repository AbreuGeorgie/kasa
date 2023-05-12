import React, { useState } from "react";

const slideStyles = {
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

  const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagePrev = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const imageNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const backgroundImage = {
      ...slideStyles,
      backgroundImage: `url(${slides[currentIndex]})`,
    };
    const showArrowsAndSlideNumber = () => {
      if(slides.length !== 1 && slides.length !== 0){
       return  <div>
          <div onClick={imagePrev} style={leftArrowStyles}>
            ❰
          </div>
          <div onClick={imageNext} style={rightArrowStyles}>
            ❱
          </div>
          <div style={slideNumber}>
          {currentIndex + 1}/{slides.length}
          </div>
          </div>
      }
    }
    return (
      <div style={sliderStyles}> 
        <div style={backgroundImage}></div>
        {showArrowsAndSlideNumber()}
      </div>
    );
  };
  
  export default Carousel;