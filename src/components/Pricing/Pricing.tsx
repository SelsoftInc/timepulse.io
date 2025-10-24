import { useState } from 'react';
import './Pricing.css';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$1.99',
      period: '/user/month',
      description: 'Perfect for small teams getting started',
      features: [
        'AI-powered uploads',
        'MSA/SOW mapping',
        'Auto invoicing to\nQuickBooks/NetSuite',
        '1-level approval workflow',
        'Basic timesheet digitization',
        'Email support'
      ],
      buttonText: 'Start Free Trial'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$3.99',
      period: '/user/month',
      description: 'Advanced automation for growing\nteams',
      features: [
        'Everything in Starter',
        'Multi-level approvals',
        'Real-time analytics dashboard',
        'Priority support'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large\norganizations',
      features: [
        'Everything in Professional',
        'Custom API integrations',
        'SLA support',
        'Dedicated account manager',
        'Advanced security features'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  const handlePlanClick = (planId: string) => {
    if (planId === 'enterprise') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open('#signup', '_self');
    }
  };

  return (
    <div className="section-61" id="pricing">
      <div className="container-62">
        <div className="container-63">
          <div className="heading-64">
            <div className="simple-pricing-team">
              <span className="simple">Simple </span>
              <span className="pricing">Pricing</span>
              <span className="for-every-team"> for Every Team</span>
            </div>
          </div>
          <div className="container-65">
            <span className="save-hours-coffee">
              Save 3+ hours per employee, per week — less than a coffee.
            </span>
          </div>
        </div>
        <div className="container-66">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${hoveredPlan === plan.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <div className="background-a8">
                    <span className="most-popular">Most Popular</span>
                  </div>
                </div>
              )}
              <div className="heading-68">
                <span className="plan-name">{plan.name}</span>
              </div>
              <div className="paragraph">
                <span className="price">{plan.price}</span>
                {plan.period && <span className="user-month">{plan.period}</span>}
              </div>
              <div className="container-69">
                <span className="plan-description">
                  {plan.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < plan.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
              <div className="list">
                {plan.features.map((feature, index) => (
                  <div key={index} className="item">
                    <div className="svg-margin">
                      <div className="svg-check" />
                    </div>
                    <span className="feature-text">
                      {feature.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < feature.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <div 
                className="button-cta"
                onClick={() => handlePlanClick(plan.id)}
              >
                <span className="button-text">{plan.buttonText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
