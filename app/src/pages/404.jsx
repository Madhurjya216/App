import React from "react";
import { Container, Row, Col } from "reactstrap";

const PageNotFound = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col lg='6' md='3' className='text-center w-100' >
                        <img className="w-50" src='https://i.ibb.co/TwpYK52/404-error-with-portals-rafiki.png' alt='Error'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PageNotFound;