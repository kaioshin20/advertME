import React,{Component} from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { registeruser} from '../actions/authActions'

import backgroundImage from './images/back.webp';
import Navbar from '../Navbar/index';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', 
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
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
	form: {
		width: '100%', 
		marginTop: theme.spacing.unit,
  },
  large:{
	width: theme.spacing(20),
	  height: theme.spacing(20) 
  },
	submit: {
		marginTop: theme.spacing.unit * 3,
	}
  })


class Register extends Component{
  constructor(){
      super();
      this.state={
          email:'',
          password:'',
          errors:''
      }

      this.onChange=this.onChange.bind(this)
      this.onSubmit= this.onSubmit.bind(this)
  }

  
  componentWillReceiveProps(nextProps){// this runs when component receive new properties
	if(nextProps.errors){
	  this.setState({errors:nextProps.errors})
	}
}

componentDidMount(){
  if(this.props.auth.isAuthenticated){
	this.props.history.push("/options")
  }
}



  onChange(e){
       this.setState({ [e.target.name]:e.target.value })
  }

     onSubmit(e){
          e.preventDefault();
          const newUser = {
          email:this.state.email,
          password:this.state.password,
         
           }
          console.log("register",newUser)

          this.props.registeruser(newUser,this.props.history)
		//  axios.post('/auth/register',newUser)
		//  .then(
		//    res=>this.props.history.push("/login")
		//    )
		//  .catch((err)=>{}
		//    // this.setState({errors: err.response.data})
		// //    dispatch({
		// // 	   type:GET_ERRORS,
		// // 	   payload:err.response.data
		// //    })
		//    )
		 
     }

 
    render(){
		
		const { classes } = this.props
	

     const {email,password,role, errors } = this.state;
// equivalent of const errors = tchis.state.errors
   //console.log("-->render",this.state.errors)
  //const { user } = this.props.auth

        return (
			<div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: '100vh'}}>
				<Navbar />
				<main className={classes.main}>
			<Paper className={classes.paper}>
      
      <Avatar   className={classes.avatar}>
      <AccountCircleIcon  className={classes.large}/>
      </Avatar>
				<Typography component="h1" variant="h5">
				Registration Panel
				   </Typography>
				 {this.state.errors !== ''  ? 
					<Alert severity="error">{this.state.errors}</Alert>
					: null}
				<form className={classes.form}  noValidate onSubmit={this.onSubmit} >
				
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" value={email} onChange={this.onChange}  />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={this.onChange} />
					</FormControl>
					
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}>
						Register
          			</Button>

				
                <Link href="#" 	color="Primary" 	to="/login">
             Already a member? Click here 
              </Link>
				</form>
			</Paper>
		</main>
			</div>
          		
        )
    }
}

Register.propType={
  registeruser : PropTypes.func.isRequired,//its a function that is required
  auth:PropTypes.object.isRequired,

  classes: PropTypes.object.isRequired,
}


const mapStateToProps = (state)=>({
  auth:state.auth,

})

export default connect(mapStateToProps,{registeruser})(withRouter(withStyles(styles)(Register)))

