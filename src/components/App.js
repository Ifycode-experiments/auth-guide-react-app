import { Component, createRef, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../css/modal.css';
import Modal from './Modal';

class App extends Component {

  state = {
    modalVisible: false,
    modalPopup: {}
  }

  headerRef = createRef();

  openModal = (modalDetails) => {
    // For opening modal
    this.setState({ modalVisible: true });

    // To determine which modal content to show
    this.setState({ modalPopup: modalDetails });

    this.bodyScrollAddOrRemove(this.state.modalVisible);
  }

  closeModal = (e) => {
    // For closing modal
    this.setState({ modalVisible: false });

    // Return modalPopup back to empty array
    this.setState({ modalPopup: {} });

    /*------------------------------------------------
    Call activePageLinkGetsFocus() found inside header
    when modal is closed - interesting!!!
    ------------------------------------------------*/
    this.headerRef.current.activePageLinkGetsFocus();

    this.bodyScrollAddOrRemove(this.state.modalVisible);
  }

  bodyScrollAddOrRemove = (argIsFalse) => {
    if (argIsFalse) {
      document.body.classList.remove('overflow-hidden');
      document.body.removeAttribute('class');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          openModal={this.openModal}
          bodyScrollAddOrRemove={this.bodyScrollAddOrRemove}
          ref={this.headerRef}
        />
        <Modal
          modalVisible={this.state.modalVisible}
          closeModal={this.closeModal}
          details={this.state.modalPopup}
        />
        <Outlet />
      </Fragment>
    );
  }
}

export default App;
