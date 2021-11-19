import { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';
import NavAppLink from './NavAppLink';
import NavLinkBtn from './NavLinkBtn';
import linkDetails from '../helper/navlinks';
import '../css/header.css';

class Header extends Component {
  state = {
    navHidden: true,
    navLinkBtnActive: false,
    atLeastOneNavLinkOrBtnHasFocus: false,
    mouseEnter: false
  };

  menuContainerRef = createRef();

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

  hoverOrFocus = (boolenValue) => {
    this.setState({navLinkBtnActive: boolenValue});
  }

  removeFocusOnHover = (mouseEnter) => {
    let navLinksOrBtns = this.menuContainerRef.current.children;
    navLinksOrBtns = Array.from(navLinksOrBtns).map(child => {
      return Array.from(child.children)[0];
    })
    .filter(child => child !== undefined); //this removes menu-btn from the list (which is not needed);

    let atLeastOneNavLinkOrBtnHasFocus = navLinksOrBtns.some(links => {
      const el = document.activeElement;
      return el === links;
    });

    //set state - atLeastOneNavLinkOrBtnHasFocus
    this.setState({ atLeastOneNavLinkOrBtnHasFocus });

    let theOneNavLinkOrBtnThatHasFocus = navLinksOrBtns.filter(links => {
      const el = document.activeElement;
      return el === links;
    });

    if (mouseEnter && atLeastOneNavLinkOrBtnHasFocus) {
      theOneNavLinkOrBtnThatHasFocus[0].blur();
    }

    //set state - mouseEnter
    this.setState({ mouseEnter });
  }

  render() {
    return (
      <header>
        <div className="contain f-sb-ai-center" >
          <Link to='/' className="brand-logo">
            <img src='./images/logo/auth-logo-colored-2.svg' alt="auth guide app logo" />
          </Link>
          <NavBtn
            toggleNav={this.toggleNav}
            visible={this.state.navHidden}
          />
          <nav onClick={this.closeOnNavClick} className={`nav nav-show ${this.state.navHidden ? 'nav-hide' : '' }`}>
            <ul ref={this.menuContainerRef} className="menu-container">
              <NavBtn
                toggleNav={this.toggleNav}
                visible={!this.state.navHidden}
              />
              {Object.keys(linkDetails).map(linkKey =>
                linkKey === 'documentation' || linkKey === 'tutorial'  ?
                <NavAppLink
                  key={linkKey}
                  details={linkDetails[linkKey]}
                  closeNav={this.closeNav}
                  navLinkBtnActive={this.state.navLinkBtnActive}
                  hoverOrFocus={this.hoverOrFocus}
                  removeFocusOnHover={this.removeFocusOnHover}
                  atLeastOneNavLinkOrBtnHasFocus={this.state.atLeastOneNavLinkOrBtnHasFocus}
                  mouseEnter={this.state.mouseEnter}
                /> :
                <NavLinkBtn
                  key={linkKey}
                  details={linkDetails[linkKey]}
                  openModal={linkKey === 'logout' ? this.logout : this.openModal}
                  hoverOrFocus={this.hoverOrFocus}
                  removeFocusOnHover={this.removeFocusOnHover}
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
