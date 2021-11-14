import { Component, Fragment } from 'react';
import Header from './Header';
import DocIntro from './DocIntro';
import Documentation from './Documentation';
import docintro from '../helper/docintro';
import '../css/flexie.css';
import '../css/grid.css';

class AuthHome extends Component {
  render() {
    return (
      <Fragment>
        <Header />
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
