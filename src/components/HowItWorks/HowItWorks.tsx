import './HowItWorks.css';

export default function HowItWorks() {
  const handleWatchDemo = () => {
    window.open('https://www.youtube.com/watch?v=demo', '_blank');
  };

  return (
    <div className="section-25" id="how-it-works">
      <div className="container-26">
        <div className="container-27">
          <div className="heading-28">
            <div className="how-it-works">
              <span className="how-it">How It </span>
              <span className="works">Works</span>
            </div>
          </div>
          <div className="container-29">
            <span className="three-simple-steps">
              Three simple steps to transform your timesheet chaos into automated precision.
            </span>
          </div>
        </div>
        <div className="container-2a">
          <div className="container-2b">
            <div className="container-2c" />
          </div>
          <div className="container-2d">
            <div className="step-card background-border-2e">
              <div className="group-f">
                <span className="upload">Upload</span>
              </div>
              <div className="container-2f">
                <span className="any-format">
                  Any format — Excel, image,
                  <br />
                  email, or handwritten WhatsApp
                  <br />
                  pictures. Just upload and go.
                </span>
              </div>
              <div className="container-30">
                <span className="number-01">01</span>
              </div>
              <div className="background-31">
                <div className="svg-32" />
              </div>
            </div>
            <div className="step-card background-border-33">
              <div className="heading-34">
                <span className="ai-converts">AI Converts</span>
              </div>
              <div className="container-35">
                <span className="ai-validation">
                  Our AI digitizes and validates
                  <br />
                  hours, rates, and project codes
                  <br />
                  instantly.
                </span>
              </div>
              <div className="container-36">
                <span className="number-02">02</span>
              </div>
              <div className="background-37">
                <div className="svg-38" />
              </div>
            </div>
            <div className="step-card background-border-39">
              <div className="heading-3a">
                <span className="approve-invoice">Approve & Invoice</span>
              </div>
              <div className="container-3b">
                <span className="auto-submit">
                  Approve & Invoice Seamlessly
                  <br />
                  integrate and auto-submit
                  <br />
                  invoices to QuickBooks,
                  <br />
                  NetSuite, or any other accounting
                  <br />
                  system — all with a single click.
                </span>
              </div>
              <div className="container-3c">
                <span className="number-03">03</span>
              </div>
              <div className="background-3d">
                <div className="svg-3e" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-3f">
          <div className="button" onClick={handleWatchDemo}>
            <span className="watch-demo">Watch Demo Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
