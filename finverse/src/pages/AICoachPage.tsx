import { Navbar } from '../components/Navbar';
import { AICoach } from '../components/AICoach';
import { Footer } from '../components/Footer';

export const AICoachPage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <AICoach />
      <Footer />
    </div>
  );
};
