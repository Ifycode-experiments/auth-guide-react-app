
const NavLink = (props) => (
    <li>
        <button className="a">
            {props.details.name}
        </button>
    </li>
);

export default NavLink;