import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Navigation(){
    return (
        <Navbar className="dark" expand="lg">
        <Container>

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
        </Container>
        </Navbar>
    );
}

export default Navigation;