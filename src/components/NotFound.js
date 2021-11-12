import { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <section style={{ width: `100vw`, height: `100vh`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginTop: '-200px' }}>
                    <h1 style={{ textAlign: 'center', color: '#f4d47c' }}>404 Not Found!</h1>
                    <button className="btn" style={{ background: '#f4d47c', color: '#3e3e3e', border: '1px solid transparent', marginTop: '20px' }}>Back to Auth Guide</button>
                </div>
            </section>
        </Fragment>
    );
}

export default NotFound;