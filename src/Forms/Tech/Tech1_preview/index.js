import React,{useState} from 'react';
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import NavbarClient from '../../../NavbarClient/index';
import Navbar from '../../../Navbar/index';
import MyModal from '../../../MyModal/MyModal';

import './Tech1_preview.css';
import backgroundImage from '../../images/back.webp';

import AboutImg from './images/about.png';
import CustomImg from './images/custom.webp';
import EcommerceImg from './images/ecommerce.jpg';
import EducationImg from './images/education.jpg';
import FinanceImg from './images/finance.jpg';
import HealthImg from './images/health.jpg';
import TechImg from './images/tech.jpg';

import axios from '../../../axios';

import { Image, Button, Container, Carousel, Row, Col, Card, Form, ButtonGroup } from 'react-bootstrap';



const Tech1_preview = (props) => {
  const data = useSelector(state => state.formData.formData);
  console.log("--data",data);
  const [_data,SetDData] = useState(data);
  const [modalShow, setModalShow] = React.useState(false);
  const [ userID, setUserID ]  = useState(props.auth.user.data._id);

  let saveHandler = () => {
    let siteData = {..._data};
    siteData.user = userID;
    axios.post("/website/save-site/template1/false", siteData);
    setModalShow(true);
  }

  let continueHandler = () => {
    props.history.push("/");
  }

  return (
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
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 CarousalImg"
              src={_data.carousel_img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{_data.website_name}</h3>
              <p>{_data.website_description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 CarousalImg"
              src={_data.carousel_img2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>{_data.website_name}</h3>
              <p>{_data.website_description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='Section' style={{backgroundColor: _data.sitePrimaryColour}}>
            <h1>{_data.section1_heading}</h1>
            <br />
            <p>{_data.section1_content}</p>
            <Image src={AboutImg} fluid />
            <br /><br />
            {/* <Button variant="dark">Read More</Button> */}
        </div>

        <div className='Section' style={{backgroundColor: _data.siteSecondaryColour}}>
          <br/> <br />
          <h1>{_data.section2_heading}</h1>
          <br />
          <p>{_data.section2_content}</p>
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

        <div className='Section' style={{backgroundColor: _data.sitePrimaryColour}}>
          <br/> <br />
          <h1>{_data.section3_heading}</h1>
          <br />
          <Container>
            <Row>
              <Col style={{marginBottom: '5px'}} lg={5} md={6} sm={12}>
                <Card style={{height: '100%'}}>
                  <Card.Img variant="top" src={_data.founder_image} />
                  <Card.Body>
                    <Card.Title>{_data.founder_name}</Card.Title>
                    <Card.Text>
                    {
                      _data.founder_description
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

        <div className="Footer" style={{backgroundColor: _data.siteSecondaryColour}}>
          <Container>
            <Row>
              <Col>
                <h1 style={{fontSize: '2rem'}}>{_data.slogan}</h1>
              </Col>
            </Row>
          </Container>
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
 
export default connect(mapStateToProps)(Tech1_preview)
