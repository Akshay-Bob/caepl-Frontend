import React from 'react'
import cross from "../Images/cross.svg";
import { Button, Carousel } from 'react-bootstrap';

export default function MobileImageCarousal({handleClose, activeIndex, handleSelect, handleMouseOver, handleMouseOut, handleMouseMove, handleTouchStart, handleTouchMove, handleTouchOut, handleMouseDown, sliderImagesData, imageStyle}) {
  return (
    <div>
         <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="position-absolute top-0 translate-middle closeBtn"
                  style={{
                    zIndex: "3",
                    padding: "3px",
                    paddingTop: "0px",
                    right: "15%",
                  }}
                >
                  <img
                    src={cross}
                    style={{ width: "20px" }}
                    alt="Close button"
                  />
                </Button>
                <Carousel
                  fade
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  interval={null}
                  style={{background: '#e9e9e9'}}
                  >
                  {sliderImagesData.map((image, index) => (
                    <Carousel.Item
                      key={index}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      onMouseMove={handleMouseMove}
                      onClick={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onDoubleClick={handleTouchOut}
                      onMouseDown={handleMouseDown}
                    >
                      <img
                        src={image}
                        className="img-fluid rounded"
                        style={imageStyle}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
    </div>
  )
}
