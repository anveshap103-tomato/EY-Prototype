import { motion } from 'framer-motion';
import { Target, Users, Award, Zap } from 'lucide-react';
import { HolographicCard } from './ui/HolographicCard';

const values = [
  {
    icon: Target,
    title: 'Mission Driven',
    description: 'Democratizing access to credit through AI-powered lending technology.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Building solutions that solve real problems for lenders and borrowers alike.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining 95%+ accuracy and industry-leading performance standards.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously advancing AI and machine learning capabilities.'
  }
];

const team = [
  { name: 'Sarah Chen', role: 'CEO & Co-Founder', background: 'Ex-Goldman Sachs, MIT AI Lab' },
  { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', background: 'Ex-Google Brain, Stanford CS' },
  { name: 'Emily Watson', role: 'Chief Risk Officer', background: 'Ex-JPMorgan, 15+ years in credit' },
  { name: 'David Kim', role: 'VP of Engineering', background: 'Ex-Amazon, ML Infrastructure' }
];

const stats = [
  { value: '10M+', label: 'Loans Processed' },
  { value: '500+', label: 'Lenders Trust Us' },
  { value: '95%', label: 'Accuracy Rate' },
  { value: '$5B+', label: 'Loans Facilitated' }
];

export const Company = () => {
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
            About <span className="text-gradient-primary">FinVerse</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We're on a mission to transform lending through artificial intelligence, making credit decisions faster, fairer, and more accurate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <HolographicCard key={value.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </motion.div>
            </HolographicCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <HolographicCard key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.background}</p>
              </motion.div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
};
