import { Component, Fragment } from 'react';
import DocIntro from './DocIntro';
import Documentation from './Documentation';
import docintro from '../helper/docintro';
import '../css/grid.css';

class AuthHome extends Component {
  render() {
    return (
      <Fragment>
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
