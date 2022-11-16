import React from "react";
//Import carousel
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function NewsCarousel() {
  return (
    
    <Carousel
      {...{
        showArrows: true,
        showStatus: false,
        showIndicators: false,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: true,
        autoPlay: true,
        stopOnHover: true,
        swipeable: true,
        dynamicHeight: true,
        emulateTouch: true,
        autoFocus: false,
        thumbWidth: 100,
        selectedItem: 0,
        interval: 3000,
        transitionTime: 1000,
        swipeScrollTolerance: 5,
        ariaLabel: "ariaLabel",
      }} className="max-h- mb-3"
    >
      <div key="1">
        <img className="relative text-center text-white" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"/>
        <p className="absolute top-1/2 left-1/2 text-white bg-black" style={{transform: "translate(-50%, -50%)"}}>Tenemos ofertas 😳</p>
        
      </div>
      <div key="2">
        <img src={`https://picsum.photos/800/500/?random&t=2`} />
      </div>
      <div key="3">
        <img src={`https://picsum.photos/800/500/?random&t=3`} />
      </div>
    </Carousel>
    
  );
}

export default NewsCarousel;
