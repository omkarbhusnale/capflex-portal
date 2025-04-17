import { useState } from 'react';
import '../styles/FAQItem.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQItem = ({ question, answer, isOpen = false }: FAQItemProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <button className="faq-question" onClick={toggleExpand}>
        <span>{question}</span>
        <span className="faq-icon">{isExpanded ? '-' : '+'}</span>
      </button>
      {isExpanded && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
