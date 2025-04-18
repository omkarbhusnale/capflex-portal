import { useSearchParams } from 'react-router-dom';
import LoanCalculator from './LoanCalculator';
import '../styles/EMICalculator.css';

interface EMICalculatorProps {
  title?: string;
  subtitle?: string;
  fullMode?: boolean;
}

// When true, shows the actual calculator, when false, shows buttons
const EMICalculator = ({
  title = 'Smart EMI, Easy Loans, Quick Decisions!',
  subtitle = 'Plan Your EMI',
}: EMICalculatorProps) => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('calc') === 'emi' ? 'emi' : 'eligibility';

  return (
    <section className="emi-calculator-section">
      {subtitle && <div className="emi-subtitle">{subtitle}</div>}
      <h2 className="emi-title">{title}</h2>
      <LoanCalculator defaultType={defaultType} />
    </section>
  );
};

export default EMICalculator;
