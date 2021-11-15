import React from 'react';
import '../css/helper/show-on-ss.css';

const NavBtn = (props) => (
    <button onClick={props.toggleNav} className={`btn show-on-ss ${props.visible ? '' : 'hidden'}`}>Menu</button>
);

export default NavBtn;
