import React, {Component} from 'react';

import Tech1_form from "../Forms/Tech/Tech1_form";
import Tech2_form from "../Forms/Tech/Tech2_form";
import Tech3_form from "../Forms/Tech/Tech3_form";

class EditMatcher extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            template: null
        }
    }
    
    componentDidMount(){
        this.setState({
            id: this.props.match.params.id,
            template: this.props.match.params.template
        })
    }

    render(){
        let printJSX = null;
        if(this.state.template === "Template1")
            printJSX = <Tech1_form edit="true" id={this.state.id} />
        else if(this.state.template === "Template2")
            printJSX = <Tech2_form edit="true" id={this.state.id} />
        else if(this.state.template === "Template3")
            printJSX = <Tech3_form edit="true" id={this.state.id} />
        
        return(
            <div>
            {printJSX}
            </div>
        )
    }
}

export default EditMatcher;