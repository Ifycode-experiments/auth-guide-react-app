import React, { Component } from 'react';
import '../css/nav/show-on-ss.css';

class NavBtn extends Component {
    headerButton = React.createRef();
    toggleNav = e => {
        console.log(this.headerButton);
    }
    render() {
        return (
            <button ref={this.headerButton} onClick={this.toggleNav} className="show-on-ss">Menu</button>
        )
    }
};

export default NavBtn;