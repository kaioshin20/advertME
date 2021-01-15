import React from 'react';
import classes from './Header.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import Logo from '../images/logo.png';

const Header = (props) => (
    <header className={classes.Header}>
        <DrawerToggle toggleSidedrawer={props.toggled} />
        <div className={classes.LogoOuter}>
            <div className={classes.Logo}>
                <img src={Logo} alt="AdvertME" />
            </div>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Header;