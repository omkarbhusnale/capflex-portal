import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carousel.css';

// Import banner images
import BannerHomeLoan from '../assets/Home/Banners/HomeLoanBanner.png';
import BannerPersonalLoan from '../assets/Home/Banners/PersonalLoanBanner.png';
import BannerBusinessLoan from '../assets/Home/Banners/BusinessLoanBanner.png';
import BannerCommercialVehicleLoan from '../assets/Home/Banners/CommercialVehicleLoanBanner.png';
import BannerLoanAgainstProperty from '../assets/Home/Banners/LoanAgainstPropertyBanner.png';
import BannerWorkingCapitalLoan from '../assets/Home/Banners/WorkingCapitalLoanBanner.png';
import BannerReferEarn from '../assets/Home/Banners/ReferEarnBanner.png';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  loanType: string;
  backgroundImage: string;
  primaryCta: {
    text: string;
    url: string;
  };
  secondaryCta?: {
    text: string;
    url: string;
  };
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Your Dreams Come True',
      subtitle: 'Quick and easy finances at competitive interest rates.',
      loanType: 'Personal Loan',
      backgroundImage: BannerPersonalLoan,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/personal-loan',
      },
    },
    {
      id: 2,
      title: 'Business Loans Made Simple',
      subtitle: 'Fund your business growth with our flexible loan options.',
      loanType: 'Business Loan',
      backgroundImage: BannerBusinessLoan,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/business-loan',
      },
    },
    {
      id: 3,
      title: 'TURN YOUR DREAM HOME INTO REALITY!',
      subtitle:
        'Get instant approval on Home Loans with low interest rates, easy EMIs, and flexible tenure.',
      loanType: 'HOME LOANS STARTING AT JUST 8.25%*',
      backgroundImage: BannerHomeLoan,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/home-loan',
      },
    },
    {
      id: 4,
      title: 'Get Instant Approval on Commercial Vehicle Loans',
      subtitle: 'Drive your business forward with our flexible commercial vehicle loan options.',
      loanType: 'Commercial Vehicle Loan',
      backgroundImage: BannerCommercialVehicleLoan,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/commercial-vehicle-loan',
      },
    },
    {
      id: 5,
      title: 'Get Instant Approval on Loan Against Property',
      subtitle: 'Secure your future with our flexible loan options.',
      loanType: 'Loan Against Property',
      backgroundImage: BannerLoanAgainstProperty,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/loan-against-property',
      },
    },
    {
      id: 6,
      title: 'Get Instant Approval on Working Capital Loans',
      subtitle: 'Fund your business growth with our flexible loan options.',
      loanType: 'Working Capital Loan',
      backgroundImage: BannerWorkingCapitalLoan,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/working-capital-loan',
      },
    },
    {
      id: 7,
      title: 'Refer and Earn',
      subtitle: 'Earn rewards by referring friends to our services.',
      loanType: 'Refer and Earn',
      backgroundImage: BannerReferEarn,
      primaryCta: {
        text: 'Apply Now',
        url: '/apply',
      },
      secondaryCta: {
        text: 'Learn More',
        url: '/services/refer-and-earn',
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // Check for mobile view and auto-rotate slides
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial values
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
            }}
          >
            <div className="carousel-buttons">
              <Link to={item.primaryCta.url} className="btn btn-primary">
                {item.primaryCta.text}
              </Link>
              {!isMobile && item.secondaryCta && (
                <Link to={item.secondaryCta.url} className="btn btn-secondary">
                  {item.secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>

      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
