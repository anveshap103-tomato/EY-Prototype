import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-navy-900 hover:bg-primary-hover shadow-lg shadow-primary/20',
            secondary: 'bg-navy-800 text-white hover:bg-navy-700 border border-navy-700',
            outline: 'bg-transparent border border-slate-600 text-slate-300 hover:border-primary hover:text-primary',
            ghost: 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-5 py-2.5 text-base',
            lg: 'px-8 py-3.5 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'inline-flex items-center justify-center rounded-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...(props as any)}
            />
        );
    }
);

Button.displayName = 'Button';
