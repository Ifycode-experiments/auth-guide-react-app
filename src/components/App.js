import { Component, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../css/modal.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* Modal container goes here 
        <section className="modal-container" >
          <div className="modal">
            <div className="modal-content">
              <h4>Test title</h4>
              <div>Testing modal</div>
            </div>
          </div>
        </section>
        */}
        <Outlet />
      </Fragment>
    );
  }
}

export default App;
