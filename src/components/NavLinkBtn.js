
const NavLinkBtn = (props) => (
  <li>
    <button onClick={props.modal} className="a">
      {props.details.name}
    </button>
  </li>
);

export default NavLinkBtn;
