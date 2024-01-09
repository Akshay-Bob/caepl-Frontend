import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcomes from "../Breadcomes";
import { useLocation } from "react-router-dom";
import { proData } from "../../Data/proData";
import Image from "react-bootstrap/Image";
import ImageViewer from "../ImageViewer";
import ProductImageSlider from "../ProductImageSlider/ProductImageSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function Category() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(false);
  const [show, setShow] = useState(false);
  // const [selectedImage, setSelectedImage] = useState("");
  const [selectedSlideImage, setSelectedSlideImage] = useState();
  const [display, setDisplay] = useState("none");

  const handleClose = () => {
    setShow(false);
    // setSelectedProductIndex(false);
  };

  const handleShow = (i) => {
    setShow(true);
    // setSelectedImage(matchingService.imgDatas[i].productSm);
    setSelectedProductIndex(i);
    setDisplay("block");
    setSelectedSlideImage(i);
  };

  const handleNext = () => {
    const nextIndex = (selectedProductIndex + 1) % matchingService.imgDatas.length;
    updateSelectedImage(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (selectedProductIndex - 1 + matchingService.imgDatas.length) % matchingService.imgDatas.length;
    updateSelectedImage(prevIndex);
  };
  
  const updateSelectedImage = (index) => {
    // setSelectedImage(matchingService.imgDatas[index].productSm);
    setSelectedSlideImage(index);
    setSelectedProductIndex(index);
  };

  const handleSelect = (selectedIndex, isMultiple) => {
    if (isMultiple) {
      // console.log(selectedIndex)
      setSelectedProductIndex(selectedIndex);
    } else {
      setSelectedProductIndex(selectedIndex);
    }
  };

  const location = useLocation();
  const useParams = new URLSearchParams(location.search);
  const type = useParams.get("product");
  const matchingService = proData.find((item) => item.url === type);
  if (!matchingService || !matchingService.imgDatas || matchingService.imgDatas.length === 0) {
    return <div>Service not found</div>; // Handle the case where there's no matching service
  }
  const productListItems = matchingService.imgDatas
    ? matchingService.imgDatas.map((productItem, index) => (
      <li key={index} className="listImageStyle">
        <Image
          src={productItem.productSm}
          rounded
          className="img-fluid py-3"
          onClick={() => handleShow(index)}
          style={{ cursor: "pointer" }}
        // width={'200px'}
        />
      </li>
    ))
    : [];

  // const imageViews = matchingService.imgDatas
  //   ? matchingService.imgDatas.map((item) => item.isMultiple)
  //   : [];

  const selectedProduct = matchingService.imgDatas[selectedSlideImage];

  return (
    <>
      <Container className="d-block d-sm-none">
        <Row>
          <Col className="pt-3" md={5}>
            <Breadcomes
              cat={matchingService.category}
              address={matchingService.alt}
            />
            <h4>{matchingService.alt}</h4>
            <Image src={matchingService.bannerImg} className="img-fluid pb-3" />
          </Col>
          <Col md={7}>
            <p style={{ textAlign: "left" }}>{matchingService.desc}</p>
          </Col>
        </Row>
      </Container>

      <Container className="d-none d-sm-block pb-4">
        <Row>
          <Col className="pt-3" md={5}>
            <Breadcomes
              cat={matchingService.category}
              address={matchingService.alt}
            />
            <h4>{matchingService.alt}</h4>
            <p style={{ textAlign: "left" }}>{matchingService.desc}</p>
          </Col>
          <Col md={7}>
            <Image src={matchingService.bannerImg} className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container className="pb-4">
        <Row>
          <Col>
            <ul
              className="ps-0 productImgStyle"
              style={{ display: "grid", gridAutoRows: "auto" }}
            >
              {productListItems}
            </ul>
          </Col>
        </Row>
      </Container>

      {selectedProduct && selectedProduct.isMultiple ? (
        <ProductImageSlider
          images={selectedProduct.imageView}
          activeIndex={selectedSlideImage}
          show={show}
          handleSelect={() => handleSelect(selectedProductIndex, selectedProduct?.isMultiple)}
          isMultiple={selectedProduct?.isMultiple}
          handleClose={handleClose}
          display={display}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      ) : (
        <ImageViewer
          show={show}
          handleClose={handleClose}
          images={
            matchingService.imgDatas
              ? matchingService.imgDatas.map((item) => item.productLg)
              : []
          }
          activeIndex={selectedSlideImage}
          handleSelect={() => handleSelect(selectedProductIndex, selectedProduct?.isMultiple)}
          isMultiple={selectedProduct?.isMultiple}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
      
    </>
  );
};
export default Category;