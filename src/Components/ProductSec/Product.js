import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Product.css";
import { Link } from "react-router-dom";
import { proData } from "../../Data/proData";

export default function Product() {
  const options = {
    items: 3,
    loop: true,
    center: false,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true, // Enable navigation
    dots: false,
    margin: 0,
    autoplayHoverPause: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], 
  };

  const productDataList = proData
    .filter((item) => item.category === "products")
    .map((item, index) => (
      <div className="item" key={index}>
        <Link to={`/category?product=${item.url}`}>
          <img src={item.img} alt={item.alt} />
          <div className="overlay">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: item.alt.replace(/ /g, "<br/>"),
              }}
            ></div>
          </div>
        </Link>
      </div>
    ));

  const photographyDataList = proData
    .filter((item) => item.category === "PHOTOGRAPHY & RETOUCHING")
    .map((item, index) => (
      <div className="item" key={index}>
        <Link to={`/category?product=${item.url}`}>
          <img src={item.img} alt={item.alt} />
          <div className="overlay">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: item.alt.replace(/ /g, "<br/>"),
              }}
            ></div>
          </div>
        </Link>
      </div>
    ));

  const printingDataList = proData
    .filter((item) => item.category === "PRINTING & FABRICATION")
    .map((item, index) => (
      <div className="item" key={index}>
        <Link to={`/category?product=${item.url}`}>
          <img src={item.img} alt={item.alt} />
          <div className="overlay">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: item.alt.replace(/ /g, "<br/>"),
              }}
            ></div>
          </div>
        </Link>
      </div>
    ));

  return (
    <>
      {/* desktop */}
      <Container fluid className="pt-lg-0 pt-md-3 pt-5" id="product">
        <Row className="animate__animated animate__fadeInLeft" id="design">
          <Col
            md={4}
            lg={4}
            className="m-auto ps-xl-5 ps-lg-3 ps-md-3 ps-3 animate__animated animate__fadeInLeft animate__faster"
          >
            <h4 className="d-lg-none d-md-none d-none">
              INVITATIONS, STATIONARY, <br />
              COFFEE-TABLE BOOKS, <br />
              MAGAZINES AND MORE...
            </h4>
            <h4 className="d-lg-block d-md-block d-block">
                INVITATIONS, STATIONARY, COFFEE-TABLE BOOKS, MAGAZINES AND MORE…
            </h4>
            <p style={{ textAlign: "left" }}>
                From pre-to-postproduction, we have you covered 
            </p>
          </Col>
          <Col md={8} lg={8} className="pe-md-0 pe-0 ps-md-0 ps-0">
            <OwlCarousel className="owl-theme position-realtive" {...options}>
              {productDataList}
            </OwlCarousel>
          </Col>
        </Row>

        <Row
          className="my-md-auto animate__animated animate__fadeInRight"
          id="photograhy"
        >
          <Col
            md={4}
            className="m-auto ps-xl-5 ps-lg-3 ps-md-3 ps-3  pt-md-0 pt-md-0 pt-3"
          >
            <h4>PHOTOGRAPHY & RETOUCHING</h4>
            <p
              style={{ textAlign: "left" }}
              className="d-lg-none d-md-none d-none"
            >
              Right from product shoots to family <br />
              portraits, CAEPL offers a state-of-the-art, <br />
              fully equipped studio to ensure nothing <br />
              short of high-quality images.
            </p>

            <p
              style={{ textAlign: "left" }}
              className="d-lg-block d-md-block d-block"
            >
              Right from product shoots to family portraits, CAEPL offers a state-of-the-art, fully equipped studio to ensure nothing short of high-quality images.
            </p>
          </Col>
          <Col md={8} className="pe-md-0 pe-0 ps-md-0 ps-0 my-md-auto">
            <OwlCarousel className="owl-theme" {...options}>
              {photographyDataList}
            </OwlCarousel>
          </Col>
        </Row>

        <Row className="animate__animated animate__fadeInLeft" id="printing">
          <Col
            md={4}
            className="m-auto ps-xl-5 ps-lg-3 ps-md-3 ps-3  pt-md-0 pt-3"
          >
            <h4>PRINTING & FABRICATION</h4>
            <p style={{ textAlign: "left" }}>
                From large-format printing and serigraphy to short-run printing and packaging, we do it all.
            </p>
          </Col>
          <Col md={8} className="pe-md-0 pe-0 ps-md-0 ps-0">
            <OwlCarousel className="owl-theme" {...options}>
              {printingDataList}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
