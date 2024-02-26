import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './testimonial.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { testimonial } from '../../Data/proData';
import quotesImage from '../../Images/right-quotes-symbol.png';
import leftArrow from '../../Images/left-chevron.png'

export default function Testimonial() {
  const options = {
    loop: true,
    center: false,
    autoplay: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    navText: [`<i class="fa-solid fa-play left-arrow-icon"></i>`, `<i class="fa-solid fa-play right-arrow-icon"></i>`],
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 1,

      },
      600: {
        items: 1,
      },
      1024: {
        items: 3,
        margin: 15,
      },
      1920: {
        items: 3,
        margin: 20,
      },

      2560: {
        items: 3,
        margin: 20,
      },
    },
  };

  const testimonialData = testimonial.map((item) => 
    <div key={item.id} style={{backgroundColor: '#dbcece', padding: '20px 26px', backgroundImage:`url(${quotesImage})`, backgroundRepeat: 'no-repeat', backgroundSize:'100px', boxSizing: 'content-box', height: '450px', width: 'fit-content', position: 'relative', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', backgroundPosition: '14px 16px'}}>
      <p style={{fontSize: '14px'}}>{item.content}</p>
      <h5 style={{position: 'absolute', bottom: '20px', fontSize: '18px', fontWeight: '500'}}><center>   
        - {item.name}</center></h5>
      <p className='testimonalSubHeading' style={{fontSize: '14px',position: 'absolute', bottom: '10px', marginTop: '10px'}}>{item.positions}</p>
    </div>
  )
  return (
    <Container fluid>
      <Container id="testimonial" className="py-5">
        <Row>
          <Col md={12}>
            <h2 style={{ textAlign: "center", paddingBottom: '10px' }}>Testimonials</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <OwlCarousel className="owl-theme position-relative" {...options} >
              {testimonialData}
            </OwlCarousel>
          </Col>
          </Row>
      </Container>
    </Container>
  )
}
