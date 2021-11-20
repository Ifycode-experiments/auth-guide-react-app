import { Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';

class NavAppLink extends Component {

  /*-----------------------------
  Create navAppLinkRef to be used
  in the surface...LinkRef in the
  parent (Header) element
  -----------------------------*/
  navAppLinkRef = createRef();

  activeOrNot = (isActive) => {

    if (isActive) {
      /*-----------------------------------------------
      set isActive to false when the following happens:
      1. navBtnLinkActive is true (i.e. hover and focus)
      2. If at least one of the nav links/btns has focus
      3. If mouseEnter is true for any nav links/btns
      --------------------------------------------------
      4. If the (auth guide react) app logo has focus has
         been removed - but kept here for later reference
          if (this.props.appLogoHasFocus) {
            isActive = !this.props.appLogoHasFocus;
          }
         This was previously used together with the statement
         below inside the removeFocusOnHover() in Header component:
          if (mouseEnter && appLogoHasFocus) {
            logoLink.blur();
          }
      -----------------------------------------------*/

      isActive = !this.props.navLinkBtnActive;

      if (this.props.atLeastOneNavLinkOrBtnHasFocus) {
        isActive = !this.props.atLeastOneNavLinkOrBtnHasFocus;
      }

      if (this.props.mouseEnter) {
        isActive = !this.props.mouseEnter;
      }

      if (this.props.mouseLeave) {
        this.navAppLinkRef.current.focus();
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
    this.props.removeFocusOnHover(false, false, false);
  }

  mouseEnter = () => {
    //console.log(this.navAppLinkRef.current)
    this.props.hoverOrFocus(true);
    this.props.removeFocusOnHover(true, false, false);
  }

  mouseLeave = () => {
    //console.log(this.navAppLinkRef.current);
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
        <NavLink
          onClick={this.props.closeNav} to={`/${this.props.details.name.toLowerCase()}`}
          className={({isActive}) => this.activeOrNot(isActive)}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onFocus={this.enter}
          onBlur={this.leave}
          ref={this.navAppLinkRef}
        >
          {this.props.details.name}
        </NavLink>
      </li>
    );
  };
};

export default NavAppLink;
