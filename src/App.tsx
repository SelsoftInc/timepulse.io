import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Dashboards from './components/Dashboards/Dashboards';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Integrations from './components/Integrations/Integrations';
import RequestDemo from './components/RequestDemo/RequestDemo';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Dashboards />
        <Testimonials />
        <Pricing />
        <Integrations />
        <RequestDemo />
      </main>
      <Footer />
    </div>
  );
}
