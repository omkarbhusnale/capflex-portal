import '../styles/Partners.css';
import Axis from '../assets/Partners/Axis.png';
import BOI from '../assets/Partners/BOI.png';
import CBI from '../assets/Partners/CBI.png';
import ICICI from '../assets/Partners/ICICI.png';
import SBI from '../assets/Partners/SBI.png';
import Indian from '../assets/Partners/Indian.png';
import Kotak from '../assets/Partners/Kotak.png';
import Yes from '../assets/Partners/Yes.png';

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
