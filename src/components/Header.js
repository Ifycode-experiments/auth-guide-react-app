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

    openModal = () => {
        console.log('Modal opened! ');
    }

    logout = () => {
        console.log('Logged Out! ');
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
                    <nav className={`nav nav-show ${this.state.hidden ? 'nav-hide' : '' }`}>
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
                                /> :
                                <NavLinkBtn
                                    key={linkKey} 
                                    details={linkDetails[linkKey]}
                                    modal={linkKey === 'logout' ? this.logout : this.openModal}
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