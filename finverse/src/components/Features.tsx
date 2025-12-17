
import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, TrendingUp, ArrowRight, Zap, Eye, Cpu } from 'lucide-react';
import { Button } from './ui/Button';
import { TiltCard } from './ui/TiltCard';
import { Spotlight } from './ui/Spotlight';
import { HolographicCard } from './ui/HolographicCard';
import { GlitchText } from './ui/GlitchText';
import { CyberButton } from './ui/CyberButton';
import { ParticleField } from './ui/ParticleField';

const FeatureCard = ({ icon: Icon, title, description, delay, variant = 'default' }: { 
  icon: any, title: string, description: string, delay: number, variant?: 'default' | 'cyber' | 'holographic' 
}) => {
  if (variant === 'holographic') {
    return (
      <HolographicCard className="h-full" intensity={1.5}>
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, type: "spring" }}
          className="group relative h-full"
        >
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 border border-primary/30 flex items-center justify-center mb-6 neon-glow"
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              boxShadow: "0 0 30px rgba(100, 255, 218, 0.8)"
            }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-primary animate-pulse" />
          </motion.div>
          
          <GlitchText text={title} className="text-xl font-bold text-white mb-4" glitchIntensity="low" />
          <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
          
          <CyberButton variant="primary" size="sm">
            Explore <Zap className="w-4 h-4 ml-1" />
          </CyberButton>
        </motion.div>
      </HolographicCard>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative h-full p-8 rounded-2xl glass hover:bg-navy-800/50 transition-all duration-500 border border-navy-700 hover:border-primary/50 cyber-grid"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
        animate={{ 
          background: [
            'linear-gradient(45deg, rgba(100, 255, 218, 0.1), rgba(76, 175, 80, 0.05))',
            'linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(100, 255, 218, 0.05))',
            'linear-gradient(45deg, rgba(100, 255, 218, 0.1), rgba(76, 175, 80, 0.05))'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <motion.div
          className="w-14 h-14 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-6 overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            borderColor: 'rgba(100, 255, 218, 0.5)',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
        </motion.div>

        <motion.h3 
          className="text-xl font-bold text-white mb-3"
          whileHover={{ x: 5, color: '#64ffda' }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{description}</p>

        <motion.a 
          href="#" 
          className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-auto group/link"
          whileHover={{ x: 5 }}
        >
          Learn more 
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-navy-900" id="solutions">
            <ParticleField />
            <Spotlight className="opacity-40" />

            {/* Enhanced Background Decor */}
            <motion.div 
              className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-[120px]"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.1, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            <div className="absolute inset-0 cyber-grid opacity-5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Capabilities that <span className="text-gradient-primary">Drive Growth</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        FinVerse empowers lenders with a complete suite of AI tools to make better decisions, reduce risk, and automate operations.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <FeatureCard
                        icon={BrainCircuit}
                        title="AI-Automated Underwriting"
                        description="Go beyond credit scores. Our machine learning models analyze thousands of data points to predict creditworthiness with unmatched accuracy."
                        delay={0.2}
                        variant="holographic"
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Fraud Detection"
                        description="Stop fraud before it happens. FinVerse Protect uses behavioral analysis and pattern recognition to flag suspicious activity in real-time."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={TrendingUp}
                        title="Lending Intelligence"
                        description="Gain deep insights into your portfolio performance. Monitor risk, optimize pricing, and identify new growth opportunities."
                        delay={0.4}
                        variant="holographic"
                    />
                </div>
                
                {/* Additional Feature Row */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                    <FeatureCard
                        icon={Eye}
                        title="Real-time Monitoring"
                        description="Monitor your lending portfolio 24/7 with AI-powered alerts and predictive analytics that help you stay ahead of market changes."
                        delay={0.7}
                    />
                    <FeatureCard
                        icon={Cpu}
                        title="Quantum Processing"
                        description="Leverage quantum-inspired algorithms for lightning-fast decision making and complex risk calculations at unprecedented scale."
                        delay={0.8}
                        variant="holographic"
                    />
                </motion.div>

                {/* Enhanced CTA Section */}
                <HolographicCard className="mt-24" intensity={2}>
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                      className="p-12 rounded-3xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 holographic"
                  >
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                          background: [
                            'radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 50%, rgba(255, 100, 255, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 20%, rgba(100, 255, 218, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 80%, rgba(255, 100, 255, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.3) 0%, transparent 50%)'
                          ]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                      
                      <div className="relative z-10 max-w-2xl">
                          <motion.h3 
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            whileHover={{ scale: 1.05 }}
                          >
                              <GlitchText text="Ready to modernize your lending?" glitchIntensity="low" />
                          </motion.h3>
                          <motion.p 
                            className="text-slate-300 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                          >
                              Join leading financial institutions using FinVerse to increase approvals by 25% while maintaining risk.
                          </motion.p>
                      </div>
                      
                      <motion.div 
                        className="relative z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                          <CyberButton variant="primary" size="lg">
                              <motion.span
                                animate={{ textShadow: ['0 0 0px #64ffda', '0 0 10px #64ffda', '0 0 0px #64ffda'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                Schedule Consultation
                              </motion.span>
                          </CyberButton>
                      </motion.div>
                  </motion.div>
                </HolographicCard>

            </div>
        </section>
    );
};
