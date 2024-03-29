import './Intro.css'; 
import { Container } from "react-bootstrap";
import React from 'react';

export default function Intro(){


    return(
            <Container className="Intro">
                <div className="imgBox"><div className="imgInner"><img src="images/logo-dark.png" alt="hackMan logo"/></div></div>
                <div className="postImgBox">
                    <span className='innerPIB'>
                        <h1>hackMan Local</h1>
                        <h2>Isle of Man</h2>
                        <h3>Coming Soon</h3>
                        <h3>The Isle of Man's First Ever Hackathon</h3>
                    </span>
                </div>
                <br />
            </Container>
    )

}