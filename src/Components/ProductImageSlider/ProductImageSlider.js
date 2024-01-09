import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Modal, Button } from "react-bootstrap";
import cross from "../../Images/cross.svg";
import RightVerticalSlider from "../RightVerticalSlider";
import { useLocation } from "react-router-dom";
// import MobileViewProductSlider from "./MobileViewProductSlider";
import './productImageSlider.css'
import leftArrow from '../../Images/left-arrow-next-svgrepo-com.svg'



export default function ProductImageSlider(props) {
  const sliderImagesData = props.images
    ? props.images.map((item) => item.proImg)
    : [];

    const slideOption = props.images ? props.images.map((item) => item.proImgOption) : [];

  const [activeIndex, setActiveIndex] = useState(0); // Set initial active index to 0
  const [zoom, setZoom] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  // const handleSelect = (selectedIndex, e) => {
  //   setActiveIndex(selectedIndex);
  // };

  useEffect(() => {
    // Reset active index to 0 when the component receives new images
    setActiveIndex(0);
  }, [props.images]);

  // const showAllImages = window.innerWidth >= 2560;

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

  const handleTouchOut = (e) => {
    // Prevent the default behavior of the touch event
    e.preventDefault();
  
    setZoom(1);
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 });
  };
  

  const handleTouchMove = (e) => {
    e.stopPropagation();
  
    // Update the image position based on the touch position
    const image = e.target;
    const imageRect = image.getBoundingClientRect();
    const x = ((e.touches[0].clientX - imageRect.left) / imageRect.width) * 100;
    const y = ((e.touches[0].clientY - imageRect.top) / imageRect.height) * 100;
    setImagePosition({ x, y });
  };
  

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const image = e.target;
      const imageRect = image.getBoundingClientRect();
      const x = ((e.clientX - imageRect.left) / imageRect.width) * 100;
      const y = ((e.clientY - imageRect.top) / imageRect.height) * 100;
      setImagePosition({ x, y });
    }
  };

  // const handleDoubleClick = () => {
  //   // Toggle zoom on double-click
  //   setZoom((prevZoom) => (prevZoom === 1 ? 2.5 : 1));
  //   setIsZoomed((prevIsZoomed) => !prevIsZoomed);
  //   // Reset image position on double-click
  //   setImagePosition({ x: 0, y: 0 });
  // };
  useEffect(() => {
    // Add event listeners when component mounts
    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const imageStyle = {
    transform: `scale(${zoom})`,
    transition: isZoomed ? "transform 0.5s" : "none",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    transformOrigin: `${imagePosition.x}% ${imagePosition.y}%`, // Set the zoom origin based on mouse position
  };

  const location = useLocation();
  const useParams = new URLSearchParams(location.search);
  const type = useParams.get("product");

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Body>
          <Container
            style={{
              position: "fixed",
              top: "53%",
              left: "50%",
              margin: "auto",
            }}
            className="translate-middle productSliderStyle"
          >
            <Row>
              <Col md={10}>
              <Button
                  variant="secondary"
                  onClick={props.handleClose}
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
                  onSelect={() =>props.handleSelect(activeIndex, props.isMultiple)}
                  interval={null}
                  style={{background: '#e9e9e9'}}
                  >
                    
                  {sliderImagesData.map((image, index) => (
                    <Carousel.Item
                      key={index}
                      onMouseOver={type === "menus" ? null : handleMouseOver}
                      onMouseOut={handleMouseOut}
                      onMouseMove={handleMouseMove}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchCancel={handleTouchOut}
                      onMouseDown={handleMouseDown}
                    >
                      <img
                        src={image}
                        className="w-100 h-100 object-fit-contain mw-100"
                        style={imageStyle}
                        alt="image"
                      />
                    </Carousel.Item>
                  ))}
                <Button
                  variant="primary"
                  onClick={props.handlePrev}
                  className="position-absolute top-50 translate-middle-y start-0 bg-transparent border-0 navigated-arrows"
                  style={{
                    zIndex: "3",
                    padding: "5px",
                    paddingLeft: "10px",
                  }}
                >
                  <img src={leftArrow} width={20} alt="left-aarow"/>
                </Button>
                <Button
                  variant="primary"
                  onClick={props.handleNext}
                  className="position-absolute top-50 translate-middle-y end-0 bg-transparent border-0 navigated-arrows"
                  style={{
                    zIndex: "3",
                    padding: "5px",
                    paddingRight: "10px",
                  }}
                >
                  <img src={leftArrow} width={20} style={{rotate:'180deg'}} alt="leftArrow" />
                </Button>
                </Carousel>

                {/* {console.log(sliderImagesData, 'sliderImagesData')} */}
              </Col>
              {/* <Col md={10} className="d-md-none d-block">
                <MobileImageCarousal 
                  handleClose ={props.handleClose}
                  activeIndex = {activeIndex}
                  handleSelect = {handleSelect}
                  handleMouseOver = {type === "menus" ? null : handleMouseOver}
                  handleMouseOut = {type === "menus" ? null : handleMouseOut}
                  handleMouseMove = {type === "menus" ? null : handleMouseMove}
                  handleTouchStart = {type === "menus" ? null : handleTouchStart}
                  handleTouchMove = {type === "menus" ? null : handleTouchMove}
                  handleTouchOut = {type === "menus" ? null : handleTouchOut} 
                  handleMouseDown={type === "menus" ? null : handleMouseDown} 
                  sliderImagesData={sliderImagesData}
                  imageStyle={imageStyle}
                
                />
              </Col> */}
              <Col md={2} className="m-auto productOptionsSlide pt-3 position-relative d-flex align-items-center">
                <RightVerticalSlider slideOption={slideOption} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}