import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './Card3d.module.css';

const Card3d = (props) => {
    const clickHandler = (e) => {
        props.history.push(e.target.textContent);
    }

    return(
        <div className={classes.Card3d}>
            {props.cardContent.map((content) => (
                <div className={classes.OptionCard}>
                <div className={classes.wrapper}>
                <div className={classes.card}>
                    <h1>
                        <span onClick={clickHandler} style={{cursor: 'pointer'}} className={classes.enclosed}>{content}</span>
                    </h1>
                </div>
                </div>
            </div>
            ))}  
        </div>
    )
}

export default withRouter(Card3d);