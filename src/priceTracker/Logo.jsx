import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from '../images/logo.png'

function Logo() {

    return (
        <>
            <Container>
                <Row>
                    <Col md="12" className='text-center mt-5'>
                        <img src={logo} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Logo