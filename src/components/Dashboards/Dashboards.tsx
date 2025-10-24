import { useState } from 'react';
import './Dashboards.css';

type TabType = 'admin' | 'employee';

export default function Dashboards() {
  const [activeTab, setActiveTab] = useState<TabType>('admin');

  const dashboardImages = {
    admin: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-21/admin-dashboard.png',
    employee: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-21/employee-dashboard.png'
  };

  return (
    <div className="section-40">
      <div className="container-41">
        <div className="container-42">
          <div className="heading-43">
            <div className="tailored-dashboards">
              <span className="tailored-role">Tailored Dashboards</span>
              <span className="container-44"> for Every Role</span>
            </div>
          </div>
          <div className="role-needs">
            <span className="container-45">
              Everyone gets exactly what they need — nothing more, nothing less.
            </span>
          </div>
        </div>
        <div className="tablist">
          <div className="tablist-46">
            <div
              className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
            >
              <span className="admin">Admin</span>
            </div>
            <div
              className={`tab ${activeTab === 'employee' ? 'active' : ''}`}
              onClick={() => setActiveTab('employee')}
            >
              <span className="employee">Employee</span>
            </div>
          </div>
          <div className="image-container">
            <div
              className={`image-db ${activeTab === 'admin' ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${dashboardImages.admin})` }}
            />
            <div
              className={`image-db ${activeTab === 'employee' ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${dashboardImages.employee})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
