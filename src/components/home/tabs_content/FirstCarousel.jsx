import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FirstCarousel({ images }) {
  if (images != undefined) {
    return (
      <Carousel
        autoPlay={true}
        // selectedItem={selectedIndex}
        infiniteLoop={true}
        interval={2000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={false}
      >
        <div>
          <img src={images[0].src} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={images[1].src} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={images[2].src} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={images[3].src} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
    );
  }
}
