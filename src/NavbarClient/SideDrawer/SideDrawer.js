import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.ClientSideDrawer, classes.ClientClose];
    if(props.openClient){
        attachedClasses = [classes.ClientSideDrawer, classes.ClientOpen];
    }
    return (
        <div>
            <Backdrop show={props.openClient} hideBackdrop={props.closedClient} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.ClientLogo}>
                    {/* <Logo /> */}
                    <h1 style={{fontFamily: "Helvetica", color: props.navTextColour}}>{props.name}</h1>
                </div>
                {/* <nav>
                    <NavigationItems>{props.name}</NavigationItems>
                </nav> */}
            </div>
        </div>
    );
};

export default SideDrawer;