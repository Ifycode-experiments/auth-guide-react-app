import { Component } from 'react';
import NavBtn from './NavBtn';
import NavLink from './NavLink';
import NavLinkBtn from './NavLinkBtn';
import linkDetails from '../helper/navlinks';
import '../css/header.css';

class Header extends Component {
  state = {
    navHidden: true
  };

  toggleNav = () => {
    //For hiding or showing nav element (and <NavBtn />)
    const currentNavState = this.state.navHidden;
    this.setState({ navHidden: !currentNavState });
  }

  closeNav = () => {
    //close nav and show 1st menu btn (smaller screens)
    this.setState({ navHidden: true });
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
            visible={this.state.navHidden}
          />
          <nav onClick={this.closeOnNavClick} className={`nav nav-show ${this.state.navHidden ? 'nav-hide' : '' }`}>
            <ul className="menu-container">
              <NavBtn
                toggleNav={this.toggleNav}
                visible={!this.state.navHidden}
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
