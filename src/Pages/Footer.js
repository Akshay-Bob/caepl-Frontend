import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../Images/logo.png'
const iframeS = {
width: "600",
height: "600",
border: "0",
};

const divStyle = {
margin: "0 auto",
width: "auto",
};
export default function Footer() {
return (
<>
  <Container style={{ backgroundColor: "#42413f" }} fluid className="py-5" id="footer">
    <Container style={{ color: "#ada298" }}>
      <Row>
        <Col md={5}>
        <div className="addContent pb-2 animate__animated animate__fadeInLeft">
          {/* <h3 className="text-center mb-0 footerLogo">
            COMMERCIAL ART ENGRAVERS Pvt. Ltd.
          </h3> */}
          <a href="/">
            <img src={logo} className="img-fluid pb-4" />
          </a>
          {/* <p className="text-center footerSubLogo">Established 1934</p> */}
          <address className="text-center d-xl-block d-lg-none d-md-none d-none">
            386/8 SANE GURUJI PREMISES, VEER SAVARKAR MARG, <br />
            OPP SIDDHIVINAYAK TAMPLE, PRABHADEVI MUMBAI - 400025
          </address>

          <address className="text-center d-xl-none d-lg-block d-md-block d-block">
            386/8 SANE GURUJI PREMISES, VEER SAVARKAR MARG, OPP
            SIDDHIVINAYAK TAMPLE, PRABHADEVI MUMBAI - 400025
          </address>
        </div>

        <div className="mobContent animate__animated animate__fadeInLeft">
          <h3 className="text-center text-uppercase mb-0">
            Get In Touch
          </h3>

          <p className="text-center" style={{ fontSize: "14px" }}>

            <a href={"tel:+912243323456"} target="blank" style={{ textDecoration: "none", color: "#ada298" }}>
              +91-22 43323456
            </a>
            |
            <a href={"mailto:info@caepl.com"} target="blank" style={{ textDecoration: "none", color: "#ada298" }}>
              info@caepl.com
            </a>
          </p>
        </div>

        <div className="coonectCo animate__animated animate__fadeInLeft">
          <h3 className="text-center text-uppercase mb-0">
            Connect with Us
          </h3>
          <ul className="text-center d-flex justify-content-center gap-3 ps-0">
            <li>
              <a href={"#"} target="blank" style={{ textDecoration: "none", color: "#ada298" }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href={"https://wa.me/912243323456"} target="blank"
                style={{ textDecoration: "none", color: "#ada298" }}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>

            <li>
              <a href={"#"} target="blank" style={{ textDecoration: "none", color: "#ada298" }}>
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href={"#"} style={{ textDecoration: "none", color: "#ada298" }}>
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        </Col>

        <Col md={7} className="mt-md-0 mt-4 animate__animated animate__fadeInRight">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0401074320125!2d72.82744817405964!3d19.017954253794414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec72dc69a01%3A0xe47178713b536cf8!2sCOMMERCIAL%20ART%20ENGRAVERS%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1697431717782!5m2!1sen!2sin"
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        </Col>
      </Row>
    </Container>
  </Container>
</>
);
}