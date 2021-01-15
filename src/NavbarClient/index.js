import React, {Component} from 'react';
import Header from './Header/Header';
import SideDrawer from './SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showClientSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showClientSideDrawer: false});
    }

    SideDrawerToggleHandler = () => {
        this.setState((prev) => (
            {showClientSideDrawer: !prev.showClientSideDrawer}
        ));
    }

    render () {
        return (
            <div>
                <Header toggledClient={this.SideDrawerToggleHandler} {...this.props} />
                {/* <SideDrawer openClient={this.state.showClientSideDrawer} closedClient={this.SideDrawerClosedHandler} {...this.props} /> */}
            </div>
        )
    } 
}

export default Layout;