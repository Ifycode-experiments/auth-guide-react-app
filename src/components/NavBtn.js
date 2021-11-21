import React from 'react';
import PropTypes from 'prop-types';
import '../css/helper/show-on-ss.css';

const NavBtn = (props) => (
  <button onClick={props.toggleNav} className={`btn show-on-ss ${props.visible ? '' : 'hidden'}`}>Menu</button>
);

NavBtn.propTypes = {
  toggleNav: PropTypes.func,
  visible: PropTypes.bool
}

export default NavBtn;
