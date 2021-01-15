import React, { Component } from 'react';
import axios from '../axios';

import Template1 from '../Template/Template1/Template1';
import Template2 from '../Template/Template2/Template2';
import Template3 from '../Template/Template3/Template3';

class Deployed extends Component{
    state = {
        component: null,
        data: null
    }

    async componentDidMount(){
        let websiteID = this.props.match.params.id;
        let response = await axios.get(`/website/get-site/${websiteID}`);
        let siteData = response.data;
        this.setState({
            component: siteData.name,
            data: siteData
        });
    }

    render(){
        if(this.state.component != null){
            switch(this.state.component){
                case "Template1": return <Template1 data={this.state.data} />
                case "Template2": return <Template2 data={this.state.data} />
                case "Template3": return <Template3 data={this.state.data} />
                default: return <center><h1>Check your URL, Something doesn't seem right</h1></center>
            }
        }
        else{
            return (
                <center>
                    <h1>loading...</h1>
                </center>
            )
        }
    }
}

export default Deployed;