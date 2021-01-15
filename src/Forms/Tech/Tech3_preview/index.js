import React,{useState} from 'react';
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import NavbarClient from '../../../NavbarClient/index';
import Navbar from '../../../Navbar/index';

import backgroundImage from '../../images/back.webp';
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
        axios.post("/website/save-site/template3/false", siteData);
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
                <div style={{backgroundColor: _data.backgroundColour, padding: '50px 70px'}}>
                    <center>
                        <h1>{_data.heading}</h1>
                        <p>{_data.subHeading}</p>
                    </center>
                    <hr />
                    <div style={{padding: '20px 25px'}}>
                        <Row style={{marginBottom: '10px'}}>
                            <Col md="6">
                                <Image src={_data.img1} fluid />
                            </Col>
                            <Col md="6">
                                <Image src={_data.img2} fluid />
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '10px'}}>
                            <Col md="6">
                                <Image src={_data.img3} fluid />
                            </Col>
                            <Col md="6">
                                <Image src={_data.img4} fluid />
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '10px'}}>
                            <Col md="6">
                                <Image src={_data.img5} fluid />
                            </Col>
                            <Col md="6">
                                <Image src={_data.img6} fluid />
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '10px'}}>
                            <Col md="6">
                                <Image src={_data.img7} fluid />
                            </Col>
                            <Col md="6">
                                <Image src={_data.img8} fluid />
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '10px'}}>
                            <Col md="6">
                                <Image src={_data.img9} fluid />
                            </Col>
                            <Col md="6">
                                <Image src={_data.img10} fluid />
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '10px'}}>
                            <Col md="6">
                                <Image src={_data.img11} fluid />
                            </Col>
                            <Col md="6">
                                <Image src={_data.img12} fluid />
                            </Col>
                        </Row>
                    </div>
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