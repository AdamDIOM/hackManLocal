import './FAQ.css'; 
import { Container, Row, Col } from "react-bootstrap";

export default function FAQ(){

    return(
        <Container className="FAQ">
            <h1 id="faq">Frequently Asked Questions</h1>
            <Row className="faqContent">
                
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Who can attend hackMan?</p>
                        <p className="answer"><b>Anyone can attend hackMan</b><br />The event is open to any student on the Isle of Man. If you can get yourself to our venue, you're good to go!</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Do I have to be studying Computer Science or Computing?</p>
                        <p className="answer"><b>Nope</b><br />As mentioned before, anyone is welcome at hackMan Local, as long as you have a passion to create something, you're free to take part.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Can under 18s take part in hackMan Local?</p>
                        <p className="answer"><b>Yes</b><br />Any student on the Isle of Man, be it through schools, sixth form or UCM is welcome to take part.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Do I need a team before joining?</p>
                        <p className="answer"><b>It's up to you</b><br />If you don't have a team, there will be opportunities to meet new people during check-in. The maximum team size is 4 hackers. Alternatively, you can take part individually.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Can I start before arrival?</p>
                        <p className="answer"><b>Absolutely not</b><br />To make hackMan Local as fair and enjoyable as possible for all, hacking must not start until after the opening ceremony. You are, of course, welcome to come up with ideas and plans beforehand.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Can I join remotely?</p>
                        <p className="answer"><b>Not this time.</b><br />In order to create the best experience for all attendees, we wanted to keep it all in person so we can fully focus on the experience.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                   <div className="qaInner">
                        <p className="question">How much does hackMan Local cost?</p>
                        <p className="answer"><b>Just your travel</b><br />We aim to provide an all-inclusive event for hackers. From the moment you arrive at the venue, meals, snacks and much more will all be provided.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">What do I need to bring?</p>
                        <p className="answer"><b>The essentials</b><br />You will, of course, need a computer to code on. We recommend bringing a charger too.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Is there a Code of Conduct</p>
                        <p className="answer"><b>Yes</b><br />We follow Code Club's <a href="https://codeclub.im/about-us/#gr" rel="noreferrer" target="_blank">Golden Rules</a>. Put short, be respectful and willing to learn.</p>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={12} className="qa">
                    <div className="qaInner">
                        <h3 id="contact">If you have any more questions, feel free to get in touch via <a href="mailto:hi@hackman.im">hi@hackman.im</a></h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}