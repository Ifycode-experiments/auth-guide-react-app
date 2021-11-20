import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavAppLink extends Component {

  activeOrNot = (isActive) => {

    if (isActive) {
      /*-----------------------------------------------
      set isActive to false when the following happens:
      1. navBtnLinkActive is true (i.e. hover and focus)
      2. If at least one of the nav links/btns has focus
      3. If the (auth guide react) app logo has focus
      4. If mouseEnter is true for any nav links/btns
      -----------------------------------------------*/

      isActive = !this.props.navLinkBtnActive;

      if (this.props.atLeastOneNavLinkOrBtnHasFocus) {
        isActive = !this.props.atLeastOneNavLinkOrBtnHasFocus;
      }

      if (this.props.appLogoHasFocus) {
        isActive = !this.props.appLogoHasFocus;
      }

      if (this.props.mouseEnter) {
        isActive = !this.props.mouseEnter;
      }
    }

    return isActive ? 'a active' : 'a'
  };

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
        <NavLink
          onClick={this.props.closeNav} to={`/${this.props.details.name.toLowerCase()}`}
          className={({isActive}) => this.activeOrNot(isActive)}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.leave}
          onFocus={this.enter}
          onBlur={this.leave}
        >
          {this.props.details.name}
        </NavLink>
      </li>
    );
  };
};

export default NavAppLink;
