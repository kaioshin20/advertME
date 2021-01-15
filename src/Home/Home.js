import React from 'react';
import {NavLink} from 'react-router-dom';

import Navbar from '../Navbar/index';

import Logo from './images/logo.png';
import backgroundImage from './images/back.webp';

import { Image, Button, Row, Col } from 'react-bootstrap';
  
const Home = () => {

    return(
        <div>
            <Navbar />
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: '100vh',
                padding: '50px 0px 50px 0px' 
            }}>
                

            <Row style={{margin: '25px'}}>
                <Col md={9} style={{backgroundColor: 'white', 
                                        width: 'max-content', 
                                        padding: '50px', 
                                        borderRadius: '25px', 
                                        boxShadow: '1px 2px 3px #ccc'}}>
                    <center>
                        <h1 style={{textAlign: 'left'}}>Publish And Expand</h1>
                        <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laboriosam debitis nobis voluptates voluptatum. Sed cum quod reprehenderit magnam quos! Sapiente eos hic odio at laudantium aperiam distinctio blanditiis minima?</p>
                        <br />
                        <h1 style={{fontSize: '5rem', textAlign: 'right'}}>Build ,Contribute and gain Knowledge and profits</h1>
                        <p style={{textAlign: 'right'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br />
                        <hr />
                        <br />
                        <h1 style={{textAlign: 'left'}}>Create your Brand</h1>
                        <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laboriosam debitis nobis voluptates voluptatum. Sed cum quod reprehenderit magnam quos! Sapiente eos hic odio at laudantium aperiam distinctio blanditiis minima?</p>
                        <Image src="https://drivenlandscapesfranchises.com/images/blog/hands-in.jpg" fluid roundedCircle />
                    </center>
                </Col>
                <Col md={3}>
                    <center>
                        <Image src={Logo} fluid />
                        <h1 style={{fontSize: '4rem'}}>a</h1>
                        <h1 style={{fontSize: '4rem'}}>d</h1>
                        <h1 style={{fontSize: '4rem'}}>v</h1>
                        <h1 style={{fontSize: '4rem'}}>e</h1>
                        <h1 style={{fontSize: '4rem'}}>r</h1>
                        <h1 style={{fontSize: '4rem'}}>t</h1>
                        <br />
                        <h1 style={{fontSize: '4rem'}}>M</h1>
                        <h1 style={{fontSize: '4rem'}}>E</h1>
                    </center>
                </Col>
            </Row>

            <br />

            <div style={{width: '100%', backgroundColor: '#048243', padding: '20px 50px'}}>
                <h1 style={{fontSize: '4rem', color: 'white'}}>What are you waiting for ? Get started with AdvertME and boost ahead.</h1>
                <NavLink to="/register"><Button to size="lg" variant="primary">Register Now</Button></NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/options"><Button to size="lg" variant="light">Start Creating</Button></NavLink>
            </div>

            



            </div>
        </div>
        
    )
}

export default Home;