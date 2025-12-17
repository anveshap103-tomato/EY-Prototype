
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "FinVerse has completely transformed our underwriting process. We're approving 20% more loans with zero added risk.",
        author: "Sarah Johnson",
        role: "CRO at CreditFirst",
        logo: "CF"
    },
    {
        quote: "The fraud detection capabilities are unmatched. We've saved millions in potential losses within the first year.",
        author: "David Chen",
        role: "VP of Risk at FutureBank",
        logo: "FB"
    },
    {
        quote: "Implementing FinVerse was seamless. Their team is knowledgeable, responsive, and truly partners in our success.",
        author: "Elena Rodriguez",
        role: "CTO at LendingLoop",
        logo: "LL"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-navy-800" id="partners">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Trusted by Leading Lenders</h2>
                    <p className="text-slate-400">Join the network of forward-thinking financial institutions.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 rounded-2xl bg-navy-900 border border-navy-700 hover:border-primary/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center font-bold text-primary mb-6 border border-navy-700">
                                {t.logo}
                            </div>
                            <p className="text-slate-300 mb-6 italic">"{t.quote}"</p>
                            <div>
                                <div className="text-white font-medium">{t.author}</div>
                                <div className="text-sm text-slate-500">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Logo Strip */}
                <div className="mt-20 pt-10 border-t border-navy-700">
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Citibank', 'Discover', 'Freddie Mac', 'PNC', 'US Bank'].map((brand, i) => (
                            <span key={i} className="text-xl font-bold text-slate-400">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
