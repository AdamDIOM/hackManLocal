import './Header.css'; 
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header(){


    return(
        <Container className="Header">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className="HeaderNav">
                    <Navbar.Brand href="#"><img src="images/logo-dark.png" alt="hackMan Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className="navOption" href="https://forms.office.com/e/Ghi89vKy61" target="_blank">Register</Nav.Link>
                            <Nav.Link className="navOption" href="#about">About</Nav.Link>
                            <Nav.Link className="navOption" href="#faq">FAQ</Nav.Link>
                            {/* <Nav.Link className="navOption" href="#sponsor">Sponsor</Nav.Link> */}
                            <Nav.Link className="navOption" href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )

}