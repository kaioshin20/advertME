import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';

import Logo from '../images/logo.png';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.open} hideBackdrop={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.LogoOuter}>
                    <div className={classes.Logo}>
                        <img src={Logo} alt="AdvertME" />
                    </div>
                </div>
                <nav>
                    <NavigationItems>AdvertME</NavigationItems>
                </nav>
            </div>
        </div>
    );
};

export default SideDrawer;