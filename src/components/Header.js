import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import AppLogo from './AppLogo';
import MenuBtn from './MenuBtn';
import NavAppLink from './NavAppLink';
import NavLinkBtn from './NavLinkBtn';
import linkDetails from '../helper/navlinks';
import '../css/header.css';

class Header extends Component {

  static propTypes = {
    openModal: PropTypes.func,
    bodyScrollAddOrRemove: PropTypes.func,
  }

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

  componentDidMount() {
    this.activePageLinkGetsFocus();
  }

  activePageLinkGetsFocus = () => {
    /*-----------------------------------------------------------------------
    Returns focus to active page link so that tabbing through the links after
    hover is understandable. Focus will continue after active page link when
    tab key is used - see if (mouseLeave) {} condition inside removeFocusOnHover
    function. Also made to work on page load with componentDidMount() {}
    ------------------------------------------------------------------------*/
    if (this.surfaceDocLinkRef.current.navAppLinkRef.current.ariaCurrent !== null) {
      this.surfaceDocLinkRef.current.navAppLinkRef.current.focus();
    }

    if (this.surfaceTutLinkRef.current.navAppLinkRef.current.ariaCurrent !== null) {
      this.surfaceTutLinkRef.current.navAppLinkRef.current.focus();
    }
  }

  toggleNav = () => {
    //For hiding or showing nav element (and <MenuBtn />)
    const currentNavState = this.state.navHidden;
    this.setState({ navHidden: !currentNavState });

    //prevent and restore body scroll when nav opens or closes (ss)
    if (this.state.navHidden) {
      this.props.bodyScrollAddOrRemove(false);
    } else {
      this.props.bodyScrollAddOrRemove(true);
    }
  }

  closeNav = (booleanValue) => {
    //close nav and show 1st menu btn (smaller screens)
    this.setState({ navHidden: true });

    //prevent and restore body scroll when nav closes (ss)
    this.props.bodyScrollAddOrRemove(booleanValue);
  }

  closeOnNavClick = (e) => {
    if (e.target === e.currentTarget) {
      this.closeNav(true);
    }
  }

  openModal = (navlinkBtnDetails) => {
    // Open modal
    this.props.openModal(navlinkBtnDetails);

    //close nav (ss)
    this.closeNav(false);
  }

  logout = () => {
    console.log('Logged Out! ');

    //close nav (ss)
    this.closeNav(true);
  }

  hoverOrFocus = (boolenValue) => {
    this.setState({navLinkBtnActive: boolenValue});
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
      this.activePageLinkGetsFocus();
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
          {this.state.navHidden ?
            <MenuBtn
              toggleNav={this.toggleNav}
            /> : null
          }
          <nav onClick={this.closeOnNavClick} className={`nav nav-show ${this.state.navHidden ? 'nav-hide' : '' }`}>
            <ul ref={this.menuContainerRef} className="menu-container">
              {this.state.navHidden ?
                null :
                <MenuBtn
                  toggleNav={this.toggleNav}
                />
              }
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
