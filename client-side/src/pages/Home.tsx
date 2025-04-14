import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import LoanTypes from '../components/LoanTypes';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import EMICalculator from '../components/EMICalculator';
import CompanyIntro from '../components/CompanyIntro';

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
          <div className="grid grid-2">
            <div className="business-content">
              <h3>Get to Know About</h3>
              <h1>Flexible and Quick Business Loans For You</h1>
              <div className="features-list">
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Very Low Interest Rates on All Loans</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">99.9% Success Rate Guarantee</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Flexible with Your Repayments</div>
                </div>
              </div>
            </div>
            <div className="business-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus sit
                amet risus tincidunt consectetur. Phasellus imperdiet neque non justo condimentum
                feugiat. Praesent orci massa, fringilla non convallis sed, aliquam a metus. Aliquam
                convallis arcu non nibh gravida, ut lacinia metus ornare. Aenean in nulla nec arcu
                facilisis faucibus. Duis egestas euismod purus vitae hendrerit. Aliquam erat
                volutpat. Suspendisse nec massa nec augue bibendum convallis. Cras vehicula nunc
                vitae dictum lacinia. Nulla ut cursus nisi, vitae mollis arcu. Nunc dapibus
                fringilla velit, et posuere magna fringilla in. Maecenas convallis lorem eu nisi
                facilisis, ac euismod tortor maximus. Cras rhoncus purus tincidunt, elementum ex
                sed, aliquam lacus.
              </p>
            </div>
          </div>
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
            <Link to="/testimonials" className="btn btn-primary">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Get a Loan Quickly</h2>
            <p>Capital Flex - Your Trusted Partner for Loan Guidance</p>
            <Link to="/apply" className="btn btn-primary">
              Apply For Loan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
