import { Component, Fragment } from 'react';
import Header from './Header';
import DocIntro from './DocIntro';
import Documentation from './Documentation';
import docintro from '../helper/docintro';
import '../css/grid.css';
import '../css/modal.css';

class AuthHome extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* Modal container goes here 
        <section className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <h4>Test title</h4>
              <div>Testing modal</div>
            </div>
          </div>
        </section>
        */}
        <section className="contain">
          <div className="g g-sb-ls">
            { docintro.map(intro => 
              <DocIntro 
                key={intro.title.toLowerCase()}
                details={intro} 
              />
            )}
          </div>
        </section>
        <Documentation />
      </Fragment>
    );
  }
}

export default AuthHome;
