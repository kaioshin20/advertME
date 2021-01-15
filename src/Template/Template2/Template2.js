import React from 'react';
import NavbarClient from '../../NavbarClient/index';

import './Template2.css';

import cardimg from './images/cardimg.jpeg';

import { Carousel, Card, Col, Row, Container, Button, Image } from 'react-bootstrap';

const Template2 = (props) => {
    return(
        <div>
            <NavbarClient 
                primaryColor={props.data.navPrimaryColor} 
                secondaryColor={props.data.navSecondaryColor}
                name={props.data.website_name}
                navTextColour={props.data.navTextColour} 
            />
            <div className="section" style={{backgroundColor: 'white'}}>
                <Row>
                    <Col md="12" lg="6">
                        <Image src={props.data.section1_image} fluid />
                    </Col>
                    <Col md="12" lg="6">
                        <h1>{props.data.section1_heading}</h1>
                        <p>{props.data.section1_content}</p>
                    </Col>
                </Row>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.data.carousel_img1}
                        alt="First slide"
                        style={{
                            width: '50%'
                        }}
                    />
                    <Carousel.Caption>
                        <h3>{props.data.website_name}</h3>
                        <p>{props.data.website_description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.data.carousel_img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>{props.data.website_name}</h3>
                        <p>{props.data.website_description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="section" style={{backgroundColor: 'white'}}>
                <Row>
                    <Col md="12" lg="6">
                        <h1>{props.data.section2_heading}</h1>
                        <p>{props.data.section2_content}</p>
                    </Col>
                    <Col md="12" lg="6">
                        <Image src={props.data.section2_image} fluid />
                    </Col>
                </Row>
            </div>

            <div className="section" style={{height: 'max-content', backgroundColor: props.data.siteThemeColour, color: 'white'}}>
                <h1>{props.data.slogan}</h1>
            </div>

            <div className="section" style={{padding: '25px', backgroundColor: 'white'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cardimg} />
                            <Card.Body>
                                <Card.Title>{props.data.cardH1}</Card.Title>
                                <Card.Text>{props.data.cardC1}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cardimg} />
                            <Card.Body>
                                <Card.Title>{props.data.cardH2}</Card.Title>
                                <Card.Text>{props.data.cardC2}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cardimg} />
                            <Card.Body>
                                <Card.Title>{props.data.cardH3}</Card.Title>
                                <Card.Text>{props.data.cardC3}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cardimg} />
                            <Card.Body>
                                <Card.Title>{props.data.cardH4}</Card.Title>
                                <Card.Text>{props.data.cardC4}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            
            <div className="section" style={{padding: '25px', backgroundColor: props.data.siteThemeColour}}>

            </div>

            <div className="Copyright">
                <h4>Copyright, All Right Reserved By {props.data.website_name}</h4>
            </div>
        </div>
    )
}

export default Template2;