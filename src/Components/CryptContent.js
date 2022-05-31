import React from "react";
import {Row, Col, Container} from "react-bootstrap";

function CryptContent(){
    return(
        <Container fluid>
            <Row>
                <Col sm><p className="crypt">Crypto Yield</p></Col>
                <Col sm><p className="crypt1">60% on USDC</p></Col>
                <Col sm><p className="crypt2">Passive Income</p></Col>
                <Col sm><p className="crypt3">Crypto Yield</p></Col>
            </Row>
        </Container>
    );
}

export default CryptContent;