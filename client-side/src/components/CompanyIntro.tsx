import React from 'react';
import '../styles/CompanyIntro.css';
import fastApprovalIcon from '../assets/Home/FastEasyApprovals.png';
import flexibleLoanIcon from '../assets/Home/FlexibleLoanOptions.png';
import competitiveRatesIcon from '../assets/Home/CompetitveRates.png';
import customerFirstIcon from '../assets/Home/CustomerFirstApproach.png';
import companyImage from '../assets/Home/Company.svg';

const CompanyIntro: React.FC = () => {
  return (
    <div className="company-intro-section">
      <div className="company-intro-content">
        <h3 className="intro-subtitle">Company Introductions</h3>
        <h2 className="intro-title">
          Simplifying Loans, Building Dreams – Introducing Capital Flex
        </h2>
        <p className="intro-description">
          At Capital Flex, we make borrowing simple, seamless, and hassle-free. Whether it's a dream
          home, business expansion, or personal milestone, we provide tailored loan solutions to
          help you achieve your goals with confidence.
        </p>

        <div className="intro-features">
          <div className="feature-row">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={fastApprovalIcon} alt="Fast & Easy Approvals" />
              </div>
              <div className="feature-content">
                <h4>Fast & Easy Approvals</h4>
                <p>Say goodbye to long waiting times.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={flexibleLoanIcon} alt="Flexible Loan Options" />
              </div>
              <div className="feature-content">
                <h4>Flexible Loan Options</h4>
                <p>Customized plans that suit your needs.</p>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={competitiveRatesIcon} alt="Competitive Rates" />
              </div>
              <div className="feature-content">
                <h4>Competitive Rates</h4>
                <p>Affordable financing.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={customerFirstIcon} alt="Customer-First Approach" />
              </div>
              <div className="feature-content">
                <h4>Customer-First Approach</h4>
                <p>Your success is our priority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-image">
        <img src={companyImage} alt="Capital Flex" />
      </div>
    </div>
  );
};

export default CompanyIntro;
