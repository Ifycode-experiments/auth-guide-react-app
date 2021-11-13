import NavBtn from './NavBtn';
import '../css/header.css';
import linkDetails from '../navlinks';
import NavLink from './NavLink';
import { Component } from 'react';

class Header extends Component {
    state = {
        hidden: true
    };

    toggleNav = e => {
        const currentState = this.state.hidden;
        this.setState({ hidden: !currentState });
    }

    render() {
        return (
            <header>
                <div className="contain f-sb-ai-center" >
                    <a className="brand-logo" href="./">
                        <img src='./images/logo/auth-logo-colored-2.svg' alt="auth guide app logo" />
                    </a>
                    <NavBtn toggleNav={this.toggleNav} />
                    <nav className={`nav nav-show ${this.state.hidden ? 'nav-hide' : '' }`}>
                        <NavBtn toggleNav={this.toggleNav} />
                        <ul className="menu-container">
                            {Object.keys(linkDetails).map(linkKey => 
                                <NavLink 
                                    key={linkKey} 
                                    details={linkDetails[linkKey]}
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