
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Spotlight } from './ui/Spotlight';
import { useEffect, useState } from 'react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-900">
            <Spotlight className="opacity-60" />

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1, x: mousePosition.x * -2, opacity: 0.6 }}
                    className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    style={{ y: y2, x: mousePosition.x * 2, opacity: 0.6 }}
                    className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen delay-1000"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy-900 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-primary text-sm font-medium mb-6 hover:border-primary/50 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            New: FinVerse Protect is now live
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Proven AI for a
                            <span className="block text-gradient-primary relative">
                                <Typewriter
                                    options={{
                                        strings: ['Thriving', 'Smarter', 'Fairer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                Lending Universe
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Accurately assess, confidently decision, and perpetually optimize your lending business with proven AI technology.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="w-full sm:w-auto group shadow-lg shadow-primary/25">
                                Request a Demo
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-white/5">
                                Explore Solutions
                            </Button>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Fair Lending Compliant</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Automated Compliance</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Abstract Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 relative hidden lg:block perspective-1000"
                        style={{
                            rotateX: mousePosition.y * 0.5,
                            rotateY: mousePosition.x * 0.5,
                        }}
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto transform-style-3d">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />

                            {/* Central Globe/Network Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full border border-navy-700 bg-navy-800/50 backdrop-blur-sm relative flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/10">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-emerald-500 opacity-20 animate-spin-slow blur-xl"></div>
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 border border-navy-700/50 rounded-full"
                                    style={{
                                        rotate: i * 60,
                                        scale: 0.8 + i * 0.2,
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-700 rounded-full border border-navy-900 shadow-xl" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent mx-auto mb-2" />
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </div>
    );
};
