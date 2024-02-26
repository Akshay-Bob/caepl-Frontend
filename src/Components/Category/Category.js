import React, { useEffect, useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { useLocation } from 'react-router-dom';
import { proData } from "../../Data/proData";
import { Container, Row, Col, Image } from "react-bootstrap";
import HorizontalTabs from '../HorizontalTabs/HorizontalTabs';
import '../../Responsive.css'

export default function Category() {
    let [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const location = useLocation();
    const useParams = new URLSearchParams(location.search);
    const type = useParams.get("product");

    useEffect(() => {
        if (productTabList && productTabList.length !== 0) {
            let idx = productTabList?.indexOf(type);
            setSelectedIndex(idx);
        }
    }, [type])

    const matchingService = proData.find((item) => item.url === type);
    if (!matchingService || !matchingService.imgDatas || matchingService.imgDatas.length === 0) {
        return <div>Service not found</div>;
    }

    const productTabList = proData.map(i => i.category === matchingService.category ? i.url : null).filter(Boolean);

    const productListItems = matchingService.imgDatas ? matchingService.imgDatas.map((productItem, index) => (
        <li key={index} className="listImageStyle" onClick={() => handleShow(index, productItem.productSm)}>
            <Image src={productItem.productSm} rounded className="img-fluid py-3" style={{ cursor: "pointer" }} alt='products'/>
        </li>
    )) : [];

    const multipleItems = matchingService.imgDatas.filter(item => item.isMultiple === true);
    const singleItems = matchingService.imgDatas.filter(item => item.isMultiple === false || item.isMultiple === undefined);

    const proImgMultiple = multipleItems.map(item => item.imageView.map(img => ({ src: img.proImg, proImgOption: img.proImgOption, smImage: item.productSm }))).flat();

    const productLgSingle = singleItems.map(item => ({ src: item.productLg, proImgOption: item.productSm, smImage: item.productSm })).filter(Boolean);

    const images = [...proImgMultiple, ...productLgSingle];

    const handleShow = (index, smImage) => {
        const selectedImageData = images.findIndex((img) => img.smImage === smImage);
        setSelectedImageIndex(selectedImageData);
        setIsOpen(true);
    };

    return (
        <>
            <Container className="d-block d-sm-none">
                <Row>
                    <Col className="pt-3" md={5}>
                        <h4>{matchingService.alt}</h4>
                        <Image src={matchingService.bannerImg} className="img-fluid pb-3" alt={matchingService.alt}/>
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
                    <Col md={7} className='pt-3'>
                        <Image src={matchingService.bannerImg} className="img-fluid" alt={matchingService.alt}/>
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
                        <ul className="ps-0 productImgStyle" style={{ display: "grid", gridAutoRows: "auto" }}>
                            {productListItems}
                        </ul>

                        <SlideshowLightbox
                            images={images}
                            showThumbnails={true}
                            showSlideshowIcon={false}
                            open={isOpen}
                            lightboxIdentifier="lbox1"
                            onClose={() => setIsOpen(false)}
                            startingSlideIndex={selectedImageIndex}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}