import logo from '../images/logo/auth-logo-colored-2.svg';
import '../css/flexie.css';
import '../css/header.css';

const Header = () => (
    <header>
        <div className="contain f-sb-ai-center" >
            <a className="brand-logo" href="./">
                <img src={logo} alt="auth guide app logo" />
            </a>
            <nav>
                <ul>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;