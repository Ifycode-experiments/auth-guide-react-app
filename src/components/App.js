import { Component, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../css/modal.css';
import Modal from './Modal';

class App extends Component {

  state = {
    modalVisible: false
  }

  openModal = () => {
    // For opening modal
    this.setState({ modalVisible: true });
  }

  closeModal = (e) => {
    // For closing modal
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <Fragment>
        <Header openModal={this.openModal} />
        <Modal
          modalVisible={this.state.modalVisible}
          closeModal={this.closeModal}
        />
        <Outlet />
      </Fragment>
    );
  }
}

export default App;
