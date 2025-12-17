import { motion } from 'framer-motion';
import { Building2, Car, Home, Briefcase, CreditCard, Smartphone } from 'lucide-react';
import { HolographicCard } from './ui/HolographicCard';

const industries = [
  {
    icon: Building2,
    title: 'Personal Lending',
    description: 'Approve more borrowers with AI-powered risk assessment. Reduce defaults by 30% while increasing approval rates.',
    stats: ['25% more approvals', '3-second decisions', '40% less fraud']
  },
  {
    icon: Car,
    title: 'Auto Finance',
    description: 'Streamline vehicle financing with instant credit decisions. Analyze income, employment, and payment history in real-time.',
    stats: ['60% faster processing', '95% accuracy', 'Real-time verification']
  },
  {
    icon: Home,
    title: 'Mortgage Lending',
    description: 'Modernize mortgage underwriting with comprehensive data analysis. Comply with all regulations while speeding up approvals.',
    stats: ['FCRA compliant', '5,000+ data points', 'Automated documentation']
  },
  {
    icon: Briefcase,
    title: 'SMB Lending',
    description: 'Evaluate small business creditworthiness using alternative data. Bank statements, cash flow, and business metrics analysis.',
    stats: ['Alternative data', 'Cash flow analysis', 'Business scoring']
  },
  {
    icon: CreditCard,
    title: 'BNPL Providers',
    description: 'Instant approval decisions for buy-now-pay-later services. Fraud detection and risk scoring in milliseconds.',
    stats: ['Sub-second decisions', '99.2% fraud detection', 'Seamless checkout']
  },
  {
    icon: Smartphone,
    title: 'Fintech Companies',
    description: 'White-label AI lending infrastructure. API-first platform that scales with your business needs.',
    stats: ['RESTful API', '2-week integration', 'Custom branding']
  }
];

export const Industries = () => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Industries We <span className="text-gradient-primary">Serve</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tailored AI lending solutions for every sector
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <HolographicCard key={industry.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-slate-300 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.stats.map((stat) => (
                    <div key={stat} className="flex items-center gap-2 text-sm text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
};
