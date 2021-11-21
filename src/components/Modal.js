import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

  static propTypes = {
    closeModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    details: PropTypes.shape({
      alias: PropTypes.string,
      name: PropTypes.string
    })
  }

  closeModal = e => {
    // For closing modal (by clicking outside modal-container)
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <section onClick={this.closeModal} className={`modal-container ${this.props.modalVisible ? '' : 'hidden'}`}>
        <div className="modal">
          <div className="modal-content">
            <h4>{this.props.details.name ? this.props.details.name.toUpperCase() : ''}</h4>
            <div>Testing modal</div>
          </div>
        </div>
      </section>
    );
  };
};

export default Modal;
