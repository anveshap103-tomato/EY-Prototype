import { Navbar } from '../components/Navbar';
import { Learn } from '../components/Learn';
import { Footer } from '../components/Footer';

export const LearnPage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Learn />
      <Footer />
    </div>
  );
};
