import './Sponsor.css'; 
import { Col, Container, Row } from "react-bootstrap";

export default function About(){


    return(
        <Container className="Sponsor" id="sponsor">
            <div className="sponsorText">
                <h1>Sponsor Us?</h1>
                <p>Want to sponsor this event? Check out our sponsorship opportunities in our <a href="./Sponsorship Prospectus.pdf" target="_blank" rel="noreferrer">Sponsorship Prospectus</a></p>
            </div>
            <Row className='sponsorContent'>
                {/* platinum x2 = 15000 */}
                <h2>Platinum Sponsors</h2>
                <Col sm={12} md={6} lg={6} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={12} md={6} lg={6} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <h2>Gold Sponsors</h2>
                {/* gold x3 = 7500 */}
                <Col sm={12} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={12} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={12} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <h3>Silver Sponsors</h3>
                {/* silver x6 = 6000 */}
                <Col sm={6} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <h3>Bronze Sponsors</h3>
                {/* bronze x8 = 4000 */}
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                <Col sm={6} md={3} lg={3} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>


                {/* total ~ 15000 + 7500 + 6000 + 4000 = 32500 */}
            </Row>
        </Container>
    )

}