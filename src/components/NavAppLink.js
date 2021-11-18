import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavAppLink extends Component {

  activeOrNot = (isActive) => {

    if (isActive) {
      isActive = !this.props.navLinkBtnActive;
    }

    return isActive ? 'a active' : 'a'
  };

  /*-----------------------------------------------
  this.props.hoverOrFocus() collects true or false
  values to set the navLinkBtnActive state in parent
  (Header) element on hover or on focus
  ------------------------------------------------*/
  enter = () => {
    this.props.hoverOrFocus(true);
  }

  leave = () => {
    this.props.hoverOrFocus(false);
  }

  render() {
    return (
      <li>
        <NavLink
          onClick={this.props.closeNav} to={`/${this.props.details.name.toLowerCase()}`}
          className={({isActive}) => this.activeOrNot(isActive)}
          onMouseEnter={this.enter}
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
