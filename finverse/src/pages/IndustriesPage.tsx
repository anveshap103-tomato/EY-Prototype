import { Navbar } from '../components/Navbar';
import { Industries } from '../components/Industries';
import { Footer } from '../components/Footer';

export const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Industries />
      <Footer />
    </div>
  );
};
