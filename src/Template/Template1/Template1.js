import React from 'react';
import NavbarClient from '../../NavbarClient/index';

import './Template1.css';

import AboutImg from './images/about.png';
import CustomImg from './images/custom.webp';
import EcommerceImg from './images/ecommerce.jpg';
import EducationImg from './images/education.jpg';
import FinanceImg from './images/finance.jpg';
import HealthImg from './images/health.jpg';
import TechImg from './images/tech.jpg';

import { Image, Button, Container, Carousel, Row, Col, Card, Form, ButtonGroup } from 'react-bootstrap';

const Template1 = (props) => {
    return(
        <div>
            <NavbarClient 
            primaryColor={props.data.navPrimaryColor} 
            secondaryColor={props.data.navSecondaryColor} 
            name={props.data.website_name}
            navTextColour={props.data.navTextColour} 
            />
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 CarousalImg"
                src={props.data.carousel_img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>{props.data.website_name}</h3>
                <p>{props.data.website_description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 CarousalImg"
                src={props.data.carousel_img2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>{props.data.website_name}</h3>
                <p>{props.data.website_description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <div className='Section' style={{backgroundColor: props.data.sitePrimaryColour}}>
                <h1>{props.data.section1_heading}</h1>
                <br />
                <p>{props.data.section1_content}</p>
                <Image src={AboutImg} fluid />
                <br /><br />
                {/* <Button variant="dark">Read More</Button> */}
            </div>

            <div className='Section' style={{backgroundColor: props.data.siteSecondaryColour}}>
            <br/> <br />
            <h1>{props.data.section2_heading}</h1>
            <br />
            <p>{props.data.section2_content}</p>
            <Container>
                <Row>
                <Col lg={4} sm={6}>
                    <img className='GridImg' src={TechImg} fluid />
                    <div className='ImageText'><Button variant="light">Technology</Button></div>
                </Col>
                <Col lg={4} sm={6}>
                    <img className='GridImg' src={EcommerceImg} fluid />
                    <div className='ImageText'><Button variant="light">E-Commerce</Button></div>
                </Col>
                <Col lg={4} sm={6}>
                    <img className='GridImg' src={FinanceImg} fluid />
                    <div className='ImageText'><Button variant="light">Finance</Button></div>
                </Col>
                <Col lg={4} sm={6}>
                    <img className='GridImg' src={HealthImg} fluid />
                    <div className='ImageText'><Button variant="light">Health</Button></div>
                </Col>
                <Col lg={4} sm={6}>
                    <img className='GridImg' src={EducationImg} fluid />
                    <div className='ImageText'><Button variant="light">Education</Button></div>
                </Col>
                <Col lg={4} sm={6}>
                    <img className='GridImg' src={CustomImg} fluid />
                    <div className='ImageText'><Button variant="light">Custom</Button></div>
                </Col>
                </Row>
            </Container>
            </div>

            <div className='Section' style={{backgroundColor: props.data.sitePrimaryColour}}>
            <br/> <br />
            <h1>{props.data.section3_heading}</h1>
            <br />
            <Container>
                <Row>
                <Col style={{marginBottom: '5px'}} lg={5} md={6} sm={12}>
                    <Card style={{height: '100%'}}>
                    <Card.Img variant="top" src={props.data.founder_image} />
                    <Card.Body>
                        <Card.Title>{props.data.founder_name}</Card.Title>
                        <Card.Text>
                        {
                        props.data.founder_description
                        }
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <Card style={{height: '100%'}}>
                    <Card.Body>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <h1>Contact Us</h1>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
            </div>

            <div className="Footer" style={{backgroundColor: props.data.siteSecondaryColour}}>
            <Container>
                <Row>
                <Col>
                    <h1 style={{fontSize: '2rem'}}>{props.data.slogan}</h1>
                </Col>
                </Row>
            </Container>
            </div>

            <div className="Copyright">
            <h4>Copyright, All Right Reserved By {props.data.website_name}</h4>
            </div>
        </div>
    )
}

export default Template1;