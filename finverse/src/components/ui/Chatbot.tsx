import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm FinVerse AI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! I'm here to help you with FinVerse lending solutions. What would you like to know?";
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing') || msg.includes('how much')) {
      return "Our pricing is flexible and scales with your business. We offer tiered plans starting from $2,500/month for small lenders up to enterprise solutions. Would you like to schedule a consultation for a custom quote?";
    }
    if (msg.includes('demo') || msg.includes('trial') || msg.includes('test')) {
      return "I'd be happy to arrange a demo! We offer a 14-day free trial with full access to our AI underwriting platform. Please provide your email or click the Demo button to get started.";
    }
    if (msg.includes('ai') || msg.includes('underwriting') || msg.includes('credit') || msg.includes('score')) {
      return "Our AI-powered underwriting analyzes 5,000+ data points including credit history, bank transactions, social signals, and behavioral patterns to predict creditworthiness with 95%+ accuracy. It approves 25% more qualified borrowers than traditional methods!";
    }
    if (msg.includes('fraud') || msg.includes('security') || msg.includes('protect') || msg.includes('safe')) {
      return "FinVerse Protect uses real-time behavioral analysis, device fingerprinting, and ML pattern recognition to detect fraud before it happens. Our clients see 40% reduction in fraud losses and 99.2% accuracy in flagging suspicious applications.";
    }
    if (msg.includes('integration') || msg.includes('api') || msg.includes('setup') || msg.includes('implement')) {
      return "We offer RESTful API integration with comprehensive documentation. Most clients integrate within 2-4 weeks. We support all major lending platforms including Salesforce, nCino, and custom systems. Our team handles the entire setup!";
    }
    if (msg.includes('support') || msg.includes('help') || msg.includes('contact') || msg.includes('reach')) {
      return "We provide 24/7 support with dedicated account managers, live chat, email (support@finverse.ai), and phone (+1-800-FINVERSE). Average response time is under 2 minutes!";
    }
    if (msg.includes('feature') || msg.includes('what can') || msg.includes('capabilities') || msg.includes('do')) {
      return "FinVerse offers: AI Underwriting, Fraud Detection, Portfolio Analytics, Risk Monitoring, Automated Decisioning, Document Verification, Income Verification, and Real-time Reporting. What would you like to know more about?";
    }
    if (msg.includes('roi') || msg.includes('benefit') || msg.includes('why') || msg.includes('advantage')) {
      return "Our clients see: 25% increase in approvals, 60% faster decisions, 40% reduction in fraud, 30% lower default rates, and 50% reduction in manual review time. Average ROI is 3.5x within the first year!";
    }
    if (msg.includes('compliance') || msg.includes('regulation') || msg.includes('legal') || msg.includes('gdpr')) {
      return "FinVerse is fully compliant with FCRA, ECOA, GDPR, SOC 2 Type II, and all major lending regulations. We provide complete audit trails and explainable AI decisions for regulatory requirements.";
    }
    if (msg.includes('data') || msg.includes('source') || msg.includes('information')) {
      return "We analyze data from 200+ sources including credit bureaus, bank accounts, utility payments, rent history, employment records, and alternative data. All data is encrypted and GDPR compliant.";
    }
    if (msg.includes('accurate') || msg.includes('accuracy') || msg.includes('reliable')) {
      return "Our AI models achieve 95%+ accuracy in credit risk prediction, validated across 10M+ loans. We continuously retrain models monthly using your portfolio data to improve performance.";
    }
    if (msg.includes('fast') || msg.includes('speed') || msg.includes('quick') || msg.includes('time')) {
      return "Decisions in under 3 seconds! Our AI processes applications 60x faster than manual underwriting. Most lenders reduce their decision time from 3-5 days to instant approvals.";
    }
    if (msg.includes('industry') || msg.includes('who') || msg.includes('client')) {
      return "We serve personal lenders, auto finance, mortgage lenders, SMB lending, BNPL providers, and fintech companies. Our clients range from startups to Fortune 500 financial institutions.";
    }
    if (msg.includes('start') || msg.includes('begin') || msg.includes('onboard')) {
      return "Getting started is easy! 1) Schedule a demo, 2) 14-day free trial, 3) API integration (2-4 weeks), 4) Go live! Our team handles everything. Ready to schedule your demo?";
    }
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about FinVerse?";
    }
    if (msg.includes('bye') || msg.includes('goodbye')) {
      return "Goodbye! Feel free to reach out anytime. Have a great day! 👋";
    }
    
    return "That's a great question! I can help you with pricing, demos, AI underwriting, fraud detection, integrations, ROI, compliance, and more. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-28 right-8 w-96 h-[600px] bg-navy-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/30 flex flex-col z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-emerald-400 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900">FinVerse AI</h3>
                <p className="text-xs text-navy-800">Online</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-navy-900/20 hover:bg-navy-900/40 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-navy-900" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-primary to-emerald-400 text-navy-900'
                      : 'bg-navy-800 text-white border border-navy-700'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-emerald-400" />
                  </div>
                )}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="bg-navy-800 p-3 rounded-2xl border border-navy-700">
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-navy-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-navy-800 text-white px-4 py-3 rounded-xl border border-navy-700 focus:border-primary focus:outline-none placeholder-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-emerald-400 text-navy-900 flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
