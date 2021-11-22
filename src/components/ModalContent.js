import { Component } from 'react';

class ModalContent extends Component {
  render() {
    return (
      <div>{`${this.props.details.name} modal content`}</div>
    );
  };
};

export default ModalContent;
