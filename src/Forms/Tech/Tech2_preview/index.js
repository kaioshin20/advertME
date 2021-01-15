import React,{useState} from 'react';
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import NavbarClient from '../../../NavbarClient/index';
import Navbar from '../../../Navbar/index';

import './Tech2_preview.css';
import backgroundImage from '../../images/back.webp';

import cardimg from './images/cardimg.jpeg';
import MyModal from '../../../MyModal/MyModal';

import axios from '../../../axios';

import { ButtonGroup, Carousel, FormControl, InputGroup, Card, Col, Row, Container, Button, Image } from 'react-bootstrap';

const Tech2_preview = (props) => {
    const data = useSelector(state => state.formData.formData);
    const [_data,SetDData] = useState(data);
    console.log("--data",data);
    const [modalShow, setModalShow] = React.useState(false);
    const [ userID, setUserID ]  = useState(props.auth.user.data._id);

    let saveHandler = () => {
        let siteData = {..._data};
        siteData.user = userID;
        axios.post("/website/save-site/template2/false", siteData);
        setModalShow(true);
    }

    let continueHandler = () => {
        props.history.push("/");
    }

    return(
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            minHeight: '100vh'}}>
            <Navbar />
            <ButtonGroup aria-label="Basic example" style={{margin: '0px auto', padding: '10px'}}>
                <Button variant="success" onClick={saveHandler}>Save</Button>
                <Button variant="danger" onClick={continueHandler}>Continue(Remember to save your changes)</Button>
            </ButtonGroup>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="iframediv">
                <NavbarClient 
                    primaryColor={_data.navPrimaryColor} 
                    secondaryColor={_data.navSecondaryColor}
                    name={_data.website_name}
                    navTextColour={_data.navTextColour} 
                />
                <div className="section" style={{backgroundColor: 'white'}}>
                    <Row>
                        <Col md="12" lg="6">
                            <Image src={_data.section1_image} fluid />
                        </Col>
                        <Col md="12" lg="6">
                            <h1>{_data.section1_heading}</h1>
                            <p>{_data.section1_content}</p>
                        </Col>
                    </Row>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={_data.carousel_img1}
                            alt="First slide"
                            style={{
                                width: '50%'
                            }}
                        />
                        <Carousel.Caption>
                            <h3>{_data.website_name}</h3>
                            <p>{_data.website_description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={_data.carousel_img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>{_data.website_name}</h3>
                            <p>{_data.website_description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="section" style={{backgroundColor: 'white'}}>
                    <Row>
                        <Col md="12" lg="6">
                            <h1>{_data.section2_heading}</h1>
                            <p>{_data.section2_content}</p>
                        </Col>
                        <Col md="12" lg="6">
                            <Image src={_data.section2_image} fluid />
                        </Col>
                    </Row>
                </div>

                <div className="section" style={{height: 'max-content', backgroundColor: _data.siteThemeColour, color: 'white'}}>
                    <h1>{_data.slogan}</h1>
                </div>

                <div className="section" style={{padding: '25px', backgroundColor: 'white'}}>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cardimg} />
                                <Card.Body>
                                    <Card.Title>{_data.cardH1}</Card.Title>
                                    <Card.Text>{_data.cardC1}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cardimg} />
                                <Card.Body>
                                    <Card.Title>{_data.cardH2}</Card.Title>
                                    <Card.Text>{_data.cardC2}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cardimg} />
                                <Card.Body>
                                    <Card.Title>{_data.cardH3}</Card.Title>
                                    <Card.Text>{_data.cardC3}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cardimg} />
                                <Card.Body>
                                    <Card.Title>{_data.cardH4}</Card.Title>
                                    <Card.Text>{_data.cardC4}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                
                <div className="section" style={{padding: '25px', backgroundColor: _data.siteThemeColour}}>

                </div>

                <div className="Copyright">
                    <h4>Copyright, All Right Reserved By {_data.website_name}</h4>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.formData,
    auth: state.auth
});

export default connect(mapStateToProps)(Tech2_preview);