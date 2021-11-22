import { Component } from 'react';
import PropTypes from 'prop-types';

class NavLinkBtn extends Component {

  static propTypes = {
    hoverOrFocus: PropTypes.func,
    linkKey: PropTypes.string,
    openModal: PropTypes.func,
    removeFocusOnHover: PropTypes.func,
    details: PropTypes.shape({
      alias: PropTypes.string,
      name: PropTypes.string,
      form: PropTypes.bool
    })
  }

  modal = () => {
    /*---------------------------------------------
    Collect details prop (object) for a particular
    NavLinkBtn element, and pass up to parent(s) to
    change modalPopup state dynamically with:
    -----------------------------------------------
    this.props.openModal(navlinkBtnDetails);
    ---------------------------------------------*/
    this.props.openModal(this.props.details);
  }

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

  mouseLeaveLogOut = () => {
    this.props.hoverOrFocus(false);
    this.props.removeFocusOnHover(false, true, true);
  }

  mouseLeave = () => {
    this.props.hoverOrFocus(false);
    this.props.removeFocusOnHover(false, false, true);
  }

  leave = () => {
    this.props.hoverOrFocus(false);
    this.props.removeFocusOnHover(false, false, false);
  }

  render() {
    return (
      <li>
        <button
          onClick={this.modal} className="a"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.props.linkKey === 'logout' ? this.mouseLeaveLogOut : this.mouseLeave}
          onFocus={this.enter}
          onBlur={this.leave}
        >
          {this.props.details.name}
        </button>
      </li>
    );
  };
};

export default NavLinkBtn;
