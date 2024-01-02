import React, {useState} from "react";
import "./Carousal.css";
import { useLocation } from "react-router-dom";
export default function Carousal(props) {
  const sliderImagesData = props.images
    ? props.images.map((item) => item.proImg)
    : [];

  const [slide,  setSlide] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const nextSlide = () =>{
    setSlide(slide === sliderImagesData.length -1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? sliderImagesData.length - 1 : slide - 1);
  }

  const handleMouseOver = () => {
    setZoom(2.5);
    setIsZoomed(true);
  };

  const handleMouseOut = () => {
    setZoom(1);
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 }); // Reset image position when zooming out
  };

  const handleMouseMove = (e) => {
    // Update the image position based on the mouse position
    const image = e.target;
    const imageRect = image.getBoundingClientRect();
    const x = ((e.clientX - imageRect.left) / imageRect.width) * 100;
    const y = ((e.clientY - imageRect.top) / imageRect.height) * 100;
    setImagePosition({ x, y });
  };

  const handleTouchStart = () => {
    setZoom(2.5);
    setIsZoomed(true);
  };

  const handleTouchOut = () => {
    setZoom(1);
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleTouchMove = (e) => {
    const image = e.target;
    const imageRect = image.getBoundingClientRect();
    const x = ((e.touches[0].clientX - imageRect.left) / imageRect.width) * 100;
    const y = ((e.touches[0].clientY - imageRect.top) / imageRect.height) * 100;
    setImagePosition({ x, y });
  };
  

  const imageStyle = {
    transform: `scale(${zoom})`,
    transition: isZoomed ? "transform 0.5s" : "none",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    transformOrigin: `${imagePosition.x}% ${imagePosition.y}%`, 
  };

  return (
    <div className="imageCarousal overflow-hidden">
      <Link className="carousel-control-prev" role="button" tabindex="0" onClick={prevSlide}><span aria-hidden="true" className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></Link>
    <div className="carousalItem"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchCancel={handleTouchOut}
      >
      {sliderImagesData.map((image, i) => {
        return <img src={image} className={slide === i ? 'slide' : 'slide d-none'} width='auto' height='400px' key={i} style={imageStyle}/>;
      })}
    </div>
      <Link className='carousel-control-next' role="button" tabindex="0" onClick={nextSlide}><span aria-hidden="true" className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></Link>
    </div>
  );
}
