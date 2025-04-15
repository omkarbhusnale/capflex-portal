import '../styles/BusinessLoan.css';
import lowInterestIcon from '../assets/Home/LowInterestRates.png';
import successRateIcon from '../assets/Home/SuccessRateGuarantee.png';
import flexibleRepaymentIcon from '../assets/Home/FlexibleLoanOptions.png';

const BusinessLoan = () => {
  return (
    <div className="business-loan-container">
      <div className="business-loan-subtitle-container">
        <h3 className="business-loan-subtitle">Get to Know About</h3>
      </div>
      
      <div className="business-loan-content">
        <div className="business-loan-title-container">
          <h2 className="business-loan-title">Flexible & Quick Business Loans For You</h2>
        </div>
        
        <div className="business-loan-description-container">
          <div className="business-loan-description">
            <p>
              Whether you're expanding your business, managing cash flow, or launching a new venture, our
              tailored business loan solutions are designed to support your goals. We make financing easy,
              fast, and accessible—so you can focus on what really matters: growing your business.
            </p>
            <p>
              With simple application processes, competitive rates, and flexible repayment plans, we help
              businesses like yours thrive.
            </p>
          </div>
        </div>
      </div>

      <div className="business-loan-cards-wrapper">
        <div className="business-loan-card">
          <div className="business-loan-card-icon">
            <img src={lowInterestIcon} alt="Low Interest Rates" />
          </div>
          <h3 className="business-loan-card-title">Very Low Interest Rates on All Loans</h3>
        </div>

        <div className="business-loan-card">
          <div className="business-loan-card-icon">
            <img src={successRateIcon} alt="Success Rate Guarantee" />
          </div>
          <h3 className="business-loan-card-title">99.9% Success Rate Guarantee</h3>
        </div>

        <div className="business-loan-card">
          <div className="business-loan-card-icon">
            <img src={flexibleRepaymentIcon} alt="Flexible Repayments" />
          </div>
          <h3 className="business-loan-card-title">Flexible with Your Repayments</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan; 