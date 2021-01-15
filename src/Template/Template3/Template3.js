import React from 'react';
import NavbarClient from '../../NavbarClient/index';
import {Row, Col, Image} from 'react-bootstrap';

const Template3 = (props) => {
    return(
        <div>
            <NavbarClient
                primaryColor={props.data.navPrimaryColor} 
                secondaryColor={props.data.navSecondaryColor}
                name={props.data.website_name}
                navTextColour={props.data.navTextColour} 
            />
            <div style={{backgroundColor: props.data.backgroundColour, padding: '50px 70px'}}>
                <center>
                    <h1>{props.data.heading}</h1>
                    <p>{props.data.subHeading}</p>
                </center>
                <hr />
                <div style={{padding: '20px 25px'}}>
                    <Row style={{marginBottom: '10px'}}>
                        <Col md="6">
                            <Image src={props.data.img1} fluid />
                        </Col>
                        <Col md="6">
                            <Image src={props.data.img2} fluid />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '10px'}}>
                        <Col md="6">
                            <Image src={props.data.img3} fluid />
                        </Col>
                        <Col md="6">
                            <Image src={props.data.img4} fluid />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '10px'}}>
                        <Col md="6">
                            <Image src={props.data.img5} fluid />
                        </Col>
                        <Col md="6">
                            <Image src={props.data.img6} fluid />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '10px'}}>
                        <Col md="6">
                            <Image src={props.data.img7} fluid />
                        </Col>
                        <Col md="6">
                            <Image src={props.data.img8} fluid />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '10px'}}>
                        <Col md="6">
                            <Image src={props.data.img9} fluid />
                        </Col>
                        <Col md="6">
                            <Image src={props.data.img10} fluid />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '10px'}}>
                        <Col md="6">
                            <Image src={props.data.img11} fluid />
                        </Col>
                        <Col md="6">
                            <Image src={props.data.img12} fluid />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="Copyright">
                <h4>Copyright, All Right Reserved By {props.data.website_name}</h4>
            </div>
        </div>
    )
}

export default Template3;