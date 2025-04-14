import '../styles/Partners.css';
import Axis from '../assets/partners/axis.png';
import BOI from '../assets/partners/boi.png';
import CBI from '../assets/partners/cbi.png';
import ICICI from '../assets/partners/icici.png';
import SBI from '../assets/partners/sbi.png';
import Indian from '../assets/partners/indian.png';
import Kotak from '../assets/partners/kotak.png';
import Yes from '../assets/partners/yes.png';

const Partners = () => {
  const partners = [
    { id: 1, name: 'Axis Bank', src: Axis },
    { id: 2, name: 'BOI Bank', src: BOI },
    { id: 3, name: 'CBI Bank', src: CBI },
    { id: 4, name: 'ICICI Bank', src: ICICI },
    { id: 5, name: 'SBI Bank', src: SBI },
    { id: 6, name: 'Indian Bank', src: Indian },
    { id: 7, name: 'Kotak Bank', src: Kotak },
    { id: 8, name: 'Yes Bank', src: Yes },
  ];

  // Double the partners array to create a seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <div className="partners-carousel-container">
      <div className="partners-track">
        <div className="partners-carousel">
          {allPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-card">
              <div className="partner-logo">
                <img src={partner.src} alt={partner.name} className="partner-logo-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
