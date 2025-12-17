import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Headphones } from 'lucide-react';
import { HolographicCard } from './ui/HolographicCard';

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Complete API documentation, integration guides, and best practices for implementing FinVerse.',
    link: '#'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides covering setup, integration, and advanced features.',
    link: '#'
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real-world success stories from lenders who transformed their business with FinVerse.',
    link: '#'
  },
  {
    icon: Headphones,
    title: 'Webinars',
    description: 'Live and recorded webinars on AI lending trends, compliance, and platform updates.',
    link: '#'
  }
];

const articles = [
  {
    title: 'The Future of AI in Lending',
    category: 'AI & Machine Learning',
    readTime: '5 min read',
    description: 'How artificial intelligence is revolutionizing credit decisioning and risk assessment.'
  },
  {
    title: 'Reducing Fraud with Behavioral Analysis',
    category: 'Fraud Prevention',
    readTime: '7 min read',
    description: 'Advanced techniques for detecting and preventing lending fraud in real-time.'
  },
  {
    title: 'Alternative Data in Credit Scoring',
    category: 'Credit Risk',
    readTime: '6 min read',
    description: 'Leveraging non-traditional data sources to approve more qualified borrowers.'
  },
  {
    title: 'Compliance in Automated Lending',
    category: 'Regulatory',
    readTime: '8 min read',
    description: 'Maintaining FCRA, ECOA, and GDPR compliance with AI-powered underwriting.'
  }
];

export const Learn = () => {
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
            Learn & <span className="text-gradient-primary">Resources</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to master AI-powered lending
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resources.map((resource, index) => (
            <HolographicCard key={resource.title}>
              <motion.a
                href={resource.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="block p-6 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <resource.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-slate-400 text-sm">{resource.description}</p>
              </motion.a>
            </HolographicCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <HolographicCard key={article.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-slate-400">{article.description}</p>
              </motion.div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
};
