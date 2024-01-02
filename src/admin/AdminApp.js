import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

export default function AdminApp() {
  return (
    <>
    <Container fluid>
        <Row>
            <Col md={3} style={{background:'#000'}} className='py-5 ps-5'>
                <SideBar/>
            </Col>
            <Col md={9} className='py-5 px-5'>
                <Outlet/>
            </Col>
        </Row>
    </Container>

    </>
  )
}
