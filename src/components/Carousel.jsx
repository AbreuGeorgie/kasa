import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.scss";

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
    backgroundImage: `url(${pictures[currentIndex]})`,
  };

  function showArrowsAndSlideNumber() {
    if (pictures.length !== 1 && pictures.length !== 0) {
      return (
        <div>
          <div
            onClick={imagePrev}
            className="left-arrow"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            onClick={imageNext}
            className="right-arrow"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="slide-number">
            {currentIndex + 1}/{pictures.length}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <div className="slider">
        <div
          className="background-image"
          style={backgroundImage}
        ></div>
        {showArrowsAndSlideNumber()}
      </div>
    </div>
  );
}

export default Carousel;
