import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <section style={{ width: `100vw`, height: `100vh`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ marginTop: '-100px' }}>
          <h1 style={{ textAlign: 'center', color: '#f4d47c' }}>404 Not Found!</h1>
          <button style={{ background: 'transparent', padding: '0', marginTop: '20px' }}>
            <Link to='/' className="btn" style={{ textDecoration: 'none', background: '#f4d47c', color: '#3e3e3e', border: '1px solid transparent' }}>Back to Auth Guide</Link>
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default NotFound;
