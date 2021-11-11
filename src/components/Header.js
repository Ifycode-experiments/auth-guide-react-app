import logo from '../img/logo.svg';
import '../css/flexie.css';
import '../css/header.css';

const Header = () => (
    <header className="">
        <div className="contain f-sb-ai-center" >
            <a className="brand-logo" href="./">
                <img src={logo} alt="" />
            </a>
            <nav>
                <ul className="">
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;