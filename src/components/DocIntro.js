import { Fragment } from 'react';

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

export default DocIntro;
