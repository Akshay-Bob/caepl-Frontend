import React from "react";
import aboutB from "../Images/about-banner.webp";
import aboutG from "../Images/CAE vintage ad_W 500 pixel.webp";
import { Row, Col, Container } from "react-bootstrap";
import aboutMac from "../Images/about-banner-mac.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutUs() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#ada298" }}>
        <Container
          className="py-5 d-xxl-block d-xl-none d-lg-none d-md-none d-block px-3"
          id="about"
        >
          <Row>
            <Col md={12}>
              <h2 style={{ textAlign: "center" }}>About US</h2>
              <LazyLoadImage
                src={aboutB}
                className="img-fluid pt-4 text-center animate__animated animate__fadeInRight"
              />
              {/* <img src={aboutB} className='img-fluid pt-4 text-center animate__animated animate__fadeInRight'/> */}
            </Col>
          </Row>

          <Row>
            <Col md={4} className="m-auto">
              {/* <img src={aboutG} className='img-fluid pt-4 px-md-1 px-5'/> */}
              <LazyLoadImage
                src={aboutG}
                className="img-fluid pt-4 px-md-1 px-5"
              />
            </Col>
            <Col
              sm={12}
              md={8}
              className="pt-4 px-sm-3 animate__animated animate__fadeIn"
            >
              <h5 style={{ textAlign: "center" }} className="pb-2 fw-bold fs-4">
                ‘The Best Block-Makers East of Suez’
              </h5>

              <p>
                After realising the potential of photoengraving and
                block-making, Framroze Poonawala purchased a second-hand plant
                from England consisting of machines dating back to the early
                1900s and set up Commercial Art Engravers in Bombay, India in
                1934. 
              </p>

              <p>
                Guided by a passion for and commitment to the preservation of
                India’s rich cultural heritage, CAE quickly established itself
                as being the best in the business and worked with museums from
                all over India. The Lalit Kala Akademi, the Prince of Wales
                Museum, Bharat Kala Bhavan in Bhopal, and the National Museum
                exclusively entrusted CAE with the reproduction of their
                miniatures. 
              </p>

              <p>
                The first Indian pre-press house to install the Vario
                Klischograph scanner in 1969, "Dark Room" cameras from West
                Germany, powderless etching technology from Japan, proofing
                machines from Switzerland and film processors from the U.S.A.,
                CAE was at the forefront of modernization.
              </p>

              <p>
                On Framroze’s son, Burjor’s return from the London College of
                Printing and Graphic Arts in 1959, he brought with him the
                pioneering developments in the West back home to India. During
                the late 1970s, printing by blocks was replaced by offset
                lithography, and from CAE, Comart Lithographers was born. With
                state-of-the-art technology, and highly skilled creative
                craftsmen, CAE remained a leader in the field of graphic
                reproduction by photolithography.
              </p>

              <p>
                The office was home to some of the nation’s premier artists.
                S.H. Raza would travel to Bombay from France to have his books
                processed, M.F. Husain would often be found cross-legged on the
                floor of the office sketching, and third generation Khurshed
                transported the office to Tyeb Mehta’s living room when he was
                too ill to make the journey. 
              </p>
            </Col>
          </Row>

          <Row>
            <Col className="animate__animated animate__fadeIn">
              <p>
                As the industry races forward at an unprecedented pace,
                CAEPL.COM has remained ahead of the curve, continuing to upgrade
                the required technology, equipment, and skill to create a
                holistic design service provider offering everything from
                conceptual layouts to final printing. Remaining on a consistent
                path of evolution, CAEPL.COM remains steeped in a legacy of
                excellence and stands strong on our 90-year foundation of
                integrity.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="d-xxl-none d-xl-block d-lg-block d-md-block d-none py-5">
          <Row>
            <Col md={12}>
              <h2 style={{ textAlign: "center" }}>About US</h2>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col md={8}>
              {/* <img src={aboutMac} className='img-fluid text-center h-100 animate__animated animate__fadeInLeft'/> */}
              <LazyLoadImage
                src={aboutMac}
                className="img-fluid text-center h-100 animate__animated animate__fadeInLeft"
              />
            </Col>
            <Col md={4}>
              {/* <img src={aboutG} className='img-fluid px-md-1 px-5 animate__animated animate__fadeInRight'/> */}
              <LazyLoadImage
                src={aboutG}
                className="img-fluid px-md-1 px-5 animate__animated animate__fadeInRight"
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="pt-4 animate__animated animate__fadeIn">
              <h5 style={{ textAlign: "center" }} className="pb-2 fw-bold fs-4">
                ‘The Best Block-Makers East of Suez’
              </h5>

              <p>
                After realising the potential of photoengraving and
                block-making, Framroze Poonawala purchased a second-hand plant
                from England consisting of machines dating back to the early
                1900s and set up Commercial Art Engravers in Bombay, India in
                1934. 
              </p>

              <p>
                Guided by a passion for and commitment to the preservation of
                India’s rich cultural heritage, CAE quickly established itself
                as being the best in the business and worked with museums from
                all over India. The Lalit Kala Akademi, the Prince of Wales
                Museum, Bharat Kala Bhavan in Bhopal, and the National Museum
                exclusively entrusted CAE with the reproduction of their
                miniatures. 
              </p>

              <p>
                The first Indian pre-press house to install the Vario
                Klischograph scanner in 1969, "Dark Room" cameras from West
                Germany, powderless etching technology from Japan, proofing
                machines from Switzerland and film processors from the U.S.A.,
                CAE was at the forefront of modernization.
              </p>

              <p>
                On Framroze’s son, Burjor’s return from the London College of
                Printing and Graphic Arts in 1959, he brought with him the
                pioneering developments in the West back home to India. During
                the late 1970s, printing by blocks was replaced by offset
                lithography, and from CAE, Comart Lithographers was born. With
                state-of-the-art technology, and highly skilled creative
                craftsmen, CAE remained a leader in the field of graphic
                reproduction by photolithography.
              </p>

              <p>
                The office was home to some of the nation’s premier artists.
                S.H. Raza would travel to Bombay from France to have his books
                processed, M.F. Husain would often be found cross-legged on the
                floor of the office sketching, and third generation Khurshed
                transported the office to Tyeb Mehta’s living room when he was
                too ill to make the journey. 
              </p>

              <p>
                As the industry races forward at an unprecedented pace,
                CAEPL.COM has remained ahead of the curve, continuing to upgrade
                the required technology, equipment, and skill to create a
                holistic design service provider offering everything from
                conceptual layouts to final printing. Remaining on a consistent
                path of evolution, CAEPL.COM remains steeped in a legacy of
                excellence and stands strong on our 90-year foundation of
                integrity.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
