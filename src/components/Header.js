import { Component, createRef } from 'react';
import AppLogo from './AppLogo';
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
    appLogoHasFocus: false,
    mouseEnter: false,
    mouseLeaveLogoOrLogout: false,
    mouseLeave: false
  };

  menuContainerRef = createRef();
  surfaceAppLogoRef = createRef();
  surfaceDocLinkRef = createRef();
  surfaceTutLinkRef = createRef();

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
    //console.log(this.surfaceNavAppLinkRef.current.navAppLinkRef.current);
  }

  removeFocusOnHover = (mouseEnter, mouseLeaveLogoOrLogout, mouseLeave) => {
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

    if ((mouseEnter && atLeastOneNavLinkOrBtnHasFocus) || (mouseLeaveLogoOrLogout && atLeastOneNavLinkOrBtnHasFocus)) {
      theOneNavLinkOrBtnThatHasFocus[0].blur();
    }

    //---| remove focus for AppLogo only |----

    const logoLink = this.surfaceAppLogoRef.current.appLogoRef.current;
    const el = document.activeElement;
    let appLogoHasFocus = el === logoLink;

    if (mouseLeaveLogoOrLogout && appLogoHasFocus) {
      logoLink.blur();
    }

    //set state - appLogoHasFocus
    this.setState({ appLogoHasFocus });

    //----------------------------------------

    if (mouseLeave) {
      /*
       To Do: since NavAppLink.js line 45 is giving me issues, try get
       the active link (only) from here - in Header component. That's where
       these two console.logs below come in.
      */

      //console.log(this.surfaceDocLinkRef.current.navAppLinkRef.current);
      //console.log(this.surfaceTutLinkRef.current.navAppLinkRef.current);
    }

    //set state - mouseEnter
    this.setState({ mouseEnter });

    //set state - mouseLeaveLogoOrLogout
    this.setState({ mouseLeaveLogoOrLogout });

    //set state - mouseLeave
    this.setState({ mouseLeave });
  }

  render() {
    return (
      <header>
        <div className="contain f-sb-ai-center" >
          <AppLogo
            hoverOrFocus={this.hoverOrFocus}
            removeFocusOnHover={this.removeFocusOnHover}
            ref={this.surfaceAppLogoRef}
          />
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
                  appLogoHasFocus={this.state.appLogoHasFocus}
                  mouseEnter={this.state.mouseEnter}
                  mouseLeave={this.state.mouseLeave}
                  ref={linkKey === 'documentation' ? this.surfaceDocLinkRef : this.surfaceTutLinkRef}
                /> :
                <NavLinkBtn
                  key={linkKey}
                  details={linkDetails[linkKey]}
                  openModal={linkKey === 'logout' ? this.logout : this.openModal}
                  hoverOrFocus={this.hoverOrFocus}
                  removeFocusOnHover={this.removeFocusOnHover}
                  linkKey={linkKey}
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
