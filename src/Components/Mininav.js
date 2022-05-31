import React from "react";
import {Container, Button} from "react-bootstrap";

function Mininav(){
    return(
        <Container>
            <div className="mininav">
                <p className="para">Farm GRAIL <span className="img"></span></p>
                <p className="para">Stake <span className="img"></span></p>
                <p className="para">Earn <span className="img"></span></p>
                <p className="para">Governance<span className="box">Coming soon!</span></p>
            </div>
        </Container>
    );
}

export default Mininav