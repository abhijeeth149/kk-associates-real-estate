import React, { useState, useId } from 'react';
import { Calculator, ShieldCheck } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';


export const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years

  const loanAmountInputId = useId();
  const interestRateInputId = useId();
  const tenureYearsInputId = useId();

  // EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const principalPercent = Math.round((loanAmount / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const whatsappMessage = `Hello KK Associates, I used your Home Loan EMI calculator for a property loan of ${formatCurrency(loanAmount)} for ${tenureYears} years. Can you assist me with bank loan approvals and property options?`;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
      
      {/* Title */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold font-display text-gray-900">
            Real Estate Home Loan & EMI Calculator
          </h2>
          <p className="text-xs text-gray-500">
            Plan your monthly plot or apartment loan budget with current bank interest rates
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Side */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={loanAmountInputId} className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Loan Amount
              </label>
              <span className="text-base font-extrabold text-[#075E54] font-mono">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              id={loanAmountInputId}
              type="range"
              min={1000000}
              max={30000000}
              step={200000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#075E54] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>₹10 Lakhs</span>
              <span>₹1.50 Cr</span>
              <span>₹3.00 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={interestRateInputId} className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Interest Rate (p.a.)
              </label>
              <span className="text-base font-extrabold text-[#075E54] font-mono">
                {interestRate}%
              </span>
            </div>
            <input
              id={interestRateInputId}
              type="range"
              min={7.5}
              max={12.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#075E54] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>7.5% (Prime)</span>
              <span>9.5%</span>
              <span>12.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={tenureYearsInputId} className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Tenure (Years)
              </label>
              <span className="text-base font-extrabold text-[#075E54] font-mono">
                {tenureYears} Years ({totalMonths} Months)
              </span>
            </div>
            <input
              id={tenureYearsInputId}
              type="range"
              min={5}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#075E54] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>5 Yrs</span>
              <span>15 Yrs</span>
              <span>30 Yrs</span>
            </div>
          </div>

          <div className="p-3 bg-[#F8FAF8] rounded-xl text-[11px] text-gray-500 flex items-center gap-2 border border-gray-200">
            <ShieldCheck className="w-4 h-4 text-[#0D8B78] flex-shrink-0" />
            <span>KK Associates assists with bank loan coordination across SBI, HDFC, ICICI, and Axis Bank.</span>
          </div>

        </div>

        {/* Calculation Result Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#075E54] to-[#0D8B78] rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C7A76C] font-semibold">
                Estimated Monthly EMI
              </span>
              <div className="text-3xl sm:text-4xl font-black font-display text-white mt-1">
                {formatCurrency(emi)}
                <span className="text-xs font-normal text-emerald-200 ml-1">/ month</span>
              </div>
            </div>

            {/* Split Breakdown */}
            <div className="pt-3 border-t border-white/20 space-y-2 text-xs">
              <div className="flex justify-between text-emerald-100">
                <span>Principal Amount:</span>
                <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-emerald-100">
                <span>Total Interest:</span>
                <span className="font-bold text-[#C7A76C]">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between text-white font-bold pt-1 border-t border-white/10">
                <span>Total Payable:</span>
                <span>{formatCurrency(totalPayment)}</span>
              </div>
            </div>

            {/* Ratio Bar */}
            <div className="space-y-1 pt-2">
              <div className="h-2 rounded-full overflow-hidden flex bg-white/20">
                <div style={{ width: `${principalPercent}%` }} className="bg-emerald-300" title={`Principal: ${principalPercent}%`} />
                <div style={{ width: `${interestPercent}%` }} className="bg-[#C7A76C]" title={`Interest: ${interestPercent}%`} />
              </div>
              <div className="flex justify-between text-[10px] text-emerald-200">
                <span>Principal ({principalPercent}%)</span>
                <span>Interest ({interestPercent}%)</span>
              </div>
            </div>

            <WhatsAppButton
              variant="gold"
              size="md"
              fullWidth
              label="Discuss Loan & Properties"
              message={whatsappMessage}
              className="mt-2"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
