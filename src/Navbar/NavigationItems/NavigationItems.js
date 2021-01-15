import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {logoutUser} from '../../actions/authActions'

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


class Navbar extends Component { 
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();

  }

  render() {
    const { isAuthenticated, user }  = this.props.auth
    console.log("this push",this.props)
    
    return (
      <div>
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/" exact><h4>Home</h4></NavigationItem>
          <NavigationItem link="/options"><h4>Themes</h4></NavigationItem>
          {isAuthenticated ? <NavigationItem link="/profile"><h4>My Profile</h4></NavigationItem> : <NavigationItem link="/register"><h4>Register</h4></NavigationItem>}
          {isAuthenticated ? 
            <NavigationItem link="logout" {...this.props}><h4>Logout</h4></NavigationItem> : 
            <NavigationItem link="/login"><h4>Login</h4></NavigationItem>
          }
        </ul>
      </div>
    )
  }
}


Navbar.propTypes = {
  logoutUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  auth: state.auth
})

export default connect(mapStateToProps,{logoutUser})(Navbar);

