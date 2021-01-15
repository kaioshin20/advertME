import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Navbar from '../Navbar/index';
import axios from '../axios';

import backgroundImage from './images/back.webp';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';

class Profile extends Component{
    state = {
        authData: this.props.auth.user.data,
        sites: []
    }

    deleteHandler = async(id) => {
        let templateName = await axios.get(`website/get-template-name/${id}`);
        if(templateName === "invalid")
            alert("Something isn't right");
        else{
            await axios.delete(`website/delete-site/${id}/${templateName.data}/${this.state.authData._id}`);
            //redirect not working
            // this.props.history.push("/profile");
        }
    }

    editHandler = async(id) => {
        let templateName = await axios.get(`website/get-template-name/${id}`);
        axios.get(`/website/edit/${id}/${templateName}`)
            .then((res) => {
                console.log(res);
                this.props.history.push(`/website/editform/${res.data._id}/${res.data.name}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async componentDidMount(){
        let sites = await axios.get(`/user/get-site-list/${this.state.authData._id}`);
        this.setState({sites: sites.data});
    }

    render(){
        return(
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: '100vh'}}>
                <Navbar />
                <Row style={{margin: '20px'}}>
                    <Col md={4}>
                        <center>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.state.authData.avatar} />
                                <Card.Body>
                                    <Card.Title>Your details</Card.Title>
                                    <Card.Text>
                                        See your credentials and all other details here. A list of deployed websites is also provided on the right pannel.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Email: {this.state.authData.email}</ListGroup.Item>
                                    <ListGroup.Item>Total Websites Deployed: {this.state.sites.length}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </center>
                    </Col>
                    <Col md={8}>
                        <center>
                            <h1>My Websites</h1>
                            <hr />
                            <ListGroup>
                                {this.state.sites.length ? this.state.sites.map((id) => {
                                    return (<ListGroup.Item>
                                                <a href={`http://localhost:3000/${id}`}>
                                                    http://localhost:3000/{id}
                                                </a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button onClick={() => this.editHandler(id)} variant="success">Edit</Button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button onClick={() => this.deleteHandler(id)} variant="danger">Delete</Button>
                                            </ListGroup.Item>)
                                }) :
                                <ListGroup.Item>No Websites created Yet !</ListGroup.Item>}
                            </ListGroup>
                        </center>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Profile));