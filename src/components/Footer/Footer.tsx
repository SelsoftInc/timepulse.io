import './Footer.css';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="footer">
      <div className="container-ef">
        <div className="container-f0">
          <div className="container-f1">
            <div className="container-f2">
              <div className="timepulse" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
            <div className="container-f3">
              <span className="simplify-timesheets-amplify-productivity">
                Simplify Timesheets. Amplify
                <br />
                Productivity.
              </span>
            </div>
            <div className="container-f4">
              <div className="link-linkedin" onClick={() => window.open('https://linkedin.com', '_blank')}>
                <div className="svg-f5" />
              </div>
              <div className="link-twitter" onClick={() => window.open('https://twitter.com', '_blank')}>
                <div className="svg-f6" />
              </div>
              <div className="link-youtube" onClick={() => window.open('https://youtube.com', '_blank')}>
                <div className="svg-f7" />
              </div>
            </div>
          </div>
          <div className="container-f8">
            <div className="heading-company">
              <span className="company-f9">Company</span>
            </div>
            <div className="list-fa">
              <div className="item-fb">
                <div className="link" onClick={() => window.open('#about', '_self')}>
                  <span className="about">About</span>
                </div>
              </div>
              <div className="item-fc">
                <div className="link-fd" onClick={() => scrollToSection('contact')}>
                  <span className="contact">Contact</span>
                </div>
              </div>
              <div className="item-fe">
                <div className="link-ff" onClick={() => window.open('#careers', '_self')}>
                  <span className="careers">Careers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-100">
            <div className="heading-101">
              <span className="product">Product</span>
            </div>
            <div className="list-102">
              <div className="item-103">
                <div className="link-104" onClick={() => scrollToSection('features')}>
                  <span className="features">Features</span>
                </div>
              </div>
              <div className="item-105">
                <div className="link-106" onClick={() => scrollToSection('pricing')}>
                  <span className="pricing-107">Pricing</span>
                </div>
              </div>
              <div className="item-108">
                <div className="link-109" onClick={() => scrollToSection('integrations')}>
                  <span className="integrations">Integrations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-10a">
            <div className="heading-10b">
              <span className="legal">Legal</span>
            </div>
            <div className="list-10c">
              <div className="item-10d">
                <div className="link-10e" onClick={() => window.open('#privacy', '_self')}>
                  <span className="privacy-policy">Privacy Policy</span>
                </div>
              </div>
              <div className="item-10f">
                <div className="link-110" onClick={() => window.open('#terms', '_self')}>
                  <span className="terms-of-service">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-border">
          <div className="container-111">
            <div className="container-112">
              <span className="all-rights-reserved">
                © 2025 TimePulse Inc. All Rights Reserved.
              </span>
            </div>
            <div className="container-113">
              <span className="email">Email: </span>
              <div className="link-114" onClick={() => window.open('mailto:info@timepulse.io')}>
                <span className="info-email">info@timepulse.io</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
