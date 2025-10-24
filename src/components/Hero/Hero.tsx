import './Hero.css';

export default function Hero() {
  const handleStartTrial = () => {
    const demoSection = document.getElementById('contact');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    // You can replace this with actual video modal or link
    window.open('', '_blank');
  };

  return (
    <div className="section-de">
      <div className="container-df">
        <div className="overlay-blur" />
        <div className="overlay-blur-e0" />
        <div className="container-e" />
      </div>
      <div className="container-e2">
        <div className="container-e3">
          <div className="container-e4">
            <div className="heading-e5">
              <span className="where-every-hour-counts">
                Where Every
                <br />
                Hour Counts
              </span>
            </div>
            <div className="container-e6">
              <span className="ai-powered-timesheet-automation">
                AI-powered timesheet automation that collects,
                <br />
                standardizes, and invoices — all in one platform.
              </span>
            </div>
            <div className="container-e7">
              <div className="start-free-trial-e8" onClick={handleStartTrial}>
                <span className="button-e9">Start Free Trial</span>
              </div>
              <div className="button-ea">
                <div className="svg-margin-eb">
                  <div className="svg-ec">
                    <div className="frame-ed" />
                  </div>
                </div>
                <span className="see-how-it-works">See How It Works</span>
              </div>
            </div>
            <div className="container-ee">
              <span className="save-up-to-hours">
                Save up to 3 hours per employee weekly • No credit card required
              </span>
            </div>
          </div>
          <div className="timepulse-workflow-visualization" />
        </div>
      </div>
    </div>
  );
}
