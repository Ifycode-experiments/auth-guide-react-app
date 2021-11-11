import { Component } from 'react';
import Header from './Header';
import docIcon from '../images/icon/doc.svg';
import authusersIcon from '../images/icon/auth-users.svg';
import adminIcon from '../images/icon/admin.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="icon">
            <img src={docIcon} alt="doc icon" />
          </div>
          <div className="icon">
            <img src={authusersIcon} alt="auth users icon" />
          </div>
          <div className="icon">
            <img src={adminIcon} alt="admin icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
