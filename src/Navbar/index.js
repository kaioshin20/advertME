import React, {Component} from 'react';
import Header from './Header/Header';
import SideDrawer from './SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    SideDrawerToggleHandler = () => {
        this.setState((prev) => (
            {showSideDrawer: !prev.showSideDrawer}
        ));
    }

    render () {
        return (
            <div>
                <Header toggled={this.SideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <div style={{height: '70px'}}></div>
            </div>
        )
    } 
}

export default Layout;