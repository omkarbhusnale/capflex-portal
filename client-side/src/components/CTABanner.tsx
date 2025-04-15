import { Link } from 'react-router-dom';
import '../styles/CTABanner.css';

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <div className="cta-banner-content">
        <div className="cta-banner-text">
          <h3 className="cta-banner-title">
            Capital Flex - Your Trusted Partner for Loan Guidance
          </h3>
          <h2 className="cta-banner-heading">
            Need Cash Fast? Get a Loan in Just a Few Simple Steps
          </h2>
        </div>
        <div className="cta-banner-button">
          <Link to="/apply" className="btn-secondary-icon">
            Apply Now <span className="btn-icon">›</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
