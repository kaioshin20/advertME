import React from 'react';
import classes from './Header.module.css';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Header = (props) => {
    return(
        <header className={classes.Header} style={{backgroundColor: props.primaryColor}}>
            {/* <DrawerToggle toggleClientSidedrawer={props.toggledClient} {...props} /> */}
            <div className={classes.Logo}>
                {/* <Logo /> */}
                <h1 style={{fontFamily: "Helvetica", color: props.navTextColour}}>{props.name}</h1>
            </div>
            {/* <nav className={classes.DesktopOnly}>
                <NavigationItems {...props} />
            </nav> */}
        </header>
    )
}

export default Header;