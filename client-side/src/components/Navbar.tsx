import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import creditScoreIcon from '../assets/Home/CreditScore.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if page is scrolled more than 50px
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Reset active dropdown when closing the menu
    if (menuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    // For mobile view only
    if (window.innerWidth <= 992) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="CapitalFlex" className="logo-image" />
          </Link>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={`nav-item dropdown ${activeDropdown === 'products' ? 'active' : ''}`}>
              <span className="nav-link" onClick={() => toggleDropdown('products')}>
                Our Products{' '}
                <span className="dropdown-arrow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 10L12 14L8 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <div className={`dropdown-content ${activeDropdown === 'products' ? 'show' : ''}`}>
                <Link to="/services/personal-loan" onClick={() => setMenuOpen(false)}>
                  Personal Loan
                </Link>
                <Link to="/services/business-loan" onClick={() => setMenuOpen(false)}>
                  Business Loan
                </Link>
                <Link to="/services/home-loan" onClick={() => setMenuOpen(false)}>
                  Home Loan
                </Link>
                <Link to="/services/auto-loan" onClick={() => setMenuOpen(false)}>
                  Auto Loan
                </Link>
                <Link to="/services/loan-against-property" onClick={() => setMenuOpen(false)}>
                  Loan Against Property
                </Link>
                <Link to="/services/commercial-vehicle-loan" onClick={() => setMenuOpen(false)}>
                  Commercial Vehicle Loan
                </Link>
                <Link to="/services/working-capital-loan" onClick={() => setMenuOpen(false)}>
                  Working Capital Loan
                </Link>
              </div>
            </li>
            <li className={`nav-item dropdown ${activeDropdown === 'resources' ? 'active' : ''}`}>
              <span className="nav-link" onClick={() => toggleDropdown('resources')}>
                Resources{' '}
                <span className="dropdown-arrow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 10L12 14L8 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <div className={`dropdown-content ${activeDropdown === 'resources' ? 'show' : ''}`}>
                <Link to="/resources/emi-calculator?calc=emi" onClick={() => setMenuOpen(false)}>
                  EMI Calculator
                </Link>
                <Link
                  to="/resources/eligibility-calculator?calc=eligibility"
                  onClick={() => setMenuOpen(false)}
                >
                  Eligibility Calculator
                </Link>
                <Link to="/resources/apply-now" onClick={() => setMenuOpen(false)}>
                  Apply Now
                </Link>
                <Link to="/resources/track" onClick={() => setMenuOpen(false)}>
                  Track
                </Link>
                <Link to="/resources/faqs" onClick={() => setMenuOpen(false)}>
                  FAQ's
                </Link>
                <Link to="/resources/blogs" onClick={() => setMenuOpen(false)}>
                  Blogs
                </Link>
                <Link to="/resources/testimonials" onClick={() => setMenuOpen(false)}>
                  Testimonials
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Move buttons inside nav-menu for mobile view */}
          <div className="nav-buttons mobile-buttons">
            <Link to="/credit-score" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              <div className="credit-score-icon-container">
                <img src={creditScoreIcon} alt="Credit Score" className="credit-score-icon" />
                Check Credit Score
              </div>
            </Link>
            <Link to="/refer" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
              Refer & Earn
            </Link>
          </div>
        </nav>

        {/* Keep buttons here for desktop view */}
        <div className="nav-buttons desktop-buttons">
          <Link to="/credit-score" className="btn btn-primary">
            <div className="credit-score-icon-container">
              <img src={creditScoreIcon} alt="Credit Score" className="credit-score-icon" />
              Check Credit Score
            </div>
          </Link>
          <Link to="/refer" className="btn btn-secondary">
            Refer & Earn
          </Link>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
