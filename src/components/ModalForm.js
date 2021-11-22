import { Component } from 'react';

class ModalForm extends Component {
  render() {
    return (
      <form id="signup-form">
        <div className="input-field">
          <input type="email" id="signup-email" placeholder=" " required />
          <label htmlFor="signup-email">Email address</label>
        </div>
        <div className="input-field">
          <input type="password" id="signup-password" placeholder=" " required />
          <label htmlFor="signup-password">Choose password</label>
        </div>
        <div className="input-field">
          <input type="text" id="signup-name" placeholder=" " required />
          <label htmlFor="signup-name">Display name</label>
        </div>
        <div className="input-field">
          <input type="text" id="signup-bio" placeholder=" " required />
          <label htmlFor="signup-bio">One line bio</label>
        </div>
        <button className="btn">Sign up</button>
        <p className="error"></p>
      </form>
    );
  };
};

export default ModalForm;
