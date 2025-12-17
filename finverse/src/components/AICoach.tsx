import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, TrendingDown, CheckCircle } from 'lucide-react';
import { HolographicCard } from './ui/HolographicCard';

const loanTypes = [
  { id: 'home', name: 'Home Loan', icon: '🏠' },
  { id: 'personal', name: 'Personal Loan', icon: '💰' },
  { id: 'car', name: 'Car Loan', icon: '🚗' },
  { id: 'education', name: 'Education Loan', icon: '🎓' },
  { id: 'business', name: 'Business Loan', icon: '💼' }
];

const bankData: Record<string, Array<{ bank: string; rate: string; processing: string; schemes: string[] }>> = {
  home: [
    { bank: 'SBI', rate: '8.50%', processing: '0.35%', schemes: ['Women borrower: -0.05%', 'Salaried: -0.10%', 'Green home: -0.15%'] },
    { bank: 'HDFC', rate: '8.60%', processing: '0.50%', schemes: ['Salary account: -0.10%', 'High CIBIL (>750): -0.15%'] },
    { bank: 'ICICI', rate: '8.75%', processing: '0.50%', schemes: ['Existing customer: -0.20%', 'Digital application: -0.05%'] },
    { bank: 'Axis Bank', rate: '8.80%', processing: '1.00%', schemes: ['Pre-approved: -0.25%', 'Salary >1L: -0.10%'] }
  ],
  personal: [
    { bank: 'HDFC', rate: '10.50%', processing: '2.00%', schemes: ['Salary account: -0.50%', 'CIBIL >800: -0.75%'] },
    { bank: 'ICICI', rate: '10.75%', processing: '2.50%', schemes: ['Existing customer: -0.60%', 'Quick disbursal: -0.25%'] },
    { bank: 'Kotak', rate: '10.99%', processing: '2.00%', schemes: ['Pre-approved: -1.00%', 'Salaried: -0.50%'] },
    { bank: 'SBI', rate: '11.15%', processing: '1.50%', schemes: ['Pension holder: -0.40%', 'Govt employee: -0.60%'] }
  ],
  car: [
    { bank: 'HDFC', rate: '8.70%', processing: '0.50%', schemes: ['New car: -0.20%', 'Salary account: -0.15%'] },
    { bank: 'ICICI', rate: '8.90%', processing: '0.75%', schemes: ['Electric vehicle: -0.50%', 'Existing customer: -0.25%'] },
    { bank: 'Axis Bank', rate: '9.00%', processing: '1.00%', schemes: ['Pre-approved: -0.30%', 'High down payment: -0.20%'] },
    { bank: 'SBI', rate: '9.10%', processing: '0.25%', schemes: ['Dealer tie-up: -0.25%', 'Salaried: -0.15%'] }
  ],
  education: [
    { bank: 'SBI', rate: '7.50%', processing: '0.00%', schemes: ['Govt scheme: -1.00%', 'Girl child: -0.50%'] },
    { bank: 'HDFC', rate: '9.50%', processing: '1.00%', schemes: ['Premier institute: -0.75%', 'Co-borrower: -0.25%'] },
    { bank: 'ICICI', rate: '10.00%', processing: '1.50%', schemes: ['Scholarship holder: -0.50%', 'Existing customer: -0.30%'] },
    { bank: 'Axis Bank', rate: '10.50%', processing: '2.00%', schemes: ['Abroad study: -0.40%', 'Parent salary account: -0.35%'] }
  ],
  business: [
    { bank: 'HDFC', rate: '11.00%', processing: '2.00%', schemes: ['GST registered: -0.50%', 'Turnover >1Cr: -0.75%'] },
    { bank: 'ICICI', rate: '11.25%', processing: '2.50%', schemes: ['Current account: -0.60%', 'Existing customer: -0.40%'] },
    { bank: 'Axis Bank', rate: '11.50%', processing: '2.00%', schemes: ['MSME: -0.80%', 'Women entrepreneur: -0.50%'] },
    { bank: 'SBI', rate: '11.75%', processing: '1.50%', schemes: ['Mudra scheme: -1.00%', 'Startup: -0.60%'] }
  ]
};

export const AICoach = () => {
  const [selectedLoan, setSelectedLoan] = useState('home');
  const [banks, setBanks] = useState(bankData.home);

  const handleLoanChange = (loanId: string) => {
    setSelectedLoan(loanId);
    setBanks(bankData[loanId]);
  };

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loan <span className="text-gradient-primary">Comparison</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Compare interest rates and schemes across banks
          </p>
        </motion.div>

        {/* Loan Type Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {loanTypes.map((loan) => (
            <motion.button
              key={loan.id}
              onClick={() => handleLoanChange(loan.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl text-center transition-all ${
                selectedLoan === loan.id
                  ? 'bg-gradient-to-r from-primary to-emerald-400 text-navy-900'
                  : 'bg-navy-800 text-white border border-navy-700 hover:border-primary/50'
              }`}
            >
              <div className="text-3xl mb-2">{loan.icon}</div>
              <div className="font-bold text-sm">{loan.name}</div>
            </motion.button>
          ))}
        </div>

        {/* Bank Comparison */}
        <div className="space-y-6">
          {banks.map((bank, index) => (
            <motion.div
              key={bank.bank}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <HolographicCard>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{bank.bank}</h3>
                        <p className="text-slate-400 text-sm">Processing Fee: {bank.processing}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-sm mb-1">Interest Rate</div>
                      <div className="text-4xl font-bold text-gradient-primary">{bank.rate}</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-navy-700">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingDown className="w-5 h-5 text-primary" />
                      <h4 className="text-white font-bold">Rate Reduction Schemes</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {bank.schemes.map((scheme, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{scheme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
