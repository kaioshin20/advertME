import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

class NavigationItem extends Component {
    state = {
        hover: false
    }

    mouseOverNavItem = () => {
        this.setState({hover: true});
    }

    mouseOutNavItem = () => {
        this.setState({hover: false});
    }

    render(){
        return(
            <li className={classes.ClientNavigationItem}>
                <NavLink
                    style={{
                        backgroundColor: this.state.hover ? this.props.secondaryColor : this.props.primaryColor
                    }}
                    onMouseOver={this.mouseOverNavItem}
                    onMouseOut={this.mouseOutNavItem}
                    to={this.props.link} 
                    exact
                    activeClassName={classes.Active}>{this.props.children}
                </NavLink>
            </li>
        )
    }
};

export default NavigationItem;