import './About.css'; 
import { Col, Container, Row } from "react-bootstrap";

export default function About(){


    return(
        <Container className="About">
            <Row className="aboutContent">
                <Col md={6} sm={12}><img src="images/logo-light.png" alt="hackMan logo" /></Col>
                <Col md={6} sm={12}>
                    <h1 id="about">About</h1>
                    <h2>What is a Hackathon?</h2>
                    <p>What is a Hackathon? A hackathon is a period of time where <a href="https://www.webroot.com/us/en/resources/glossary/what-is-a-hacker#:~:text=A%20hacker%20is%20just%20a%20person%20who%20uses%20computer%20programming%20or%20technical%20skills%20to%20overcome%20a%20challenge%20or%20problem." target="_blank" rel="noreferrer">hackers</a> come together, either in teams or individually, to create a piece of software. During the event, hackers compete against each other by participating in challenges to create software to meet specific criteria or hackers may choose to just experiment and have fun to see what the world of coding can allow them to create. Teams have the ability to win prizes by creating the most effective response to the challenges or by having the top project overall.</p>
                    <h2>What is hackMan Local?</h2>
                    <p>hackMan Local is the Isle of Man's first ever hackathon, held in September 2023. We are looking to host hackers (competitors) from all across the island, competing to create the best piece of software in just one day.</p>
                    <h2>Where are we?</h2>
                    <p>Whilst our venue is currently not confirmed, hackMan Local 2023 will be held on the Isle of Man. We look forward to seeing you there!</p>
                </Col>
            </Row>
        </Container>
    )

}