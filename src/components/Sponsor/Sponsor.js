import './Sponsor.css'; 
import { Col, Container, Row } from "react-bootstrap";

export default function Sponsor(){


    return(
        <Container className="Sponsor">
            <div className="sponsorText">
                <h1 id="partner">Sponsors and Partners</h1>
                <p>Check out our wonderful Sponsors and Partners, without them this event would not be possible!</p>
            </div>
            <Row className='sponsorContent'>
                <div className="header"><h2><span>Main Sponsors</span></h2></div>
                <Col sm={12} md={6} lg={6} className="aSponsor">
                    <a href="https://paragon.co.im" target="_blank" rel="noreferrer"><div className="aSponsorInner"><img alt="Paragon Recruitment" src="images/partners/paragon.png" /></div></a>
                </Col>
                <Col sm={12} md={6} lg={6} className="aSponsor">
                <a href="https://pdms.com" target="_blank" rel="noreferrer"><div className="aSponsorInner"><img alt="PDMS" src="images/partners/pdms.png" /></div></a>
                </Col>

                <div className="header"><h2><span>Secondary Partners</span></h2></div>
                <Col sm={12} md={4} lg={4} className="aSponsor">
                <a href="https://github.com" target="_blank" rel="noreferrer"><div className="aSponsorInner"><img alt="GitHub" src="images/partners/github.png" /></div></a>
                </Col>
                <Col sm={12} md={4} lg={4} className="aSponsor">
                <a href="https://ucm.ac.im" target="_blank" rel="noreferrer"><div className="aSponsorInner"><img alt="UCM" src="images/partners/ucm.png" /></div></a>
                </Col>
                <Col sm={12} md={4} lg={4} className="aSponsor">
                    <div className="aSponsorInner">This could be you!</div>
                </Col>
                
                <div className="header"><h2><span>Powered By</span></h2></div>
                <Col sm={12} md={12} lg={12} className="aSponsor">
                <a href="https://codeclub.im" target="_blank" rel="noreferrer"><div className="aSponsorInner"><img alt="Code Club" src="images/partners/codeclub.png" /></div></a>
                </Col>
                
            </Row>
        </Container>
    )

}