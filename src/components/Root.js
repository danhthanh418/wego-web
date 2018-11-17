import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
class Root extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                   {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}

export default Root;