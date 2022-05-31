import React from "react";
import { Row, Col, Container} from "react-bootstrap";

function VestContent(){
    return(
        <Container>
            <div className="content_box">
                <Container className="content_container">
                    <Row>
                        <Col sm={8}>
                            <div className="final_content">
                                <h3 className="content_header">Better Passive Income</h3>
                                <p className="content_para">You earn consistent and attractive yield - 60% APR on USDC, paid in USDC and claimable weekly - backed by our advanced modular algorithm in TradFi markets.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="final_content">
                                <span className="content_img"></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="content_boxD">
                <Container className="content_container">
                    <Row>
                        <Col sm={8}>
                            <div className="final_content">
                                <h3 className="content_header">Decentralized Access</h3>
                                <p className="content_para">We designed our capital protection policy to increase the value of AVS token by using 70% of the ecosystem portfolio algorithmic trading profits for strategic AVS buybacks from the open market to provide upward price pressure and protect holders. Verify AVS token buybacks here. While 80% of AVS token buybacks are utilized as staking rewards, we decrease token supply by burning the remaining 20% of AVS token buybacks to create scarcity and long term growth for AVS token holders.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="final_content">
                                <span className="content_img1"></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="content_box_protect">
                <Container className="content_container">
                    <Row>
                        <Col sm={8}>
                            <div className="final_content">
                                <h3 className="content_header">Protect, Reward,  and Burn</h3>
                                <p className="content_para_protect">You earn consistent and attractive yield - 60% APR on USDC, paid in USDC and claimable weekly - backed by our advanced modular algorithm in TradFi markets.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="final_content">
                                <span className="content_img2"></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="content_box_community">
                <Container className="content_container">
                    <Row>
                        <Col sm={8}>
                            <div className="final_content">
                                <h3 className="content_header">Community-driven Ecosystem</h3>
                                <p className="content_para_community">AlgoVest offers yield farming opportunity for liquidity providers to earn GRAIL Governance Token. GRAIL is the mechanism that the community can use to shape the direction of AlgoVest by proposing or voting on changes to steer the AlgoVest ecosystem.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="final_content">
                                <span className="content_img3"></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default VestContent;