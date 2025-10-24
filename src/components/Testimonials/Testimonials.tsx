import { useState } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: '"TimePulse cut our timesheet\nprocessing time by 80%. It\'s been\na game-changer for our\noperations."',
      name: 'Sarah Mitchell',
      title: 'HR Director, Global Consulting Firm'
    },
    {
      id: 2,
      quote: '"The AI automation is incredible.\nWhat used to take hours now\nhappens in minutes with better\naccuracy."',
      name: 'Michael Chen',
      title: 'Finance Manager, Tech Staffing Agency'
    },
    {
      id: 3,
      quote: '"Finally, a solution that\nunderstands how consulting firms\nactually work. TimePulse just gets\nit."',
      name: 'Jennifer Rodriguez',
      title: 'COO, Professional Services Group'
    }
  ];

  return (
    <div className="section-49">
      <div className="container-4a">
        <div className="container-4b">
          <div className="heading-4c">
            <div className="trusted-consulting">
              <span className="trusted-worldwide">Trusted</span>
              <span className="container-4d"> by Consulting Teams Worldwide</span>
            </div>
          </div>
          <div className="industry-leaders">
            <span className="container-4e">
              See what industry leaders say about TimePulse.
            </span>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${hoveredCard === testimonial.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="svg-50">
                <div className="quote-icon" />
              </div>
              <div className="testimonial-quote">
                <span className="quote-text">
                  {testimonial.quote.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < testimonial.quote.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
              <div className="testimonial-author">
                <div className="author-name">
                  <span className="name-text">{testimonial.name}</span>
                </div>
                <div className="author-title">
                  <span className="title-text">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
