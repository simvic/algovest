import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";



function Barnner(){
    return(
        <Container>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/bg.png"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="header justify-content-center">A New Perspective to <br/>Algorithmic Trading Connecting <br/> CeFi and DeFi</h3>
                    <p className="paragraph">A capital protection and crypto investment yield generator powered by AI,<br/> providing 60% APR on USDC to everyone looking for passive income.</p>
                    <Button className="bannerBtn" size="lg" variant="success">Enter Pool</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Barnner;