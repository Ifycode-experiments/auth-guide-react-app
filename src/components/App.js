import { Component, Fragment } from 'react';
import Header from './Header';
import Tutorial from './Tutorial';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Tutorial />
      </Fragment>
    );
  }
}

export default App;
