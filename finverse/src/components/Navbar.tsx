import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    username: string;
}

export const Navbar = ({ isLoggedIn, setIsLoggedIn, username }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to section handling if on home page, otherwise nav to home first
    const handleNavClick = (href: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow navigation to engage before scrolling
            setTimeout(() => {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Solutions', href: '#solutions' },
        { name: 'Industries', href: '#industries' },
        ...(isLoggedIn ? [{ name: 'Personal Finance', href: '/personal-finance' }] : []),
        { name: 'Partners', href: '#partners' },
        { name: 'Learn', href: '#learn' },
        { name: 'Company', href: '#company' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'glass py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center">
                            <div className="w-4 h-4 bg-navy-900 rounded-sm" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            FinVerse
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.href.startsWith('/')) {
                                        // Internal route navigation
                                        e.preventDefault();
                                        navigate(link.href);
                                        return;
                                    }
                                    // Let default behavior happen if on home page for anchor links
                                    if (location.pathname !== '/') {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }
                                }}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => navigate('/admin')}
                                    className="text-sm font-medium text-primary hover:text-emerald-400 transition-colors"
                                >
                                    {username}
                                </button>
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="text-sm font-medium text-slate-300 hover:text-white"
                                >
                                    Log out
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="text-sm font-medium text-slate-300 hover:text-white"
                                >
                                    Log in
                                </button>
                                <Button size="sm">Get a Demo</Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-navy-700"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-300 hover:text-white"
                                    onClick={(e) => {
                                        if (link.href.startsWith('/')) {
                                            e.preventDefault();
                                            navigate(link.href);
                                            setIsMobileMenuOpen(false);
                                            return;
                                        }

                                        if (location.pathname !== '/') {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        } else {
                                            setIsMobileMenuOpen(false);
                                        }
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-navy-700 my-2" />
                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={() => {
                                            navigate('/admin');
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-base font-medium text-primary hover:text-emerald-400 text-left"
                                    >
                                        {username}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsLoggedIn(false);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-base font-medium text-slate-300 hover:text-white text-left"
                                    >
                                        Log out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => {
                                            navigate('/login');
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-base font-medium text-slate-300 hover:text-white text-left"
                                    >
                                        Log in
                                    </button>
                                    <Button className="w-full">Get a Demo</Button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
