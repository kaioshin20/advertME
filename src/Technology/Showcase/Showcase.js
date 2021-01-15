import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../Navbar/index';

import { Card, Row, Col, Button, Image } from 'react-bootstrap';

import classes from './Showcase.module.css';

import templatePreview3 from '../images/templatePreview3.png';
import background from '../images/back.webp';

const Showcase = () => {
    // let [link, setLink] = useState(null);
       const [Image2,setImage] = useState(templatePreview3)
       const [tech_type,setTech] = useState("tech3_form")

    // let previewColumn = null;

    return (
        <div>
            <Navbar />
            <Row className={classes.Row} style={{backgroundImage: `url(${background})`}}>
                <Col md="12" lg="6" style={{borderRight: '1px solid #ccc'}}>
                    <Card className={classes.Design}>
                    
                            <Card.Body>
                                <Button onClick = {()=> {
                                    setTech("tech3_form")
                                    setImage(templatePreview3)}} variant="light"><h3>Design1</h3></Button>
                            </Card.Body>
                        
                    </Card>
                </Col>
                <Col md="12" lg="6">
                    <Card  className={classes.Card}>
                    <Link to={`/showcase/${tech_type}`}>
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

export default Showcase;
