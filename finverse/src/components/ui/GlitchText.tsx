import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
}

export const GlitchText = ({ text, className = '', glitchIntensity = 'medium' }: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  const intensitySettings = {
    low: { frequency: 3000, duration: 100, charCount: 2 },
    medium: { frequency: 2000, duration: 150, charCount: 4 },
    high: { frequency: 1000, duration: 200, charCount: 6 }
  };

  const settings = intensitySettings[glitchIntensity];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      // Create glitched version
      const chars = text.split('');
      const glitchPositions: number[] = [];
      
      for (let i = 0; i < Math.min(settings.charCount, chars.length); i++) {
        const randomPos = Math.floor(Math.random() * chars.length);
        if (!glitchPositions.includes(randomPos)) {
          glitchPositions.push(randomPos);
          chars[randomPos] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
      }
      
      setGlitchedText(chars.join(''));
      
      // Reset after duration
      setTimeout(() => {
        setGlitchedText(text);
        setIsGlitching(false);
      }, settings.duration);
      
    }, settings.frequency);

    return () => clearInterval(glitchInterval);
  }, [text, settings]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0000, -2px 0 0 #00ffff',
          '-2px 0 0 #ff0000, 2px 0 0 #00ffff',
          '0 0 0 transparent'
        ]
      } : {}}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      {glitchedText}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-red-500 opacity-70"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
            animate={{ x: [0, 2, -2, 0] }}
            transition={{ duration: 0.1 }}
          >
            {glitchedText}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-cyan-500 opacity-70"
            style={{ clipPath: 'inset(50% 0 0 0)' }}
            animate={{ x: [0, -2, 2, 0] }}
            transition={{ duration: 0.1 }}
          >
            {glitchedText}
          </motion.span>
        </>
      )}
    </motion.span>
  );
};