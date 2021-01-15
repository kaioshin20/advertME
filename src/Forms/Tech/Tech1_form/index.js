import React, { Component } from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios';

import Navbar from '../../../Navbar/index';

import './tech1.css';
import backgroundImage from '../../images/back.webp';

import withStyles from '@material-ui/core/styles/withStyles'
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

import {sendDataToTemplate} from '../../../actions/formFillAction';

const styles = theme => ({
    rootAlert: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
	main: {
		width: '100%',
		display: 'block', 
		marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
	    marginTop: theme.spacing.unit * 15,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 1000,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		// marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    button: {
        margin: theme.spacing(1),
        align:'center'
    },
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	large:{
		width: theme.spacing(20),
		height: theme.spacing(20) 
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 2,
	},
});

class Tech1_form extends Component {
    constructor(){
        super()
        this.state = {
            navPrimaryColor: "",
            navSecondaryColor: "",
            website_name: "",
            website_description: "",
            founder_image:"",
            carousel_img1: "",
            carousel_img2: "",
            section1_heading: "",
            section1_content: "",
            section2_heading: "",
            section2_content: "",
            section3_heading: "",
            founder_name: "",
            founder_description: "",
            slogan: "",
            navTextColour: "",
            sitePrimaryColour: "",
            siteSecondaryColour: "",
            errors:""
        }
    }

    componentDidMount(){
        if(this.props.edit === "true"){
            axios.get(`/website/get-site/${this.props.id}`)
                .then(siteData => {
                    console.log("data i got", siteData);
                    this.setState({
                        navPrimaryColor: siteData.data.navPrimaryColor,
                        navSecondaryColor: siteData.data.navSecondaryColor,
                        website_name: siteData.data.website_name,
                        website_description: siteData.data.website_description,
                        founder_image: siteData.data.founder_image,
                        carousel_img1: siteData.data.carousel_img1,
                        carousel_img2: siteData.data.carousel_img2,
                        section1_heading: siteData.data.section1_heading,
                        section1_content: siteData.data.section1_content,
                        section2_heading: siteData.data.section2_heading,
                        section2_content: siteData.data.section2_content,
                        section3_heading: siteData.data.section3_heading,
                        founder_name: siteData.data.founder_name,
                        founder_description: siteData.data.founder_description,
                        slogan: siteData.data.slogan,
                        navTextColour: siteData.data.navTextColour,
                        sitePrimaryColour: siteData.data.sitePrimaryColour,
                        siteSecondaryColour: siteData.data.siteSecondaryColour
                    })
                })
                .catch(err => console.log(err))
        }
        console.log("data to be populated", this.state);
    }
    
    handleChange(e){
        this.setState({ [e.target.name]:e.target.value })
    }

    groupImageHandler(e,imageType) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                if(imageType === "founder_image"){
                    this.setState({founder_image:reader.result});
                    console.log("--thsi sitat",this.state);
                }

                if(imageType === "carousal1"){
                    this.setState({carousel_img1:reader.result});
                    console.log("--thsi sitat",this.state) 
            
                }
                if(imageType === "carousal2"){
                    this.setState({carousel_img2:reader.result});
                    console.log("--thsi sitat",this.state);
                }
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    handleSubmit(){
        const  {
            List, 
            navPrimaryColor,
            navSecondaryColor,
            website_name,
            website_description,
            carousel_img1,
            carousel_img2,
            founder_image,
            section1_heading,
            section1_content,
            section2_heading,
            section2_content,
            section3_heading,
            founder_name,
            founder_description,
            slogan,
            navTextColour,
            sitePrimaryColour,
            siteSecondaryColour
        } = this.state;

        if(
            navPrimaryColor.length === 0 ||
            navSecondaryColor.length === 0 ||
            website_name.length === 0 ||
            website_description.length === 0 ||
            carousel_img1.length === 0 ||
            founder_image.length === 0 ||
            carousel_img2.length === 0 ||
            section1_heading.length === 0 ||
            section1_content.length === 0 ||
            section2_heading.length === 0 ||
            section2_content.length === 0 ||
            section3_heading.length === 0 ||
            founder_name.length === 0 ||
            founder_description.length === 0 ||
            slogan.length === 0 ||
            navTextColour.length === 0 ||
            sitePrimaryColour.length === 0 ||
            siteSecondaryColour.length === 0
        ){
            this.setState({errors:'Cannot submit Incomplete form'})
            return;
        }

        console.log("submiteed data is",this.state);
        if(this.props.edit === "true"){
            let dataToSend = {
                ...this.state,
                siteID: this.props.id
            }
            axios.post("/website/save-site/template1/true", dataToSend)
                .then(res => {
                    alert("Site Saved Successfully!");
                    this.props.history.push("/profile");
                })
                .catch(err => alert(err));
        }
        else{
            this.props.sendDataToTemplate(this.state,this.props.history,'/technology/tech1_preview');    
        }
    }
    

