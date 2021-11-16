import { Link } from 'react-router-dom';

const NavLink = (props) => (
    <li>
        <Link to={`./${props.details.name.toLowerCase()}`} className="a">
            <span>{props.details.name}</span>
        </Link>
    </li>
);

export default NavLink;