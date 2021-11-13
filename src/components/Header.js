import NavBtn from './NavBtn';
import '../css/header.css';
import linkDetails from '../navlinks';
import NavLink from './NavLink';

const Header = () => (
    <header>
        <div className="contain f-sb-ai-center" >
            <a className="brand-logo" href="./">
                <img src='./images/logo/auth-logo-colored-2.svg' alt="auth guide app logo" />
            </a>
            <NavBtn />
            <nav className="nav nav-hide nav-show">
                <NavBtn />
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

export default Header;