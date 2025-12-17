import { useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Spotlight = ({ className }: { className?: string }) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            const { left, top } = document.body.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className={cn(
                "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
                className
            )}
            style={{
                background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(100, 255, 218, 0.05),
            transparent 80%
          )
        `,
            }}
        />
    );
};
