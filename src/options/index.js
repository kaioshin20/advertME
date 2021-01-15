import React, {Component} from 'react';
import classes from './options.module.css';
import Card3d from '../Card3d/Card3d';

import Navbar from '../Navbar/index';

import backgroundImage from './images/back.webp';

class Options extends Component{
    render(){
        let optionCard = ["Technology", "Showcase"];
        console.log(this.props.match);

        return (
            <div>
                <Navbar />
                <div className={classes.Options} style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'    
                }}>
                    <h1 className={classes.Heading}>Choose Your Favourite Theme</h1>
                    <Card3d cardContent={optionCard} linkName={"Technology"} />
                
                </div>
            </div>
        )
    }
}

export default Options
