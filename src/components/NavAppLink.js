import { Link } from 'react-router-dom';

const NavAppLink = (props) => (
  <li>
    <Link onClick={props.closeNav} to={`./${props.details.name.toLowerCase()}`} className="a">
      <span>{props.details.name}</span>
    </Link>
  </li>
);

export default NavAppLink;
