import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CyberButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: CyberButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      bg: 'bg-gradient-to-r from-primary to-emerald-400',
      text: 'text-navy-900',
      glow: 'shadow-primary/50'
    },
    secondary: {
      bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
      text: 'text-white',
      glow: 'shadow-purple-500/50'
    },
    danger: {
      bg: 'bg-gradient-to-r from-red-500 to-orange-500',
      text: 'text-white',
      glow: 'shadow-red-500/50'
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const currentVariant = variants[variant];

  return (
    <motion.button
      className={`relative overflow-hidden font-bold uppercase tracking-wider ${sizes[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background layers */}
      <motion.div
        className={`absolute inset-0 ${currentVariant.bg}`}
        animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent"
        style={{
          background: `linear-gradient(45deg, transparent, ${variant === 'primary' ? '#64ffda' : variant === 'secondary' ? '#a855f7' : '#ef4444'}, transparent)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%'
        }}
        transition={{ duration: 0.5, ease: 'linear' }}
      />
      
      {/* Glitch lines */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-1/4 left-0 right-0 h-px bg-white/50"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 right-0 h-px bg-white/50"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </>
      )}
      
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 ${currentVariant.bg} blur-xl opacity-0`}
        animate={isHovered ? { opacity: 0.6, scale: 1.2 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Text */}
      <motion.span
        className={`relative z-10 ${currentVariant.text}`}
        animate={isHovered ? { 
          textShadow: '0 0 10px rgba(255,255,255,0.8)' 
        } : { 
          textShadow: '0 0 0px rgba(255,255,255,0)' 
        }}
      >
        {children}
      </motion.span>
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/30" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white/30" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white/30" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/30" />
    </motion.button>
  );
};