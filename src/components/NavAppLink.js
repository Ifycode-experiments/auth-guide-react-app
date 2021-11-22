import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavAppLink extends Component {

  static propTypes = {
    atLeastOneNavLinkOrBtnHasFocus: PropTypes.bool,
    closeNav: PropTypes.func,
    hoverOrFocus: PropTypes.func,
    mouseEnter: PropTypes.bool,
    navLinkBtnActive: PropTypes.bool,
    removeFocusOnHover: PropTypes.func,
    details: PropTypes.shape({
      name: PropTypes.string
      //we don't need form or modal here
    })
  }

  /*-----------------------------
  Create navAppLinkRef to be used
  in the surfaceDocLinkRef or the
  surfaceTutLinkRef in the parent
  (Header) element
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
      ----------------------------------------------------
      This works but gives error (so it has be removed):
        if (this.props.mouseLeave) {
          this.navAppLinkRef.current.focus();
        }
      See working solution in Header component: if (mouseLeave) {}
      ---------------------------------------------------*/

      isActive = !this.props.navLinkBtnActive;

      if (this.props.atLeastOneNavLinkOrBtnHasFocus) {
        isActive = !this.props.atLeastOneNavLinkOrBtnHasFocus;
      }

      if (this.props.mouseEnter) {
        isActive = !this.props.mouseEnter;
      }
    }

    return isActive ? 'a active' : 'a'
  };

  closeNav = () => {
    this.props.closeNav(true);
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
        <NavLink
          onClick={this.closeNav} to={`/${this.props.details.name.toLowerCase()}`}
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
