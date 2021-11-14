import { Component, Fragment } from 'react';
import Header from './Header';
import Documentation from './Documentation';
import '../css/flexie.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Documentation />
      </Fragment>
    );
  }
}

export default App;
