import FAQItem from './FAQItem';
import '../styles/FAQ.css';

interface FAQProps {
  faqs: {
    question: string;
    answer: string;
  }[];
  title?: string;
}

const FAQ = ({ faqs, title = '' }: FAQProps) => {
  return (
    <div className="faq-container">
      <h2 className="section-subtitle">{title}</h2>
      <h3 className="section-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === 0} // First FAQ is open by default
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
