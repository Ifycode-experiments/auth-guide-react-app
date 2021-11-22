import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/input-group.css';

class ModalForm extends Component {

  static propTypes = {
    details: PropTypes.shape({
      modal: PropTypes.string,
      name: PropTypes.string,
      form: PropTypes.bool,
      formInfo: PropTypes.object
    })
  }

  render() {
    const details = this.props.details;
    const info = details.formInfo;
    return (
      <form id={info.formId}>
        <div className="input-field">
          <input type="email" id={info.input.emailId} placeholder=" " required />
          <label htmlFor={info.input.emailId}>Email address</label>
        </div>
        <div className="input-field">
          <input type="password" id={info.input.passwordId} placeholder=" " required />
          <label htmlFor={info.input.passwordId}>{info.input.label}</label>
        </div>
        {
          details.modal === 'modal-signup' ?
          <Fragment>
            <div className="input-field">
              <input type="text" id="signup-name" placeholder=" " required />
              <label htmlFor="signup-name">Display name</label>
            </div>
            <div className="input-field">
              <input type="text" id="signup-bio" placeholder=" " required />
              <label htmlFor="signup-bio">One line bio</label>
            </div>
          </Fragment> : null
        }
        <button className="btn">{details.name}</button>
        <p className="error"></p>
      </form>
    );
  };
};

export default ModalForm;
