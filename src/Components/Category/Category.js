import React, { useState } from 'react';
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { useLocation } from 'react-router-dom';
import { proData } from "../../Data/proData";
import { Container, Row, Col, Image } from "react-bootstrap";
import HorizontalTabs from '../HorizontalTabs/HorizontalTabs';
import '../../Responsive.css'

export default function Category() {
    
  let [isOpen, setIsOpen] = useState(false);
  const [selectedSlideImage, setSelectedSlideImage] = useState(); 
    const handleShow = (i) => {
        setSelectedSlideImage(i);
    }
    const location = useLocation();
    const useParams = new URLSearchParams(location.search);
    const type = useParams.get("product");
    const matchingService = proData.find((item) => item.url === type);
    if (!matchingService || !matchingService.imgDatas || matchingService.imgDatas.length === 0) {
        return <div>Service not found</div>;
    }
    const productTabList = proData.map(i => i.category === matchingService.category ? i.url : null).filter(Boolean);
    const productListItems = matchingService.imgDatas ? matchingService.imgDatas.map((productItem, index) => (
        <li key={index} className="listImageStyle" onClick={() => {setIsOpen(true)}}>
            <Image src={productItem.productSm} rounded className="img-fluid py-3" style={{ cursor: "pointer" }} onClick={() => handleShow(index)}/>
        </li>
    )) : [];
        const selectedImage = matchingService.imgDatas[selectedSlideImage];
        const isMultipleOptions = selectedImage && selectedImage.isMultiple;
        let images = [];
        if (isMultipleOptions) {
          images = (selectedImage?.imageView || []).map(item => ({ src: item.proImg }));
        } else if (selectedImage?.productLg) {
          images = matchingService.imgDatas
            .filter(item => item.productLg) 
            .map(item => ({ src: item.productLg }));
        }
    const selectedIndex = productTabList.indexOf(type);
    return (
        <>
            <Container className="d-block d-sm-none">
                <Row>
                    <Col className="pt-3" md={5}>
                        <h4>{matchingService.alt}</h4>
                        <Image src={matchingService.bannerImg} className="img-fluid pb-3" />
                    </Col>
                    <Col md={7}>
                        <p style={{ textAlign: "left" }}>{matchingService.desc}</p>
                    </Col>
                </Row>
            </Container>
            <Container className="d-none d-sm-block pb-2">
                <Row>
                    <Col className="pt-3" md={5}>
                        <h4>{matchingService.alt}</h4>
                        <p style={{ textAlign: "left" }}>{matchingService.desc}</p>
                    </Col>
                    <Col md={7}>
                        <Image src={matchingService.bannerImg} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', marginBottom: '5px' }}>
                <Container>
                    <Row>
                        <Col className='px-0'>
                        {productTabList.length > 0 && (
                        <HorizontalTabs
                            tabList={productTabList}
                            selectedIndex={selectedIndex}
                        />
                        )}
                        </Col>
                    </Row>
                </Container>
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
                        <SlideshowLightbox
                            images={images}
                            showThumbnails={true}
                            showSlideshowIcon={false}
                            open={isOpen}
                            lightboxIdentifier="lbox1"
                            onClose={() => setIsOpen(false)}
                            />
                    </Col>
                </Row>
            </Container>
        </>
    )
}