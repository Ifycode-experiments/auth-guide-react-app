import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavAppLink extends Component {
  render() {
    return (
      <li>
        <NavLink
          onClick={this.props.closeNav} to={`/${this.props.details.name.toLowerCase()}`}
          className={({isActive}) => isActive ? 'a active' : 'a'}
        >
          {this.props.details.name}
        </NavLink>
      </li>
    );
  };
};

export default NavAppLink;
