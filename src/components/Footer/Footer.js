import './Footer.css'; 
import { Container } from "react-bootstrap";

export default function Footer(){
    return(
        <Container className="Footer">
            <p>&copy; hackMan 2023 • <a href="https://codeclub.im">Code Club</a></p>
        </Container>
    )
}