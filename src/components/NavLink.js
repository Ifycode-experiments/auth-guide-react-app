
const NavLink = (props) => (
    <li>
        <a href={`./${props.details.name.toLowerCase()}`} className="a">
            {props.details.name}
        </a>
    </li>
);

export default NavLink;