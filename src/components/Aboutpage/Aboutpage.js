import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Hii there! I'm Ayush a creative individual with a passion for design. I love to think outside the box and come up with new and innovative ideas. I'm also a highly skilled technician who can bring my designs to life.
                I'm always looking for new challenges and opportunities to learn and grow. I'm also a team player who is always willing to help others.
                If you're looking for someone who can bring your vision to life, I'm the person for you. I'm confident that I can create something that you'll love
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Figma</li>
                                    <li>React-Bootsrap</li>
                                    <li>Flutter</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage