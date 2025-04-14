import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/logo.svg';
import facebookIcon from '../assets/MediaIcons/FacebookIcon.png';
import twitterIcon from '../assets/MediaIcons/TwitterIcon.png';
import instagramIcon from '../assets/MediaIcons/InstagramIcon.png';
import linkedinIcon from '../assets/MediaIcons/LinkedinIcon.png';
import mailIcon from '../assets/MediaIcons/MailIcon.png';
import phoneIcon from '../assets/MediaIcons/PhoneIcon.png';
import AddressIcon from '../assets/MediaIcons/AddressIcon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-image-container">
              <Link to="/">
                <img src={logo} alt="CapitalFlex" className="footer-logo-image" />
              </Link>
            </div>
            <p className="footer-description">
              At Capital Flex, we make borrowing simple, seamless, and hassle-free. Whether it’s a
              dream home, business expansion, or personal milestone, we provide tailored loan
              solutions to help you achieve your goals with confidence.
            </p>
          </div>

          <div className="footer-sections">
            <div className="footer-section">
              <h3>Explore</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link to="/loan-application">Loan Application</Link>
                </li>
                <li>
                  <Link to="/emi-calculator">EMI Calculator</Link>
                </li>
                <li>
                  <Link to="/eligibility-calculator">Eligibility Calculator</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
              <div className="social-media-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" aria-label="Facebook" className="social-icon">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="#" aria-label="Twitter" className="social-icon">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="#" aria-label="Instagram" className="social-icon">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="social-icon">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <ul className="contact-info">
                <li>
                  <span className="contact-icon">
                    <img src={mailIcon} alt="Mail" />
                  </span>
                  <a href="mailto:info@capitalflex.com">info@capitalflex.com</a>
                </li>
                <li>
                  <span className="contact-icon">
                    <img src={phoneIcon} alt="Phone" />
                  </span>
                  <span>Contact Number</span>
                </li>
                <li>
                  <span className="contact-icon">
                    <img src={AddressIcon} alt="Address" />
                  </span>
                  <span>Address</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Capital Flex. All rights reserved.</p>
          <ul className="footer-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
