import { Component } from "react";

class NavLinkBtn extends Component {

  modal = () => {
    /*---------------------------------------------
    Collect details prop (object) for a particular
    NavLinkBtn element, and pass up to parent(s) to
    change modalPopup state dynamically with:
    -----------------------------------------------
    this.props.openModal(navlinkBtnDetails);
    ---------------------------------------------*/
    this.props.openModal(this.props.details);
  }

  render() {
    return (
      <li>
        <button onClick={this.modal} className="a">
          {this.props.details.name}
        </button>
      </li>
    );
  };
};

export default NavLinkBtn;
