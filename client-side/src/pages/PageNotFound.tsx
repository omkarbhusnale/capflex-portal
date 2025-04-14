import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/notFound.jpg';

const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found" style={{ textAlign: 'center', padding: '1rem 1rem' }}>
      <img src={pageNotFound} alt="Page Not Found" style={{ width: '50%', height: '50%' }} />
      <p style={{ marginBottom: '2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
