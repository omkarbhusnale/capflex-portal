import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import LoanTypes from '../components/LoanTypes';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import EMICalculator from '../components/EMICalculator';
import CompanyIntro from '../components/CompanyIntro';
import BusinessLoan from '../components/BusinessLoan';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        {/* Carousel Section - replaces Hero */}
        <Carousel />

        {/* Company Introduction Section */}
        <CompanyIntro />
      </div>

      {/* Loan Types Section */}
      <section className="section loan-types-section">
        <div className="container">
          <h3 className="section-subtitle">What We're Offering</h3>
          <h2 className="section-title">Discover Customized Loan Solutions Now</h2>
          <LoanTypes />
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="section emi-section">
        <div className="container">
          <h3 className="section-subtitle">Plan Your EMI</h3>
          <h2 className="section-title">Smart EMI, Easy Loans, Quick Decisions!</h2>
          <EMICalculator fullMode={true} title="" subtitle="" />
        </div>
      </section>

      {/* Business Loan Section */}
      <section className="section business-section">
        <div className="container">
          <BusinessLoan />
        </div>
      </section>

      {/* Lending Partners Section */}
      <section className="section partners-section">
        <div className="container">
          <h3 className="section-subtitle">Trusted & Reliable</h3>
          <h2 className="section-title">Our Lending Partner's</h2>
          <Partners />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customer's Say</h2>
          <Testimonials />
          <div className="text-center">
            <Link to="/testimonials" className="btn-primary-icon">
              View All <span className="btn-icon">›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
};

export default Home;
