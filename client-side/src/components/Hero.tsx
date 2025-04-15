import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  url: string;
  primary: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctaButtons: ButtonProps[];
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaButtons }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-cta">
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                to={button.url}
                className={`btn ${
                  button.primary ? "btn-primary" : "btn-secondary"
                }`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
