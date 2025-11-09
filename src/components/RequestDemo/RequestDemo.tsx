import { useState, FormEvent, ChangeEvent } from 'react';
import './RequestDemo.css';

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  company?: string;
}

export default function RequestDemo() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    company: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!validateEmail(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        workEmail: '',
        company: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ fullName: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-c6" id="contact">
      <div className="background-c7">
        <div className="gradient" />
        <div className="container-c8">
          <div className="container-c9">
            <div className="heading-ca">
              <span className="time-pulse-on-the-go">
                TimePulse on the go
              </span>
            </div>
            <div className="container-cb">
              <span className="capture-time-automatically">
                Capture time automatically on desktop and mobile. Request a demo and get early
                <br />
                access to our iOS and Android apps.
              </span>
            </div>
          </div>
          
          <form className="form" onSubmit={handleSubmit}>
            {submitSuccess && (
              <div className="success-message">
                <span>✓ Thank you! We'll be in touch soon.</span>
              </div>
            )}
            
            <div className="container-d4">
              <div className="input">
                <div className="container-d5">
                  <span className="full-name">Full name</span>
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`container-d6 ${errors.fullName ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="input-d7">
                <div className="container-d8">
                  <span className="work-email">Work email</span>
                  {errors.workEmail && <span className="error-text">{errors.workEmail}</span>}
                </div>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className={`container-d9 ${errors.workEmail ? 'error' : ''}`}
                  placeholder="your.email@company.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="input-da">
                <div className="container-db">
                  <span className="company">Company</span>
                  {errors.company && <span className="error-text">{errors.company}</span>}
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`container-dc ${errors.company ? 'error' : ''}`}
                  placeholder="Your company name"
                  disabled={isSubmitting}
                />
              </div>
              
              <button 
                type="submit" 
                className={`request-demo ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <span className="button-dd">
                  {isSubmitting ? 'Submitting...' : 'Request demo'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
