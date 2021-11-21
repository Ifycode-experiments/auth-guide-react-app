import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AppLogo extends Component {

  static propTypes = {
    hoverOrFocus: PropTypes.func,
    removeFocusOnHover: PropTypes.func
  }

  /*--------------------------
  Create appLogoRef to be used
  in the surfaceAppLogoRef in
  the parent (Header) element
  --------------------------*/
  appLogoRef = createRef();

  /*-----------------------------------------------
  this.props.hoverOrFocus() collects true or false
  values to set the navLinkBtnActive state in parent
  (Header) element on hover or on focus
  -------------------------------------------------
  this.props.removeFocusOnHover() collects true or
  false value to set mouseEnter state in parent.
  ------------------------------------------------*/
  enter = () => {
    this.props.hoverOrFocus(true);
    this.props.removeFocusOnHover(false, false, false);
  }

  mouseEnter = () => {
    this.props.hoverOrFocus(true);
    this.props.removeFocusOnHover(true, false, false);
  }

  mouseLeave = () => {
    this.props.hoverOrFocus(false);
    this.props.removeFocusOnHover(false, true, true);
  }

  leave = () => {
    this.props.hoverOrFocus(false);
    this.props.removeFocusOnHover(false, false, false);
  }

  render() {
    return (
      <Link to='/' className="brand-logo"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onFocus={this.enter}
        onBlur={this.leave}
        ref={this.appLogoRef}
      >
        <img src='./images/logo/auth-logo-colored-2.svg' alt="auth guide app logo" />
      </Link>
    );
  };
};

export default AppLogo;