    render() {

        const {
            navPrimaryColor,
            navSecondaryColor,
            website_name,
            website_description,
            carousel_img1,
            carousel_img2,
            founder_image,
            section1_heading,
            section1_content,
            section2_heading,
            section2_content,
            section3_heading,
            founder_name,
            founder_description,
            slogan,
            navTextColour,
            sitePrimaryColour,
            siteSecondaryColour
        } = this.state

        const {classes} = this.props
        return (
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: '100vh'}}>
                <Navbar />
                <main className={classes.main}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Fill the credentials to build your new webpage
                        </Typography>
                        <hr />
                        {this.state.errors !== ""   ? 
                    
                        <div className={classes.rootAlert}>
                            <Alert severity="error" onClose={() => {this.setState({errors:""})}}>{this.state.errors}</Alert>
                        </div>

                        : null}

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="sitePrimaryColour">Website's Primary Colour</InputLabel>
                                    <Input id="sitePrimaryColour" name="sitePrimaryColour" autoComplete="off" autoFocus onChange={(e)=> this.handleChange(e)} value={sitePrimaryColour} />
                                </FormControl>   
                            </Grid> 
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="siteSecondaryColour">Website's Secondary Colour</InputLabel>
                                    <Input id="siteSecondaryColour" name="siteSecondaryColour" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={siteSecondaryColour} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="navTextColour">Navbar's Text Colour</InputLabel>
                                    <Input id="navTextColour" name="navTextColour" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={navTextColour} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="navPrimaryColor">Navbar Primary Colour</InputLabel>
                                    <Input id="navPrimaryColor" name="navPrimaryColor" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={navPrimaryColor} />
                                </FormControl>     
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="navSecondaryColor">Navbar Secondary Color</InputLabel>
                                    <Input id="navSecondaryColor" name="navSecondaryColor" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={navSecondaryColor} />
                                </FormControl>     
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="website_name">Name of Website</InputLabel>
                                    <Input id="website_name" name="website_name" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={website_name} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="website_description">About Website</InputLabel>
                                    <Input id="website_description" name="website_description" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={website_description} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="carousel_img1">Carousal Image(First)</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={carousel_img1}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="carousel_img1"
                                    id="input1"
                                    onChange={(e) => this.groupImageHandler(e,"carousal1")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input1">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>


                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="carousel_img2">Carousal Image(Second)</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={carousel_img2}
                                    alt=""
                                    id="img"
                                    className="img"
                                />

                                <input
                                    type="file"
                                    accept="image/*"
                                    name="carousel_img2"
                                    id="input2"
                                    onChange={(e) => this.groupImageHandler(e,"carousal2")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input2">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="founder_image">Founder Image</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={founder_image}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="founder_image"
                                    id="input3"
                                    onChange={(e) => this.groupImageHandler(e,"founder_image")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input3">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="section1_heading">Section 1 Heading</InputLabel>
                                    <Input id="section1_heading" name="section1_heading" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={section1_heading} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="section1_content">Section 1 Content</InputLabel>
                                    <Input id="section1_content" name="section1_content" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={section1_content} />
                                </FormControl>     
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="section2_heading">Section 2 Heading</InputLabel>
                                    <Input id="section2_heading" name="section2_heading" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={section2_heading} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="section2_content">Section 2 Content</InputLabel>
                                    <Input id="section2_content" name="section2_content" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={section2_content} />
                                </FormControl>     
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="section3_heading">Section 3 Heading</InputLabel>
                                    <Input id="section3_heading" name="section3_heading" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={section3_heading} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="founder_name">Founder's Name</InputLabel>
                                    <Input id="founder_name" name="founder_name" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={founder_name} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="founder_description">About Founder</InputLabel>
                                    <Input id="founder_description" name="founder_description" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={founder_description} />
                                </FormControl>   
                            </Grid> 
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="slogan">Bottom Slogan</InputLabel>
                                    <Input id="slogan" name="slogan" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={slogan} />
                                </FormControl>   
                            </Grid>      
                        </Grid>

                        <hr/>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={()=> this.handleSubmit()}
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >Save</Button>
                    
                    </Paper>
                </main>
            </div>
        )
    }
}

export default connect(null,{sendDataToTemplate})(withRouter(withStyles(styles)(Tech1_form)));