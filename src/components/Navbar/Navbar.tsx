import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="container-115">
          <div className="time-pulse" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`container-116 ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="link-117" onClick={() => scrollToSection('features')}>
              <span className="features-118">Features</span>
            </div>
            <div className="link-119" onClick={() => scrollToSection('pricing')}>
              <span className="pricing-11a">Pricing</span>
            </div>
            <div className="link-11b" onClick={() => scrollToSection('how-it-works')}>
              <span className="how-it-works-11c">How It Works</span>
            </div>
            <div className="link-11d" onClick={() => scrollToSection('integrations')}>
              <span className="tools">Tools</span>
            </div>
            <div className="link-11e" onClick={() => scrollToSection('contact')}>
              <span className="contact-11f">Contact</span>
            </div>
          </div>

          <div className="container-120">
            <a href="https://main.dolfu0p2owxyr.amplifyapp.com/login" className="button-121">
              <span className="login">Login</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
