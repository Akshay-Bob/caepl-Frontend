import React from 'react'
import {SlideshowLightbox} from 'lightbox.js-react'
import { useLocation } from 'react-router-dom';
import { proData } from "../../Data/proData";
import { Container, Row, Col, Image } from "react-bootstrap";
import Breadcomes from "../Breadcomes";
import HorizontalTabs from '../HorizontalTabs/HorizontalTabs';


export default function Category() {
  
    const location = useLocation();
    const useParams = new URLSearchParams(location.search);
    const type = useParams.get("product");
    
    const matchingService = proData.find((item) => item.url === type);
    if (!matchingService || !matchingService.imgDatas || matchingService.imgDatas.length === 0) {
      return <div>Service not found</div>; 
    }
    const productListItems = matchingService.imgDatas ? matchingService.imgDatas.map((productItem, index) => (
        <li key={index} className="listImageStyle">
          <Image src={productItem.productSm} rounded className="img-fluid py-3" style={{ cursor: "pointer" }} />
        </li>
      ))
      : [];

    const imageViews = matchingService.imgDatas ? matchingService.imgDatas.map((item) => item.isMultiple): [];
    const selectedProduct = matchingService.imgDatas;

    // const productTabList = proData.map(i => i.category === matchingService.category ? i.url : []);

    const productTabList = proData.map(i => i.category === matchingService.category ? i.alt : null).filter(Boolean);

    console.log(productTabList, 'productTabList')
      
    return (
    <>

            <Container className="d-block d-sm-none">
                <Row>
                    <Col className="pt-3" md={5}>
                        <Breadcomes cat={matchingService.category} address={matchingService.alt} />
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
            
            <Container fluid style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', marginBottom: '5px'}}>
                <Container>
                    <Row>
                        <Col>
                            {productTabList.length > 0 && <HorizontalTabs tabList={productTabList} />}
                        </Col>
                    </Row>
                </Container>
            </Container>

            <HorizontalTabs tabList = {productTabList}/>

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
    </>

  )
}
