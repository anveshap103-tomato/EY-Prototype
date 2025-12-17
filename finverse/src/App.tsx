
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MatrixBackground } from './components/ui/MatrixBackground';
import { FloatingMenu } from './components/ui/FloatingMenu';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 selection:bg-primary/30 relative overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
      <FloatingMenu />
    </div>
  );
}

export default App;
