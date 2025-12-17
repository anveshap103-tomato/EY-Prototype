import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const HolographicCard = ({ children, className = '', intensity = 1 }: HolographicCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15 * intensity, -15 * intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15 * intensity, 15 * intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="relative transform-style-3d backface-hidden"
        style={{
          rotateX,
          rotateY,
        }}
      >
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-md border border-primary/20 p-6">
          {/* Holographic overlay */}
          <motion.div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background: useTransform(
                [mouseXSpring, mouseYSpring],
                ([x, y]) => `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, 
                  rgba(100, 255, 218, 0.3) 0%, 
                  rgba(255, 100, 255, 0.2) 30%, 
                  rgba(100, 255, 218, 0.1) 60%, 
                  transparent 100%)`
              ),
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'linear-gradient(45deg, transparent 30%, rgba(100, 255, 218, 0.5) 50%, transparent 70%)',
                'linear-gradient(45deg, transparent 30%, rgba(255, 100, 255, 0.5) 50%, transparent 70%)',
                'linear-gradient(45deg, transparent 30%, rgba(100, 255, 218, 0.5) 50%, transparent 70%)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};