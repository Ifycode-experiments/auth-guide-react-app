import NavBtn from './NavBtn';
import '../css/header.css';

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
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;