import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoanTypes.css';
import bullet from '../assets/Home/Bullet.png';

interface LoanType {
  id: string;
  name: string;
  path: string;
  tagline: string;
  description: string;
  icon?: string;
  attributes: string[][];
}

const LoanTypes = () => {
  const [selectedLoan, setSelectedLoan] = useState<string>('personal');
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Check for mobile view on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add event listeners for carousel navigation buttons
  useEffect(() => {
    const handlePrevClick = () => {
      if (cardsContainerRef.current) {
        cardsContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    };

    const handleNextClick = () => {
      if (cardsContainerRef.current) {
        cardsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    const prevButton = document.querySelector('.carousel-arrow-prev');
    const nextButton = document.querySelector('.carousel-arrow-next');

    prevButton?.addEventListener('click', handlePrevClick);
    nextButton?.addEventListener('click', handleNextClick);

    return () => {
      prevButton?.removeEventListener('click', handlePrevClick);
      nextButton?.removeEventListener('click', handleNextClick);
    };
  }, []);

  const loanTypes: LoanType[] = [
    {
      id: 'personal',
      name: 'Personal Loan',
      path: '/services/personal-loan',
      tagline: 'Quick and Easy Financing at Competitive Rates',
      description: `Need funds for an emergency, a big purchase, or to consolidate debt? Our Personal Loan 
                    offers a hassle-free solution with quick approvals, minimal documentation, and attractive 
                    interest rates.`,
      icon: '👤',
      attributes: [
        ['Fast Processing', 'Get funds when you need them.'],
        ['Flexible Repayment Options', 'Choose a tenure that fits your budget.'],
        ['Competitive Interest Rates', 'Affordable EMIs to ease your financial burden.'],
        ['No Collateral Required', 'Get a loan without pledging assets.'],
      ],
    },
    {
      id: 'business',
      name: 'Business Loan',
      path: '/services/business-loan',
      tagline: 'Power Your Business Growth',
      description: `Looking to expand operations, invest in equipment, or manage working capital? 
                    Our Business Loan provides a convenient and fast way to meet your professional goals.`,
      icon: '📊',
      attributes: [
        ['Quick Disbursal', 'Access funds without lengthy delays.'],
        ['Tailored Loan Amounts', 'Choose a loan size that suits your business needs.'],
        ['Affordable Interest Rates', 'Competitive pricing to support your profitability.'],
        ['Minimal Documentation', ' Focus on business, not paperwork.'],
      ],
    },
    {
      id: 'home',
      name: 'Home Loan',
      path: '/services/home-loan',
      tagline: 'Turn Your Dream Home Into Reality',
      description: `Buying a new home or renovating your existing one? 
                    Our Home Loan offers flexible options with great interest rates to help you make that big move.`,
      icon: '🏠',
      attributes: [
        ['Attractive Interest Rates', 'Enjoy lower EMIs with competitive rates.'],
        ['Flexible Tenures ', 'Repay comfortably over a period that suits you.'],
        ['High Loan Eligibility', 'Get the financial support you need for your dream home.'],
        ['Quick Approvals', 'Move into your new home sooner.'],
      ],
    },
    {
      id: 'auto',
      name: 'Auto Loan',
      path: '/services/auto-loan',
      tagline: 'Drive Home Your Dream Car',
      description: `Whether it’s a brand-new car or a pre-owned one, our Auto Loan is designed to make ownership easy and affordable.`,
      icon: '🚗',
      attributes: [
        ['Fast Loan Processing', 'Hit the road without long waits.'],
        ['Attractive EMIs', 'Manageable payments that fit your budget.'],
        ['Financing for New & Used Cars', 'Flexible options to suit your preference.'],
        ['Easy Documentation', 'Simple process, quick approval.'],
      ],
    },
    {
      id: 'property',
      name: 'Loan Against Property',
      path: '/services/property-loan',
      tagline: 'Unlock the Value of Your Property',
      description: `Get access to substantial funds by leveraging your residential or commercial property without giving up ownership.`,
      icon: '🏘️',
      attributes: [
        ['High Loan Amounts', 'Get higher financing based on property value.'],
        ['Lower Interest Rates', 'Enjoy affordable borrowing costs.'],
        ['Flexible Repayment Terms', 'Choose a plan that suits your income cycle.'],
        ['Use for Any Purpose', 'Personal or business, your choice.'],
      ],
    },
    {
      id: 'commercial',
      name: 'Commercial Vehicle Loan',
      path: '/services/commercial-vehicle-loan',
      tagline: 'Fuel Your Transport Business',
      description: `Whether expanding your fleet or buying your first commercial vehicle, 
                    we offer financing that keeps your business on the move.`,
      icon: '🚚',
      attributes: [
        ['Quick Sanction & Disbursal', 'Get vehicles on the road faster.'],
        ['Competitive Rates', 'Low-interest plans to manage costs better.'],
        ['Loan for New & Used Vehicles', 'Choose what works for you.'],
        ['Customizable Tenure Options', 'Flexible plans to fit your cash flow.'],
      ],
    },
    {
      id: 'working',
      name: 'Working Capital Loan',
      path: '/services/working-capital-loan',
      tagline: 'Empower Daily Operations',
      description: `Manage your day-to-day operations seamlessly with quick access to working capital that helps you stay on top of business.`,
      icon: '💼',
      attributes: [
        ['Smooth Cash Flow Management', 'Never let funds slow you down.'],
        ['Quick Processing', 'Timely support when you need it most.'],
        ['No Collateral Required', 'Keep operations light and flexible.'],
        ['Flexible Tenure', 'Match repayments to your revenue cycle.'],
      ],
    },
    {
      id: 'two-wheeler',
      name: 'Two Wheeler Loan',
      path: '/services/two-wheeler-loan',
      tagline: 'Own Your Ride, Effortlessly',
      description: `Whether for convenience or passion, owning a bike has never been this easy. Our Two Wheeler Loan makes it affordable and hassle-free.`,
      icon: '🏍️',
      attributes: [
        ['Low Down Payment', 'Ride away with minimal upfront cost.'],
        ['Instant Approval', 'Quick loan processing for faster delivery.'],
        ['Affordable EMIs', 'Light on your pocket, heavy on convenience.'],
        ['Loan for All Types of Bikes', 'From scooters to sports bikes.'],
      ],
    },
  ];

  const handleLoanSelect = (loanId: string) => {
    setSelectedLoan(loanId);
  };

  const selectedLoanData = loanTypes.find((loan) => loan.id === selectedLoan) || loanTypes[0];

  // Render cards view for mobile/tablet
  const renderCardsView = () => {
    // For mobile view, show only first 6 cards with pagination (simplified for now)
    const displayedLoans = loanTypes.slice(0, 6);

    return (
      <div className="loan-cards-container" ref={cardsContainerRef}>
        {displayedLoans.map((loan) => (
          <div key={loan.id} className="loan-card">
            <div className="loan-card-icon">{loan.icon}</div>
            <h3 className="loan-card-title">{loan.name}</h3>
            <p className="loan-card-description">{loan.tagline}</p>
            <div className="loan-card-actions">
              <Link to="/apply" className="loan-card-link apply-now">
                Apply Now
              </Link>
              <Link to={loan.path} className="loan-card-link learn-more">
                Learn More
              </Link>
            </div>
          </div>
        ))}
        <div className="loan-cards-pagination">
          <span className="pagination-dot active"></span>
        </div>
      </div>
    );
  };

  // Render sidebar view for desktop
  const renderSidebarView = () => {
    return (
      <div className="loan-types-container">
        <div className="loan-types-sidebar">
          <ul className="loan-types-list">
            {loanTypes.map((loan) => (
              <li
                key={loan.id}
                className={`loan-type-item ${selectedLoan === loan.id ? 'active' : ''}`}
              >
                <button onClick={() => handleLoanSelect(loan.id)} className="loan-type-button">
                  {loan.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Type Detail */}
        <div className="loan-type-detail">
          <h2 className="loan-detail-title">{selectedLoanData.name}</h2>
          <p className="loan-detail-tagline">{selectedLoanData.tagline}</p>

          <h3 className="loan-detail-subtitle">Why Choose Our {selectedLoanData.name}?</h3>

          <p className="loan-detail-description">{selectedLoanData.description}</p>

          <div className="loan-attributes">
            {selectedLoanData.attributes.map((attribute, index) => (
              <div key={index} className="loan-attribute">
                <div className="loan-attribute-icon">
                  <img src={bullet} alt="bullet" />
                </div>
                <div className="loan-attribute-content">
                  <h4 className="loan-attribute-title">
                    {attribute[0]} -{' '}
                    <span className="loan-attribute-description">{attribute[1]}</span>
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="loan-actions">
            <Link to="/apply" className="btn btn-primary">
              Apply Now <span className="arrow">›</span>
            </Link>
            <Link to={selectedLoanData.path} className="btn btn-secondary">
              Learn More <span className="arrow">›</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return isMobileView ? renderCardsView() : renderSidebarView();
};

export default LoanTypes;
