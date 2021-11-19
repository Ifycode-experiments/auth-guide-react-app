import { Component } from 'react';

class NavLinkBtn extends Component {

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
    this.props.removeFocusOnHover(false);
  }

  mouseEnter = () => {
    this.props.hoverOrFocus(true);
    this.props.removeFocusOnHover(true);
  }

  leave = () => {
    this.props.hoverOrFocus(false);
    this.props.removeFocusOnHover(false);
  }

  render() {
    return (
      <li>
        <button
          onClick={this.modal} className="a"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.leave}
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
