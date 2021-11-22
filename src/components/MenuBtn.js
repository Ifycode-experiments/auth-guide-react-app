import React from 'react';
import PropTypes from 'prop-types';
import '../css/helper/show-on-ss.css';

const MenuBtn = (props) => (
  <button onClick={props.toggleNav} className="btn show-on-ss">Menu</button>
);

MenuBtn.propTypes = {
  toggleNav: PropTypes.func,
  visible: PropTypes.bool
}

export default MenuBtn;
