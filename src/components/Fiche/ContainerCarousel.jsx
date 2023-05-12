import React from "react";
import Carousel from "./Carousel";
/* import data from '../../data.json'; */


function ContainerCarousel() {

    const containerStyles = {
        width: "100%",
        height: "300px",
      };

  const slides = [
    {url :"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"},
    {url :"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"},
    {url :"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"},
    {url :"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"},
    {url :"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"},
  ];

  return (
    <div style={containerStyles}>
      <Carousel slides={slides} />
    </div>
  );
}

export default ContainerCarousel;