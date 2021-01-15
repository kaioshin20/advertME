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

class Tech3_form extends Component {
    constructor(){
        super()
        this.state = {
            navPrimaryColor: "",
            navSecondaryColor: "",
            navTextColour: "",
            backgroundColour: "",
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
                        backgroundColour: siteData.data.backgroundColour,
                        website_name: siteData.data.website_name,
                        heading: siteData.data.heading,
                        subHeading: siteData.data.subHeading,
                        img1: siteData.data.img1,
                        img2: siteData.data.img2,
                        img3: siteData.data.img3,
                        img4: siteData.data.img4,
                        img5: siteData.data.img5,
                        img6: siteData.data.img6,
                        img7: siteData.data.img7,
                        img8: siteData.data.img8,
                        img9: siteData.data.img9,
                        img10: siteData.data.img10,
                        img11: siteData.data.img11,
                        img12: siteData.data.img12
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

                if(imageType === "img1"){
                    this.setState({img1:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img2"){
                    this.setState({img2:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img3"){
                    this.setState({img3:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img4"){
                    this.setState({img4:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img5"){
                    this.setState({img5:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img6"){
                    this.setState({img6:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img7"){
                    this.setState({img7:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img8"){
                    this.setState({img8:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img9"){
                    this.setState({img9:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img10"){
                    this.setState({img10:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img11"){
                    this.setState({img11:reader.result});
                    console.log("--thsi sitat",this.state) 
                }

                if(imageType === "img12"){
                    this.setState({img12:reader.result});
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
            backgroundColour,
            website_name,
            heading,
            subHeading,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12
        } = this.state;
        if(
            navPrimaryColor.length === 0 ||
            navSecondaryColor.length === 0 ||
            navTextColour.length === 0 ||
            backgroundColour.length === 0 ||
            website_name.length === 0 ||
            heading.length === 0 ||
            subHeading.length === 0 ||
            img1.length === 0 ||
            img2.length === 0 ||
            img3.length === 0 ||
            img4.length === 0 ||
            img5.length === 0 ||
            img6.length === 0 ||
            img7.length === 0 ||
            img8.length === 0 ||
            img9.length === 0 ||
            img10.length === 0 ||
            img11.length === 0 ||
            img12.length === 0
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
            axios.post("/website/save-site/template3/true", dataToSend)
                .then(res => {
                    alert("Site Saved Successfully!");
                    this.props.history.push("/profile");
                })
                .catch(err => alert(err));
        }
        else{
            this.props.sendDataToTemplate(this.state,this.props.history,'/showcase/tech3_preview');    
        }
    }

    render() {

        const {
            navPrimaryColor,
            navSecondaryColor,
            navTextColour,
            backgroundColour,
            website_name,
            heading,
            subHeading,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12
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
                                    <InputLabel htmlFor="navTextColour">Navbar's Text Colour</InputLabel>
                                    <Input id="navTextColour" name="navTextColour" autoComplete="off" autoFocus onChange={(e)=> this.handleChange(e)} value={navTextColour} />
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
                                    <InputLabel htmlFor="backgroundColour">Background Colour</InputLabel>
                                    <Input id="backgroundColour" name="backgroundColour" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={backgroundColour} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="heading">Heading</InputLabel>
                                    <Input id="heading" name="heading" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={heading} />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} sm = {6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="subHeading">Sub-Heading</InputLabel>
                                    <Input id="subHeading" name="subHeading" autoComplete="off" onChange={(e)=> this.handleChange(e)} value={subHeading} />
                                </FormControl>   
                            </Grid>
                            
                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img1">Image 1</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img1}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img1"
                                    id="input1"
                                    onChange={(e) => this.groupImageHandler(e,"img1")}
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
                                <InputLabel htmlFor="img2">Image 2</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img2}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img2"
                                    id="input2"
                                    onChange={(e) => this.groupImageHandler(e,"img2")}
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
                                <InputLabel htmlFor="img3">Image 3</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img3}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img3"
                                    id="input3"
                                    onChange={(e) => this.groupImageHandler(e,"img3")}
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
                                <InputLabel htmlFor="img4">Image 4</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img4}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img4"
                                    id="input4"
                                    onChange={(e) => this.groupImageHandler(e,"img4")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input4">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img5">Image 5</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img5}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img5"
                                    id="input5"
                                    onChange={(e) => this.groupImageHandler(e,"img5")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input5">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img6">Image 6</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img6}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img6"
                                    id="input6"
                                    onChange={(e) => this.groupImageHandler(e,"img6")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input6">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img7">Image 7</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img7}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img7"
                                    id="input7"
                                    onChange={(e) => this.groupImageHandler(e,"img7")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input7">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img8">Image 8</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img8}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img8"
                                    id="input8"
                                    onChange={(e) => this.groupImageHandler(e,"img8")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input8">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img9">Image 9</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img9}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img9"
                                    id="input9"
                                    onChange={(e) => this.groupImageHandler(e,"img9")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input9">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img10">Image 10</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img10}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img10"
                                    id="input10"
                                    onChange={(e) => this.groupImageHandler(e,"img10")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input10">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img11">Image 11</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img11}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img11"
                                    id="input11"
                                    onChange={(e) => this.groupImageHandler(e,"img11")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input11">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm = {12}>
                                <InputLabel htmlFor="img12">Image 12</InputLabel>
                                <img
                                    className="photo_holder"
                                    src={img12}
                                    alt=""
                                    id="img"
                                    className="img"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="img12"
                                    id="input12"
                                    onChange={(e) => this.groupImageHandler(e,"img12")}
                                />
                                <div className="label">
                                    <label className="photo_upload" htmlFor="input12">
                                        <p>
                                            Upload Image
                                        </p>
                                    </label>
                                </div>
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




// GrnForm.propType={
//     createNewGRN : PropTypes.func.isRequired,
//     errors:PropTypes.object.isRequired,
//     classes: PropTypes.object.isRequired,
//   }

// const mapStateToProps = (state) => ({
//     errors:state.errors
// })

//connect(mapStateToProps,{createNewBooking})
export default connect(null,{sendDataToTemplate})(withRouter(withStyles(styles)(Tech3_form)));

//export default Grn