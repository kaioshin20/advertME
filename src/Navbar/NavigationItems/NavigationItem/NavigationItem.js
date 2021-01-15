import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import classes from './NavigationItem.module.css';

class NavigationItem extends Component{
    onLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");
    }

    render(){
        return(
            <li className={classes.NavigationItem}>
                {this.props.link === "logout" ? 
                    <a style={{color: 'white', cursor: 'pointer'}} onClick={this.onLogoutClick.bind(this)}>
                        {this.props.children}
                    </a> :
                    <NavLink
                        to={this.props.link} 
                        exact
                        activeClassName={classes.Active}>{this.props.children}
                    </NavLink>
                }
            </li>
        );
    }
}

export default withRouter(NavigationItem);