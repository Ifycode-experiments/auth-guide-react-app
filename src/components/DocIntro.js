import { Fragment } from 'react';
import PropTypes from 'prop-types';

const DocIntro = (props) => {
  const details = props.details;
  return (
    <Fragment>
      <article className="intro">
        <div className="icon">
          <img src={details.image.url} alt={details.image.alt} />
        </div>
        <div>
          <h1>{details.title}</h1>
          <p>{details.paragraph}</p>
        </div>
      </article>
    </Fragment>
  )
};

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
