import React from 'react';
import '../css/nav/show-on-ss.css';

const NavBtn = (props) => (
    <button onClick={props.toggleNav} className="show-on-ss">Menu</button>
);

export default NavBtn;
