import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carousel.css';

// Import banner images
import BannerHomeLoan from '../assets/Home/BannerHomeLoan.png';
import BannerPersonalLoan from '../assets/Home/BannerPersonalLoan.png';

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
      backgroundImage: BannerHomeLoan,
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
