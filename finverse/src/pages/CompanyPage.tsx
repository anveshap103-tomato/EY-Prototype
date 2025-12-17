import { Navbar } from '../components/Navbar';
import { Company } from '../components/Company';
import { Footer } from '../components/Footer';

export const CompanyPage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Company />
      <Footer />
    </div>
  );
};
