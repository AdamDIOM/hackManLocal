import './Prizes.css'; 
import { Col, Container, Row } from "react-bootstrap";

export default function Prizes(){


    return(
        <Container className="Prizes">
            <Row className="aboutContent">
                <Col md={6} sm={12}>
                    <h1 id="about">Prizes & More</h1>
                    <h2>Did someone say freebies?</h2>
                    <p>Yes! Not only can you gain invaluable experience from taking part in hackMan, but we have partnered with GitHub to provide you access to the GitHub Student Developer Pack. You can sign up here: <a href="https://gh.io/hackman23" target="_blank" rel="noreferrer">https://gh.io/hackman23</a></p>
                    <h2>Main Prize</h2>
                    <p><span>Aiming to become the <i>first ever</i> hackMan Champions? We'll sweeten the deal with a Grand Cash Prize for the top team!</span></p>
                    <h2>Other Prizes</h2>
                    <Row>
                        <Col md={6} sm={12}><span>Amazon Vouchers</span></Col>
                        <Col md={6} sm={12}><span>GitHub T-shirt Store Vouchers</span></Col>
                    </Row>
                    <p></p>
                </Col>
                <Col md={6} sm={12}><img src="images/logo-dark.png" alt="hackMan logo" /></Col>
            </Row>
        </Container>
    )

}