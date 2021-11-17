import { Component } from 'react';
import NavBtn from './NavBtn';
import NavLink from './NavLink';
import NavLinkBtn from './NavLinkBtn';
import linkDetails from '../helper/navlinks';
import '../css/header.css';

class Header extends Component {
  state = {
    hidden: true,
    visible: true
  };

  toggleNav = () => {
    //For hiding or showing nav element
    const currentState = this.state.hidden;
    this.setState({ hidden: !currentState });

    //For hiding or showing <NavBtn />
    const currentVisibleState = this.state.visible;
    this.setState({ visible: !currentVisibleState });
  }

  closeNav = () => {
    //close nav and show 1st menu btn (smaller screens)
    this.setState({ hidden: true });
    this.setState({ visible: true });
  }

  closeOnNavClick = (e) => {
    if (e.target === e.currentTarget) {
      this.closeNav();
    }
  }

  openModal = (navlinkBtnDetails) => {
    // Open modal
    this.props.openModal(navlinkBtnDetails);

    //close nav (ss)
    this.closeNav();
  }

  logout = () => {
    console.log('Logged Out! ');

    //close nav (ss)
    this.closeNav();
  }

  render() {
    return (
      <header>
        <div className="contain f-sb-ai-center" >
          <a className="brand-logo" href="./">
            <img src='./images/logo/auth-logo-colored-2.svg' alt="auth guide app logo" />
          </a>
          <NavBtn
            toggleNav={this.toggleNav}
            visible={this.state.visible}
          />
          <nav onClick={this.closeOnNavClick} className={`nav nav-show ${this.state.hidden ? 'nav-hide' : '' }`}>
            <ul className="menu-container">
              <NavBtn
                toggleNav={this.toggleNav}
                visible={!this.state.visible}
              />
              {Object.keys(linkDetails).map(linkKey =>
                linkKey === 'documentation' || linkKey === 'tutorial'  ?
                <NavLink
                  key={linkKey}
                  details={linkDetails[linkKey]}
                  closeNav={this.closeNav}
                /> :
                <NavLinkBtn
                  key={linkKey}
                  details={linkDetails[linkKey]}
                  openModal={linkKey === 'logout' ? this.logout : this.openModal}
                />
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
