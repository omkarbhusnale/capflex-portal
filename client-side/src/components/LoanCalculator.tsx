import { useState, useEffect } from 'react';
import '../styles/LoanCalculator.css';
import { useNavigate } from 'react-router-dom';

// Define our calculator types
type CalculatorType = 'emi' | 'eligibility';

// Define loan product types
type LoanProductType =
  | 'Personal Loan'
  | 'Business Loan'
  | 'Home Loan'
  | 'Auto Loan'
  | 'Loan Against Property'
  | 'Commercial Vehicle Loan'
  | 'Working Capital Loan';

// Define loan product config
interface LoanProductConfig {
  minAmount: number;
  maxAmount: number;
  minInterest: number;
  maxInterest: number;
  minTenureMonths: number;
  maxTenureMonths: number;
  minTenureYears: number;
  maxTenureYears: number;
  minIncome: number;
  maxIncome: number;
  minMonthlyObligation: number;
  maxMonthlyObligation: number;
}

interface LoanCalculatorProps {
  defaultType?: CalculatorType;
  className?: string;
}

const LoanCalculator = ({ defaultType = 'emi', className = '' }: LoanCalculatorProps) => {
  const navigate = useNavigate();

  // State for calculator type
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(defaultType);

  // State for selected loan product
  const [selectedProduct, setSelectedProduct] = useState<LoanProductType>('Personal Loan');

  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // EMI Calculator States
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(8);
  const [loanDuration, setLoanDuration] = useState<number>(3);
  const [durationType, setDurationType] = useState<'Months' | 'Year'>('Months');

  // Eligibility Calculator States
  const [netIncome, setNetIncome] = useState<number>(2000);
  const [monthlyObligation, setMonthlyObligation] = useState<number>(0);

  // Results
  const [monthlyEMI, setMonthlyEMI] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [principalPercentage, setPrincipalPercentage] = useState<number>(80);
  const [interestPercentage, setInterestPercentage] = useState<number>(20);

  // Eligibility Results
  const [eligibleAmount, setEligibleAmount] = useState<number>(0);
  const [eligibleEMI, setEligibleEMI] = useState<number>(0);

  // Product configurations
  const productConfigs: Record<LoanProductType, LoanProductConfig> = {
    'Personal Loan': {
      minAmount: 100000,
      maxAmount: 3000000,
      minInterest: 8,
      maxInterest: 30,
      minTenureMonths: 3,
      maxTenureMonths: 60,
      minTenureYears: 1,
      maxTenureYears: 5,
      minIncome: 200000,
      maxIncome: 5000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
    'Business Loan': {
      minAmount: 1000000,
      maxAmount: 50000000,
      minInterest: 10,
      maxInterest: 25,
      minTenureMonths: 6,
      maxTenureMonths: 84,
      minTenureYears: 1,
      maxTenureYears: 7,
      minIncome: 1000000,
      maxIncome: 100000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
    'Home Loan': {
      minAmount: 5000000,
      maxAmount: 500000000,
      minInterest: 6,
      maxInterest: 15,
      minTenureMonths: 12,
      maxTenureMonths: 360,
      minTenureYears: 1,
      maxTenureYears: 30,
      minIncome: 20000,
      maxIncome: 20000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
    'Auto Loan': {
      minAmount: 50000,
      maxAmount: 2000000,
      minInterest: 7,
      maxInterest: 18,
      minTenureMonths: 12,
      maxTenureMonths: 84,
      minTenureYears: 1,
      maxTenureYears: 7,
      minIncome: 10000,
      maxIncome: 5000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
    'Loan Against Property': {
      minAmount: 500000,
      maxAmount: 100000000,
      minInterest: 8,
      maxInterest: 15,
      minTenureMonths: 12,
      maxTenureMonths: 240,
      minTenureYears: 1,
      maxTenureYears: 20,
      minIncome: 25000,
      maxIncome: 30000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
    'Commercial Vehicle Loan': {
      minAmount: 200000,
      maxAmount: 10000000,
      minInterest: 9,
      maxInterest: 20,
      minTenureMonths: 12,
      maxTenureMonths: 72,
      minTenureYears: 1,
      maxTenureYears: 6,
      minIncome: 15000,
      maxIncome: 10000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
    'Working Capital Loan': {
      minAmount: 300000,
      maxAmount: 20000000,
      minInterest: 9,
      maxInterest: 22,
      minTenureMonths: 12,
      maxTenureMonths: 60,
      minTenureYears: 1,
      maxTenureYears: 5,
      minIncome: 25000,
      maxIncome: 15000000,
      minMonthlyObligation: 500,
      maxMonthlyObligation: 100000,
    },
  };

  // Get current product config
  const currentConfig = productConfigs[selectedProduct];

  // Update loan values when product changes
  useEffect(() => {
    const config = productConfigs[selectedProduct];

    // Update loan amount within product range
    setLoanAmount(Math.max(config.minAmount, Math.min(loanAmount, config.maxAmount)));

    // Update interest rate within product range
    setInterestRate(Math.max(config.minInterest, Math.min(interestRate, config.maxInterest)));

    // Update loan duration within product range
    const maxDuration = durationType === 'Months' ? config.maxTenureMonths : config.maxTenureYears;
    const minDuration = durationType === 'Months' ? config.minTenureMonths : config.minTenureYears;
    setLoanDuration(Math.max(minDuration, Math.min(loanDuration, maxDuration)));

    // Update net income within product range
    setNetIncome(Math.max(config.minIncome, Math.min(netIncome, config.maxIncome)));

    // Update monthly obligation within product range
    setMonthlyObligation(
      Math.max(
        config.minMonthlyObligation,
        Math.min(monthlyObligation, config.maxMonthlyObligation)
      )
    );
  }, [selectedProduct]);

  // Handle selecting a product
  const handleProductSelect = (product: LoanProductType) => {
    setSelectedProduct(product);
    setIsDropdownOpen(false);
  };

  // Toggle duration type
  const toggleDurationType = (type: 'Months' | 'Year') => {
    if (type === durationType) return;

    const config = productConfigs[selectedProduct];
    // Convert duration when changing type
    if (type === 'Months' && durationType === 'Year') {
      // Convert years to months
      const newDuration = Math.min(loanDuration * 12, config.maxTenureMonths);
      setLoanDuration(newDuration);
    } else if (type === 'Year' && durationType === 'Months') {
      // Convert months to years
      const newDuration = Math.max(Math.ceil(loanDuration / 12), config.minTenureYears);
      setLoanDuration(Math.min(newDuration, config.maxTenureYears));
    }

    setDurationType(type);
  };

  // Calculate EMI when relevant values change
  useEffect(() => {
    if (calculatorType === 'emi') {
      calculateEMI();
    } else {
      calculateEligibility();
    }
  }, [
    loanAmount,
    loanDuration,
    durationType,
    interestRate,
    netIncome,
    monthlyObligation,
    calculatorType,
  ]);

  // EMI calculation function
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalMonths = durationType === 'Year' ? loanDuration * 12 : loanDuration;

    if (principal <= 0 || totalMonths <= 0 || monthlyInterestRate <= 0) {
      setMonthlyEMI(0);
      setTotalInterest(0);
      setTotalAmount(0);
      setPrincipalPercentage(100);
      setInterestPercentage(0);
      return;
    }

    // EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    const totalAmountPayable = emi * totalMonths;
    const totalInterestPayable = totalAmountPayable - principal;

    // Calculate percentages for pie chart
    const principalPercent = (principal / totalAmountPayable) * 100;
    const interestPercent = (totalInterestPayable / totalAmountPayable) * 100;

    setMonthlyEMI(Math.round(emi));
    setTotalInterest(Math.round(totalInterestPayable));
    setTotalAmount(Math.round(totalAmountPayable));
    setPrincipalPercentage(principalPercent);
    setInterestPercentage(interestPercent);
  };

  // Eligibility calculation function
  const calculateEligibility = () => {
    // Typically, banks allow 40-50% of monthly income for EMI payments
    // Subtract monthly obligations to get actual available amount for loan EMI
    const monthlyAllowedAmount = netIncome * 0.5 - monthlyObligation;

    const monthlyInterestRate = interestRate / 100 / 12;
    const totalMonths = durationType === 'Year' ? loanDuration * 12 : loanDuration;

    if (monthlyAllowedAmount <= 0 || totalMonths <= 0 || monthlyInterestRate <= 0) {
      setEligibleAmount(0);
      setEligibleEMI(0);
      return;
    }

    // P = EMI * ((1+r)^n - 1) / (r * (1+r)^n)
    const principal =
      monthlyAllowedAmount *
      ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) /
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)));

    setEligibleAmount(Math.round(principal));
    setEligibleEMI(Math.round(monthlyAllowedAmount));
  };

  // Format currency values
  const formatCurrency = (value: number): string => {
    return '₹' + value.toLocaleString('en-IN');
  };

  const formatCurrencyWithDecimal = (value: number): string => {
    return '₹' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Handle Apply Now button
  const handleApplyNow = () => {
    if (calculatorType === 'emi') {
      navigate(
        `/apply?product=${encodeURIComponent(
          selectedProduct
        )}&amount=${loanAmount}&tenure=${loanDuration}&tenureType=${durationType}&interest=${interestRate}`
      );
    } else {
      navigate(
        `/apply?product=${encodeURIComponent(
          selectedProduct
        )}&amount=${eligibleAmount}&tenure=${loanDuration}&tenureType=${durationType}&interest=${interestRate}`
      );
    }
  };

  return (
    <div className={`loan-calculator ${className}`}>
      <div className="calculator-selection">
        {/* Product Selection Dropdown */}
        <div className="product-selector">
          <div className="select-dropdown">
            <div className="select-box" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span>{selectedProduct}</span>
              <span className="arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 10L12 14L8 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {Object.keys(productConfigs).map((product) => (
                  <div
                    key={product}
                    className={`dropdown-item ${selectedProduct === product ? 'active' : ''}`}
                    onClick={() => handleProductSelect(product as LoanProductType)}
                  >
                    {product}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* EMI Calculator Buttons */}
        <button
          className={`calculator-btn ${calculatorType === 'emi' ? 'active' : ''}`}
          onClick={() => setCalculatorType('emi')}
        >
          EMI Calculator
        </button>

        {/* Eligibility Calculator Buttons */}
        <button
          className={`calculator-btn ${calculatorType === 'eligibility' ? 'active' : ''}`}
          onClick={() => setCalculatorType('eligibility')}
        >
          Eligibility Calculator
        </button>
      </div>

      <div className="calculator-body">
        {calculatorType === 'emi' && (
          <div className="calculator-content">
            <div className="calculator-inputs">
              <div className="input-field">
                <label htmlFor="loan-amount">Loan Amount</label>
                <div className="value-display">
                  <span className="currency-symbol">₹</span>
                  <span className="display-value">{loanAmount.toLocaleString()}</span>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min={currentConfig.minAmount}
                    max={currentConfig.maxAmount}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>₹ {currentConfig.minAmount.toLocaleString()}</span>
                    <span>₹ {currentConfig.maxAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="interest-rate">Interest Rate</label>
                <div className="value-display">
                  <span className="display-value">{interestRate}</span>
                  <span className="percent-symbol">%</span>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min={currentConfig.minInterest}
                    max={currentConfig.maxInterest}
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>{currentConfig.minInterest}%</span>
                    <span>{currentConfig.maxInterest}%</span>
                  </div>
                </div>
              </div>

              <div className="input-field">
                <div className="tenure-display">
                  <label htmlFor="loan-tenure">Loan Tenure</label>
                  <div className="tenure-type-selector">
                    <button
                      className={durationType === 'Year' ? 'active' : ''}
                      onClick={() => toggleDurationType('Year')}
                    >
                      Year
                    </button>
                    <button
                      className={durationType === 'Months' ? 'active' : ''}
                      onClick={() => toggleDurationType('Months')}
                    >
                      Months
                    </button>
                  </div>
                  <div className="value-display" style={{ top: '0', right: '0' }}>
                    <span className="display-value">{loanDuration}</span>
                  </div>
                </div>

                <div className="range-slider">
                  <input
                    type="range"
                    min={
                      durationType === 'Months'
                        ? currentConfig.minTenureMonths
                        : currentConfig.minTenureYears
                    }
                    max={
                      durationType === 'Months'
                        ? currentConfig.maxTenureMonths
                        : currentConfig.maxTenureYears
                    }
                    value={loanDuration}
                    onChange={(e) => setLoanDuration(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>
                      {durationType === 'Months'
                        ? currentConfig.minTenureMonths
                        : currentConfig.minTenureYears}
                    </span>
                    <span>
                      {durationType === 'Months'
                        ? currentConfig.maxTenureMonths
                        : currentConfig.maxTenureYears}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calculator-results">
              <div className="result-breakdown">
                <h1 className="section-title">Break Up Total Payment</h1>

                <div className="pie-chart-container">
                  <div className="pie-chart">
                    <div className="pie-segments">
                      <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="white" strokeWidth="0" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#00B1FF"
                          strokeWidth="20"
                          strokeDasharray={`${principalPercentage * 2.51} ${
                            (100 - principalPercentage) * 2.51
                          }`}
                          strokeDashoffset="0"
                          className="principal-segment"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#98DEFD"
                          strokeWidth="20"
                          strokeDasharray={`${interestPercentage * 2.51} ${
                            (100 - interestPercentage) * 2.51
                          }`}
                          strokeDashoffset={`${-principalPercentage * 2.51}`}
                          className="interest-segment"
                        />
                        <text
                          x="50"
                          y="45"
                          textAnchor="middle"
                          fill="#333"
                          fontSize="7"
                          fontWeight="700"
                        >
                          Loan Amount
                        </text>
                        <text
                          x="50"
                          y="55"
                          textAnchor="middle"
                          fill="#333"
                          fontSize="7"
                          fontWeight="700"
                        >
                          ₹ {loanAmount.toLocaleString()}
                        </text>
                      </svg>
                    </div>
                  </div>

                  <div className="payment-breakdown">
                    <div className="breakdown-item">
                      <div className="breakdown-label">
                        <span className="dot principal-dot"></span>
                        <span>Principal Amount</span>
                      </div>
                      <div className="breakdown-value">₹ {loanAmount.toLocaleString()}.00</div>
                    </div>

                    <div className="breakdown-item">
                      <div className="breakdown-label">
                        <span className="dot interest-dot"></span>
                        <span>Interest</span>
                      </div>
                      <div className="breakdown-value">₹ {totalInterest.toFixed(2)}</div>
                    </div>

                    <div className="breakdown-item total">
                      <div className="breakdown-label">
                        <span>Total Payment</span>
                      </div>
                      <div className="breakdown-value">
                        ₹{' '}
                        {(loanAmount + totalInterest).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="total-loan-amount">
                  <h3>Your Monthly EMI Payment</h3>
                  <div className="emi-amount">{formatCurrency(monthlyEMI)}/-</div>
                </div>

                <button onClick={handleApplyNow} className="btn btn-primary-icon">
                  Apply Now <span className="btn-icon">›</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {calculatorType === 'eligibility' && (
          <div className="calculator-content">
            <div className="calculator-inputs">
              <div className="input-field">
                <label htmlFor="net-income">Net Income (Monthly)</label>
                <div className="value-display">
                  <span className="currency-symbol">₹</span>
                  <span className="display-value">{netIncome.toLocaleString()}</span>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min={currentConfig.minIncome}
                    max={currentConfig.maxIncome}
                    value={netIncome}
                    onChange={(e) => setNetIncome(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>₹ {currentConfig.minIncome.toLocaleString()}</span>
                    <span>₹ {currentConfig.maxIncome.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="net-income">Monthly Obligation</label>
                <div className="value-display">
                  <span className="currency-symbol">₹</span>
                  <span className="display-value">{monthlyObligation.toLocaleString()}</span>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min={currentConfig.minMonthlyObligation}
                    max={currentConfig.maxMonthlyObligation}
                    value={monthlyObligation}
                    onChange={(e) => setMonthlyObligation(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>₹ {currentConfig.minMonthlyObligation.toLocaleString()}</span>
                    <span>₹ {currentConfig.maxMonthlyObligation.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="interest-rate">Interest Rate</label>
                <div className="value-display">
                  <span className="display-value">{interestRate}</span>
                  <span className="percent-symbol">%</span>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min={currentConfig.minInterest}
                    max={currentConfig.maxInterest}
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>{currentConfig.minInterest}%</span>
                    <span>{currentConfig.maxInterest}%</span>
                  </div>
                </div>
              </div>

              <div className="input-field">
                <div className="tenure-display">
                  <label htmlFor="loan-tenure">Loan Tenure</label>
                  <div className="tenure-type-selector">
                    <button
                      className={durationType === 'Year' ? 'active' : ''}
                      onClick={() => toggleDurationType('Year')}
                    >
                      Year
                    </button>
                    <button
                      className={durationType === 'Months' ? 'active' : ''}
                      onClick={() => toggleDurationType('Months')}
                    >
                      Months
                    </button>
                  </div>
                  <div className="value-display" style={{ top: '0', right: '0' }}>
                    <span className="display-value">{loanDuration}</span>
                  </div>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min={
                      durationType === 'Months'
                        ? currentConfig.minTenureMonths
                        : currentConfig.minTenureYears
                    }
                    max={
                      durationType === 'Months'
                        ? currentConfig.maxTenureMonths
                        : currentConfig.maxTenureYears
                    }
                    value={loanDuration}
                    onChange={(e) => setLoanDuration(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="range-values">
                    <span>
                      {durationType === 'Months'
                        ? currentConfig.minTenureMonths
                        : currentConfig.minTenureYears}
                    </span>
                    <span>
                      {durationType === 'Months'
                        ? currentConfig.maxTenureMonths
                        : currentConfig.maxTenureYears}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calculator-results eligibility-results">
              <div className="result-breakdown">
                <h1 className="section-title">Congratulations!!</h1>
                <h1 className="section-title">You are eligible for loan Upto</h1>

                <div className="eligibility-info">
                  <div className="total-loan-amount">
                    <h3>Total Loan Amount</h3>
                    <div className="amount">{formatCurrency(eligibleAmount)}/-</div>
                  </div>

                  <div className="monthly-emi">
                    <h3>Your Monthly EMI Payment</h3>
                    <div className="emi-amount">{formatCurrency(eligibleEMI)}/-</div>
                  </div>

                  <button onClick={handleApplyNow} className="btn btn-primary-icon">
                    Apply Now <span className="btn-icon">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
