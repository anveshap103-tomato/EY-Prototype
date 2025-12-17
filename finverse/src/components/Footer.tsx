
import { Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-navy-900 border-t border-navy-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 rounded bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center">
                                <div className="w-3 h-3 bg-navy-900 rounded-sm" />
                            </div>
                            <span className="text-xl font-bold text-white">FinVerse</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Powering the future of fair and efficient lending with advanced AI technology.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Automated Underwriting</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Fraud Detection</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Lending Intelligence</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Fair Lending</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="text-sm text-slate-500">
                            123 Innovation Drive,<br />
                            Tech City, CA 90210
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <div>&copy; {new Date().getFullYear()} FinVerse AI, Inc. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-400">Terms of Service</a>
                        <a href="#" className="hover:text-slate-400">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
