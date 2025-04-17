import { Link, useSearchParams } from 'react-router-dom';
import EMICalculator from '../components/EMICalculator';
import '../styles/Calculartor.css';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Calculartor = () => {
  const [searchParams] = useSearchParams();
  const calculatorType = searchParams.get('calc') || 'eligibility';

  const faqs = [
    {
      question: 'What is the eligibility criteria for a Personal Loan?',
      answer:
        'To be eligible for a Personal Loan, you must be between 21-58 years of age, have a minimum monthly income of ₹15,000, and have a good credit score. Additionally, you should be either salaried with at least 1 year of work experience or self-employed with at least 2 years of business continuity.',
    },
    {
      question: 'What documents are required for a Personal Loan?',
      answer:
        "The required documents include KYC documents (PAN card, Aadhaar card, voter ID, etc.), income proof (salary slips, bank statements, ITR), and address proof. Salaried individuals need to submit the last 3 months' salary slips, while self-employed individuals need to provide business proof and financial statements.",
    },
    {
      question: 'How much loan amount can I get?',
      answer:
        'You can get a Personal Loan ranging from ₹50,000 to ₹20 lakhs, depending on your income, credit score, repayment capacity, and other factors. The final loan amount will be determined after evaluation of your application.',
    },
    {
      question: 'What is the interest rate for a Personal Loan?',
      answer:
        'The interest rate for Personal Loans starts from 11.9% p.a. and may vary based on your credit profile, income, employment status, and relationship with the lender.',
    },
    {
      question: 'Can I repay my Personal Loan before the tenure ends?',
      answer:
        'Yes, you can repay your Personal Loan before the end of the tenure through part-prepayment or full foreclosure. However, a nominal fee may be charged for prepayment, typically around 2-5% of the outstanding loan amount.',
    },
  ];

  return (
    <div className="eligibility-page">
      <div className="container">
        <div className="section testimonials-section">
          <h1 className="section-subtitle">Plan Your EMI</h1>
          <p className="section-title">Smart EMI, Easy Loans, Quick Decision</p>
          <EMICalculator fullMode={true} title="" subtitle="" />
        </div>

        {/* Testimonials Section */}
        <section className="section testimonials-section">
          <div className="container">
            <h3 className="section-subtitle">Testimonials</h3>
            <h2 className="section-title">What Our Customer's Say</h2>
            <Testimonials showAll={false} />
            <div className="text-center">
              <Link to="/testimonials" className="btn-primary-icon">
                View All <span className="btn-icon">›</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq-section">
          <div className="container">
            <FAQ
              faqs={faqs}
              title={`${calculatorType === 'emi' ? 'EMI' : 'Eligibility'} Calculator`}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calculartor;
