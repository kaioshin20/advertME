import React, { Component } from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {sendDataToTemplate} from '../../../actions/formFillAction';
import axios from '../../../axios';

import Navbar from '../../../Navbar/index';

import withStyles from '@material-ui/core/styles/withStyles'
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

import backgroundImage from '../../images/back.webp';


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

class Tech2_form extends Component {
    constructor(){
        super()
        this.state = {
            navPrimaryColor: "",
            navSecondaryColor: "",
            navTextColour: "",
            website_name: "",
            website_description: "",
            carousel_img1: "",
            carousel_img2: "",
            section1_image: "",
            section2_image: "",
            section1_heading: "",
            section1_content: "",
            section2_heading: "",
            section2_content: "",
            cardH1: "",
            cardC1: "",
            cardH2: "",
            cardC2: "",
            cardH3: "",
            cardC3: "",
            cardH4: "",
            cardC4: "",
            slogan: "",
            siteThemeColour: "",
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
                        navTextColour: siteData.data.navTextColour,
                        website_name: siteData.data.website_name,
                        website_description: siteData.data.website_description,
                        carousel_img1: siteData.data.carousel_img1,
                        carousel_img2: siteData.data.carousel_img2,
                        section1_image: siteData.data.section1_image,
                        section2_image: siteData.data.section2_image,
                        section1_heading: siteData.data.section1_heading,
                        section1_content: siteData.data.section1_content,
                        section2_heading: siteData.data.section2_heading,
                        section2_content: siteData.data.section2_content,
                        cardH1: siteData.data.cardH1,
                        cardC1: siteData.data.cardC1,
                        cardH2: siteData.data.cardH2,
                        cardC2: siteData.data.cardC2,
                        cardH3: siteData.data.cardH3,
                        cardC3: siteData.data.cardC3,
                        cardH4: siteData.data.cardH4,
                        cardC4: siteData.data.cardC4,
                        slogan: siteData.data.slogan,
                        siteThemeColour: siteData.data.siteThemeColour
                    })
                })
                .catch(err => console.log(err))
        }
        console.log("data to be populated", this.state);
    }
    

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    groupImageHandler(e,imageType) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {

            if(imageType === "section1"){
                this.setState({section1_image:reader.result});
                console.log("--thsi sitat",this.state) 
        
            }

            if(imageType === "section2"){
                this.setState({section2_image:reader.result});
                console.log("--thsi sitat",this.state) 
        
            }

            if(imageType === "carousal1"){
                this.setState({carousel_img1:reader.result});
                console.log("--thsi sitat",this.state) 
        
            }

            if(imageType === "carousal2"){
                this.setState({carousel_img2:reader.result});
                console.log("--thsi sitat",this.state) 
        
            }
              
        }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    handleSubmit(){
        const {
            navPrimaryColor,
            navSecondaryColor,
            navTextColour,
            website_name,
            website_description,
            carousel_img1,
            carousel_img2,
            section1_image,
            section2_image,
            section1_heading,
            section1_content,
            section2_heading,
            section2_content,
            cardH1,
            cardC1,
            cardH2,
            cardC2,
            cardH3,
            cardC3,
            cardH4,
            cardC4,
            slogan,
            siteThemeColour
        } = this.state;
        if(
            navPrimaryColor.length === 0 ||
            navSecondaryColor.length === 0 ||
            navTextColour.length === 0 ||
            website_name.length === 0 ||
            website_description.length === 0 ||
            carousel_img1.length === 0 ||
            carousel_img2.length === 0 ||
            section1_image.length === 0 ||
            section2_image.length === 0 ||
            section1_heading.length === 0 ||
            section1_content.length === 0 ||
            section2_heading.length === 0 ||
            section2_content.length === 0 ||
            cardH1.length === 0 ||
            cardC1.length === 0 ||
            cardH2.length === 0 ||
            cardC2.length === 0 ||
            cardH3.length === 0 ||
            cardC3.length === 0 ||
            cardH4.length === 0 ||
            cardC4.length === 0 ||
            slogan.length === 0 ||
            siteThemeColour.length === 0
        )
        {
            this.setState({errors:'Cannot submit Incomplete form'})
            return;
        }

        console.log("submiteed data is",this.state);
        if(this.props.edit === "true"){
            let dataToSend = {
                ...this.state,
                siteID: this.props.id
            }
            axios.post("/website/save-site/template2/true", dataToSend)
                .then(res => {
                    alert("Site Saved Successfully!");
                    this.props.history.push("/profile");
                })
                .catch(err => alert(err));
        }
        else{
            this.props.sendDataToTemplate(this.state,this.props.history,'/technology/tech2_preview');    
        }
    }

    render() {

        const {
            navPrimaryColor,
            navSecondaryColor,
            navTextColour,
            website_name,
            website_description,
            carousel_img1,
            carousel_img2,
            section1_image,
            section2_image,
            section1_heading,
            section1_content,
            section2_heading,
            section2_content,
            cardH1,
            cardC1,
            cardH2,
            cardC2,
            cardH3,
            cardC3,
            cardH4,
            cardC4,
            slogan,
            siteThemeColour
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
                        {this.state.errors !== ""  ? 
                            <div className={classes.rootAlert}>
                                <Alert severity="error" onClose={() => {this.setState({errors:""})}}>{this.state.errors}</Alert>
                            </div>
                        : null}

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="siteThemeColour">Website's Theme Colour</InputLabel>
                                    <Input id="siteThemeColour" name="siteThemeColour" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={siteThemeColour} />
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
                                <InputLabel htmlFor="section1_image">Section 1 Image</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={section1_image}
                                    alt=""
                                    id="img"
                                    className="img"
                                />

                                <input
                                    type="file"
                                    accept="image/*"
                                    name="section1_image"
                                    id="input3"
                                    onChange={(e) => this.groupImageHandler(e,"section1")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input3">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="section2_image">Section 2 Image</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={section2_image}
                                    alt=""
                                    id="img"
                                    className="img"
                                />

                                <input
                                    type="file"
                                    accept="image/*"
                                    name="section2_image"
                                    id="input4"
                                    onChange={(e) => this.groupImageHandler(e,"section2")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input4">
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
                                    <InputLabel htmlFor="cardH1">Card1 Heading</InputLabel>
                                    <Input id="cardH1" name="cardH1" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardH1} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardC1">Card1 Content</InputLabel>
                                    <Input id="cardC1" name="cardC1" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardC1} />
                                </FormControl>   
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardH2">Card2 Heading</InputLabel>
                                    <Input id="cardH2" name="cardH2" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardH2} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardC2">Card2 Content</InputLabel>
                                    <Input id="cardC2" name="cardC2" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardC2} />
                                </FormControl>   
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardH3">Card3 Heading</InputLabel>
                                    <Input id="cardH3" name="cardH3" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardH3} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardC3">Card3 Content</InputLabel>
                                    <Input id="cardC3" name="cardC3" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardC3} />
                                </FormControl>   
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardH4">Card4 Heading</InputLabel>
                                    <Input id="cardH4" name="cardH4" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardH4} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="cardC4">Card4 Content</InputLabel>
                                    <Input id="cardC4" name="cardC4" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={cardC4} />
                                </FormControl>   
                            </Grid>

                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="slogan">Slogan</InputLabel>
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
                            startIcon={<SaveIcon />}>Save
                        </Button>
                
                    </Paper>
                </main>
            </div>
        )
    }
}

export default connect(null,{sendDataToTemplate})(withRouter(withStyles(styles)(Tech2_form)));