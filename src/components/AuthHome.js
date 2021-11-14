import { Component, Fragment } from 'react';
import Header from './Header';
import GuideIntro from './GuideIntro';
import Documentation from './Documentation';
import guideintro from '../guideintro';
import '../css/flexie.css';
import '../css/grid.css';

class AuthHome extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="contain">
          <div className="g g-sb-ls">
            { guideintro.map(intro => 
              <GuideIntro 
                key={intro.title.toLowerCase()}
                details={intro} />
            )}
          </div>
        </section>
        <Documentation />
      </Fragment>
    );
  }
}

export default AuthHome;
