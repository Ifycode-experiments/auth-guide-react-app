import { Component } from "react";

class Modal extends Component {

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
            <h4>Test title</h4>
            <div>Testing modal</div>
          </div>
        </div>
      </section>
    );
  };
};

export default Modal;
