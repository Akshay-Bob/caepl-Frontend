import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import HorizontalTabs from '../HorizontalTabs/HorizontalTabs';
import { SlideshowLightbox } from 'lightbox.js-react'


export default function Category() {
    const [products, setProducts] = useState(null);
    const [products1, setProducts1] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const location = useLocation();
    const useParams = new URLSearchParams(location.search);
    const type = useParams.get("product");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/productDetails');
                setProducts(response.data.productsDetails);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response1 = await axios.get('http://localhost:7000/productImages');
                setProducts1(response1.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData1();
    }, []);

    if (!products || !products1) {
        return <div>Loading...</div>;
    }

    const matchingService = products.find((item) => item.productUrl === type);

    if (!matchingService) {
        return <div>404 - Product not found</div>;
    }

    const productImages = products1.data.map((image) => ({
        src: image.productSmallImage,
        proImgOption: image.productBigImage
    }));

    const productListItems = productImages.map((productItem, index) => (
        <li key={index} className="listImageStyle" onClick={() => handleShow(index)}>
            <Image src={productItem.src} rounded className="img-fluid py-3" style={{ cursor: "pointer" }} alt='products'/>
        </li>
    ));

    const handleShow = (index) => {
        setSelectedImageIndex(index);
        setIsOpen(true);
    };

    return (
        <>
            <Container className="d-block d-sm-none">
                <Row>
                    <Col className="pt-3" md={5}>
                        <h4>{matchingService.productName}</h4>
                        <Image src={matchingService.productBannerImage} className="img-fluid pb-3" alt={matchingService.productUrl} />
                    </Col>
                    <Col md={7}>
                        <p style={{ textAlign: "left" }}>{matchingService.description}</p>
                    </Col>
                </Row>
            </Container>

            <Container className="d-none d-sm-block pb-2">
                <Row>
                    <Col className="pt-3" md={5}>
                        <h4>{matchingService.productName}</h4>
                        <p style={{ textAlign: "left" }}>{matchingService.description}</p>
                    </Col>
                    <Col md={7} className='pt-3'>
                        <Image src={matchingService.productBannerImage} className="img-fluid" alt={matchingService.productUrl} />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', marginBottom: '5px' }}>
                <Container>
                    <Row>
                        <Col className='px-0'>
                            {matchingService.length > 0 && (
                                <HorizontalTabs
                                    tabList={matchingService.productName}
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
                        <ul className="ps-0 productImgStyle" style={{ display: "grid", gridAutoRows: "auto" }}>
                            {productListItems}
                        </ul>

                        <SlideshowLightbox
                            images={productImages}
                            showThumbnails={true}
                            showSlideshowIcon={false}
                            open={isOpen}
                            lightboxIdentifier="lbox1"
                            // onClose={() => setIsOpen(false)}
                            // startingSlideIndex={selectedImageIndex}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
