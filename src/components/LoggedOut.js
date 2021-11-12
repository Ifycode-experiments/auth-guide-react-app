import { Component, Fragment } from 'react';
import Header from './Header';
import '../css/flexie.css';
import '../css/grid.css';
import docIcon from '../images/icon/doc.svg';
import authusersIcon from '../images/icon/auth-users.svg';
import adminIcon from '../images/icon/admin.svg';

class LoggedOut extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="contain">
          <div className="g g-sb-ls">
            <article className="intro">
              <div className="icon">
                <img src={docIcon} alt="doc icon" />
              </div>
              <div>
                <h1>Content</h1>
                <p>Add what content is in the auth guide here - doc + tutorial</p>
              </div>
            </article>
            <article className="intro">
              <div className="icon">
                <img src={authusersIcon} alt="auth users icon" />
              </div>
              <div>
                <h1>Access</h1>
                <p>Who can access what content, what route and read and write access</p>
              </div>
            </article>
            <article className="intro">
              <div className="icon">
                <img src={adminIcon} alt="admin icon" />
              </div>
              <div>
                <h1>Not yet determined</h1>
                <p>This title and content is not yet determined</p>
              </div>
            </article>
          </div>
        </section>
        {/* The Doc section will be added here later on */}
      </Fragment>
    );
  }
}

export default LoggedOut;
