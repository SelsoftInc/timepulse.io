import { useState } from 'react';
import './Features.css';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: Feature[] = [
    {
      id: 1,
      title: 'Automated Timesheet\nCapture',
      description: 'Upload any format — Excel, PDF,\nimages, even WhatsApp\nscreenshots. Our AI reads them\nall.',
      icon: 'svg'
    },
    {
      id: 2,
      title: 'Smart SOW & MSA\nMapping',
      description: 'Automatically maps timesheets\nto Master Service Agreements\nand Statements of Work with AI\nprecision.',
      icon: 'svg-9'
    },
    {
      id: 3,
      title: 'Invoice Generation',
      description: 'Generate accurate invoices\ninstantly and export to\nQuickBooks, NetSuite, or Xero\nwith one click.',
      icon: 'svg-13'
    },
    {
      id: 4,
      title: 'Approval Workflow',
      description: 'Multi-level approval chains with\nsmart routing, escalations, and\naudit trails for compliance.',
      icon: 'svg-18'
    },
    {
      id: 5,
      title: 'Dashboard Insights',
      description: 'Real-time analytics on billable\nhours, project utilization, and\nrevenue forecasting.',
      icon: 'svg-1d'
    },
    {
      id: 6,
      title: 'Alerts & Reminders',
      description: 'Smart notifications for pending\napprovals, missing timesheets,\nand upcoming deadlines.',
      icon: 'svg-22'
    },
    {
      id: 7,
      title: 'SaaS Simplicity',
      description: 'No installations, no IT\nheadaches. Just sign up and\nstart automating in minutes.',
      icon: 'svg-e'
    }
  ];

  return (
    <div className="section" id="features">
      <div className="container-1">
        <div className="container-2">
          <div className="heading">
            <div className="features-that-transform">
              <span className="features-that">Features That </span>
              <span className="transform">Transform</span>
              <span className="your-workflow"> Your Workflow</span>
            </div>
          </div>
          <div className="container-3">
            <span className="everything-you-need">
              Everything you need to automate timesheets, approvals, and invoicing — in one
              <br />
              powerful platform.
            </span>
          </div>
        </div>
        <div className="container-4">
          <div className="flex-row-eb">
            {features.slice(0, 4).map((feature) => (
              <div
                key={feature.id}
                className={`feature-card ${hoveredCard === feature.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="background">
                  <div className={feature.icon} />
                </div>
                <div className="heading-5">
                  <span className="feature-title">
                    {feature.title.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="container-6">
                  <span className="feature-description">
                    {feature.description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.description.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-row-eca">
            {features.slice(4).map((feature) => (
              <div
                key={feature.id}
                className={`feature-card ${hoveredCard === feature.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="background">
                  <div className={feature.icon} />
                </div>
                <div className="heading-5">
                  <span className="feature-title">
                    {feature.title.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="container-6">
                  <span className="feature-description">
                    {feature.description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.description.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
