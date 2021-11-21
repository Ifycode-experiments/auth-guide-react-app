import { Fragment } from 'react';
import PropTypes from 'prop-types';

const DocIntro = (props) => (
  <Fragment>
    <article className="intro">
      <div className="icon">
        <img src={props.details.image.url} alt={props.details.image.alt} />
      </div>
      <div>
        <h1>{props.details.title}</h1>
        <p>{props.details.paragraph}</p>
      </div>
    </article>
  </Fragment>
);

DocIntro.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    image: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string
    })
  })
}

export default DocIntro;
