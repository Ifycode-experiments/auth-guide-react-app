import { Component } from 'react';
import PropTypes from 'prop-types';

class ModalContent extends Component {
  static propTypes = {
    details: PropTypes.object
  }
  render() {
    return (
      <div>{`${this.props.details.name} modal content`}</div>
    );
  };
};

export default ModalContent;
