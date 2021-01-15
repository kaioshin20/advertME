import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.ClientNavigationItems}>
        <NavigationItem link="/" exact {...props}>Home</NavigationItem>
        <NavigationItem link="/options" {...props}>Options</NavigationItem>
        <NavigationItem link="/technology" {...props}>Technology</NavigationItem>
    </ul>
);

export default NavigationItems;