import { useState } from 'react';
import './Integrations.css';

interface Integration {
  id: string;
  name: string;
  logo: string;
}

export default function Integrations() {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);

  const integrations: Integration[] = [
    { id: 'quickbooks', name: 'QuickBooks', logo: 'quickbooks-logo' },
    { id: 'netsuite', name: 'NetSuite', logo: 'netsuite-logo' },
    { id: 'xero', name: 'Xero', logo: 'xero-logo' },
    { id: 'google', name: 'Google\nWorkspace', logo: 'google-workspace-logo' },
    { id: 'outlook', name: 'Outlook', logo: 'outlook-logo' },
    { id: 'slack', name: 'Slack', logo: 'slack-logo' }
  ];

  return (
    <div className="section-a9" id="integrations">
      <div className="container-aa">
        <div className="container-ab">
          <div className="heading-ac">
            <div className="works-with-tools">
              <span className="works-seamlessly">Works Seamlessly With </span>
              <span className="your-tools">Your Tools</span>
            </div>
          </div>
          <div className="container-ad">
            <span className="api-integrations">
              API-ready integrations for instant connectivity with the platforms you trust.
            </span>
          </div>
        </div>
        <div className="container-ae">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className={`integration-card ${hoveredIntegration === integration.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIntegration(integration.id)}
              onMouseLeave={() => setHoveredIntegration(null)}
            >
              <div className="margin">
                <div className="logo-container">
                  <div className={integration.logo} />
                </div>
              </div>
              <div className="integration-name">
                <span className="name-text">
                  {integration.name.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < integration.name.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
