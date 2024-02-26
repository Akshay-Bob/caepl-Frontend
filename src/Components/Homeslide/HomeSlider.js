import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import leftArrow from "../../Images/left-arrow-next-svgrepo-com.svg";
import "../Homeslide/HomeSlides_style.css";

import slide1 from "../../Images/office-space/desktop01.webp";
import slide2 from "../../Images/office-space/desktop02.webp";
import slide3 from "../../Images/office-space/desktop03.webp";
import slide4 from "../../Images/office-space/desktop04.webp";
import slide5 from "../../Images/office-space/desktop05.webp";
import slide6 from "../../Images/office-space/desktop06.webp";
import slide7 from "../../Images/office-space/desktop07.webp";
import slide8 from "../../Images/banner/awards.jpg";

import mobSlide1 from "../../Images/office-space/01_Mobile.webp";
import mobSlide2 from "../../Images/office-space/02_Mobile.webp";
import mobSlide3 from "../../Images/office-space/03_Mobile.webp";
import mobSlide4 from "../../Images/office-space/04_Mobile.webp";
import mobSlide5 from "../../Images/office-space/05_Mobile.webp";
import mobSlide6 from "../../Images/office-space/06_Mobile.webp";
import mobSlide7 from "../../Images/office-space/03_Mobile.webp";
import mobSlide8 from "../../Images/banner/awards-mobile.jpg";

const slides = [
  { id: 8, img: slide8, mobileImg: mobSlide8, alt: "Awards" },
  { id: 1, img: slide1, mobileImg: mobSlide1, alt: "Invitation Cards" },
  { id: 2, img: slide2, mobileImg: mobSlide2, alt: "Invitation Cards" },
  { id: 3, img: slide7, mobileImg: mobSlide7, alt: "Invitation Cards" },
  { id: 4, img: slide4, mobileImg: mobSlide4, alt: "Invitation Cards" },
  { id: 5, img: slide5, mobileImg: mobSlide5, alt: "Invitation Cards" },
  { id: 6, img: slide6, mobileImg: mobSlide6, alt: "Invitation Cards" },
  { id: 7, img: slide3, mobileImg: mobSlide3, alt: "Invitation Cards" },
];

function HomeSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex(index - 1 < 0 ? slides.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1 >= slides.length ? 0 : index + 1);
  };

  const slideList = slides.map((slide) => (
    <Carousel.Item interval={4000} key={slide.id}>
      <img
        src={slide.img}
        alt={slide.alt}
        className="img-fluid d-md-block d-none"
      />
      <img
        src={slide.mobileImg}
        alt={slide.alt}
        className="img-fluid d-md-none d-block"
      />
    </Carousel.Item>
  ));

  return (
    <div className="position-relative">
      <Carousel activeIndex={index} onSelect={handleSelect} wrap={false}>
        {slideList}
      </Carousel>
      <Button
        variant="primary"
        className="position-absolute top-50 translate-middle-y start-0 bg-transparent border-0"
        style={{
          zIndex: "3",
          padding: "5px",
          paddingLeft: "10px",
        }}
        onClick={handlePrev}
      >
        <img src={leftArrow} width={20} alt="left-arrow" />
      </Button>
      <Button
        variant="primary"
        className="position-absolute top-50 translate-middle-y end-0 bg-transparent border-0"
        style={{
          zIndex: "3",
          padding: "5px",
          paddingRight: "10px",
        }}
        onClick={handleNext}
      >
        <img src={leftArrow} width={20} style={{ rotate: "180deg" }} alt="left-arrow"/>
      </Button>
    </div>
  );
}

export default HomeSlider;