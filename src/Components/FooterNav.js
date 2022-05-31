import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function FooterNav(){
    return (
        <Container>
        <Navbar className="dark" expand="lg">

            <Navbar.Brand href="#home">
                <img src="img/logo.svg" className="d-inline-block align-top" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" style={{ maxHeight: '100px' }}>
                <Nav.Link href="#action1">Whitepaper</Nav.Link>
                <Nav.Link href="#action2">Audits</Nav.Link>
                <Nav.Link href="#action3">AVS on Uniswap</Nav.Link>
                <Nav.Link href="#action3"><Button className="nav-btn" variant="outline-success">Launch Pool</Button></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Navbar className="dark2" expand="lg">

        <Navbar.Brand href="#home">
            <p className="copyright">© 2022 Algovest</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto" style={{ maxHeight: '100px' }}>
            <Nav.Link href="#action1"><img src="img/social/a1.svg"></img></Nav.Link>
            <Nav.Link href="#action1"><img src="img/social/a2.svg"></img></Nav.Link>
            <Nav.Link href="#action1"><img src="img/social/a3.svg"></img></Nav.Link>
            <Nav.Link href="#action1"><img src="img/social/a4.svg"></img></Nav.Link>
            <Nav.Link href="#action1"><img src="img/social/a5.svg"></img></Nav.Link>
            <Nav.Link href="#action1"><img src="img/social/a6.svg"></img></Nav.Link>
            <Nav.Link href="#action1"><img src="img/social/a7.svg"></img></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>

    );
}

export default FooterNav;