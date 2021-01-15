import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
    <div className={classes.ClientDrawerToggle} onClick={() => props.toggleClientSidedrawer()}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;