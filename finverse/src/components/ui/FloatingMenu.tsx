import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, MessageCircle, Phone, Mail, Zap, X } from 'lucide-react';

export const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: MessageCircle, label: 'Chat', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, label: 'Call', color: 'from-green-500 to-emerald-500' },
    { icon: Mail, label: 'Email', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, label: 'Demo', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 right-0 space-y-4"
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: 50, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  x: 50, 
                  scale: 0,
                  transition: { delay: (menuItems.length - index) * 0.05 }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r ${item.color} text-white font-medium shadow-lg backdrop-blur-sm border border-white/20 group`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="group-hover:animate-none"
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
                <span className="pr-2">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 45 : 0,
          boxShadow: isOpen 
            ? '0 0 30px rgba(100, 255, 218, 0.6)' 
            : '0 0 20px rgba(100, 255, 218, 0.3)'
        }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-emerald-400 text-navy-900 flex items-center justify-center shadow-xl relative overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
        
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{ 
            scale: [1, 1.5, 2],
            opacity: [0.8, 0.4, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{ 
            scale: [1, 1.5, 2],
            opacity: [0.8, 0.4, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.button>
    </div>
  );
};