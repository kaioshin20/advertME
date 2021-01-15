import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../Navbar/index';

import { Card, Row, Col, Button, Image } from 'react-bootstrap';

import classes from './Technology.module.css';

import templatePreview1 from '../images/templatePreview1.png';
import templatePreview2 from '../images/templatePreview2.png';
import background from '../images/back.webp';

const Technology = () => {
    const [Image2,setImage] = useState(templatePreview1)
    const [tech_type,setTech] = useState("tech1_form")

    return (
        <div>
            <Navbar />
            <Row className={classes.Row} style={{backgroundImage: `url(${background})`}}>
                <Col md="12" lg="6" style={{borderRight: '1px solid #ccc'}}>
                    <Card className={classes.Design}>
                    
                            <Card.Body>
                                <Button onClick = {()=> {
                                    setTech("tech1_form")
                                    setImage(templatePreview1)}} variant="light"><h3>Design1</h3></Button>
                            </Card.Body>
                        
                    </Card>
                    <Card className={classes.Design}>
                        
                            <Card.Body>
                                <Button onClick = {()=> {
                                    setTech("tech2_form")
                                    setImage(templatePreview2)}} variant="light"><h3>Design2</h3></Button>
                            </Card.Body>
                    
                    </Card>
                </Col>
                <Col md="12" lg="6">
                    <Card  className={classes.Card}>
                    <Link to={`/technology/${tech_type}`}>
                    <Button style={{margin: '20px'}} variant="primary" >Create</Button>

                    </Link>
                        <Card.Body style={{height: '100%', borderTop: '1px solid #ccc'}}>
                            <Image src={Image2} fluid />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Technology
