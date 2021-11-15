import { Component, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../css/modal.css';

class App extends Component {

  state = {
    modalVisible: false
  }

  openModal = () => {
    // For opening modal
    this.setState({ modalVisible: true });
  }

  closeModal = (e) => {
    // For closing modal (by clicking outside modal-container)
    if (e.target === e.currentTarget) { 
      this.setState({ modalVisible: false });
    }
  }

  render() {
    return (
      <Fragment>
        <Header openModal={this.openModal} />
        <section onClick={this.closeModal} className={`modal-container ${this.state.modalVisible ? '' : 'hidden'}`}>
          <div className="modal">
            <div className="modal-content">
              <h4>Test title</h4>
              <div>Testing modal</div>
            </div>
          </div>
        </section>
        <Outlet />
      </Fragment>
    );
  }
}

export default App;
