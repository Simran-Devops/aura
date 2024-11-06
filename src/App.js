import React, { useState } from 'react';
import './App.css';
import orbLogo from './Orb.png';

const GoogleIcon = () => (
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const OptimizeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PerformanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ScaleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CreateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const KnowledgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function App() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Aura BRD Generator and how does it work?",
      answer: "Aura BRD Generator is an AI-powered tool that helps you create comprehensive Business Requirements Documents. It uses advanced AI to understand your project needs and automatically generates well-structured BRDs following industry best practices."
    },
    {
      question: "How accurate are the generated BRDs?",
      answer: "Aura generates highly accurate BRDs by leveraging industry standards and best practices. Each document is customizable and can be reviewed and edited to ensure perfect alignment with your project needs."
    },
    {
      question: "Can I collaborate with my team on BRDs?",
      answer: "Yes! Aura supports real-time collaboration, allowing team members to review, comment, and edit BRDs together. This ensures everyone stays aligned and can contribute to the requirements documentation process."
    },
    {
      question: "What types of projects can I use Aura for?",
      answer: "Aura is versatile and can handle BRDs for various project types, including software development, system implementations, business process improvements, and more. The AI adapts to your specific industry and project needs."
    }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src={orbLogo} alt="Aura" className="orb-logo" />
            <span className="logo-text">Aura</span>
          </div>
        </div>
        <div className="nav-center">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-right">
          <button className="get-started-btn">Get Started</button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-left">
          <h1>
            Your Business,<br />
            amplified
          </h1>
          <p className="subtitle">Business-first AI that helps you create in confidence.</p>
          
          <div className="sign-in-container">
            <button className="google-sign-in">
              <GoogleIcon />
              Continue with Google
            </button>
            
            <div className="divider">
              <span>OR</span>
            </div>

            <div className="email-sign-in">
              <input type="email" placeholder="Enter your personal or work email" />
              <button className="email-submit">Continue with email</button>
            </div>

            <p className="terms">
              By continuing, you agree to EMB Global's <a href="#terms">Consumer Terms</a> and <a href="#usage">Usage
              Policy</a>, and acknowledge their <a href="#privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <div className="vertical-divider"></div>

        <div className="hero-right">
          <div className="demo-graphics">
            <div className="demo-card">
              <div className="demo-icon">
                <OptimizeIcon />
              </div>
              <div className="demo-text">Identify code optimizations</div>
            </div>
            <div className="demo-card">
              <div className="demo-icon">
                <PerformanceIcon />
              </div>
              <div className="demo-text">Boost performance</div>
            </div>
            <div className="demo-card">
              <div className="demo-icon">
                <TrackIcon />
              </div>
              <div className="demo-text">Track improvements</div>
            </div>
            <div className="demo-card active">
              <div className="demo-icon">
                <ScaleIcon />
              </div>
              <div className="demo-text">Scale with confidence</div>
            </div>
          </div>
        </div>
      </main>

      <section className="meet-claude">
        <div className="section-header">
          <img src={orbLogo} alt="Aura" className="section-logo" />
          <h2>Meet Aura</h2>
        </div>
        <p className="claude-description">
          Aura is your intelligent BRD (Business Requirements Document) generator, designed to streamline 
          your project documentation process with precision and efficiency.
        </p>

        <div className="claude-features">
          <div className="claude-demo">
            <div className="claude-window">
              <div className="window-header">
                <span>Aura BRD Generator</span>
              </div>
              <div className="window-content">
                <div className="chat-message">
                  Generate a comprehensive Business Requirements Document for an e-commerce platform, 
                  including user stories, functional requirements, and technical specifications.
                </div>
              </div>
            </div>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <CreateIcon />
              </div>
              <div className="feature-text">
                <h3>Create Professional BRDs</h3>
                <p>Generate detailed, well-structured Business Requirements Documents with AI-powered assistance.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <KnowledgeIcon />
              </div>
              <div className="feature-text">
                <h3>Industry Best Practices</h3>
                <p>Leverage industry standards and best practices for comprehensive requirement documentation.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <ShareIcon />
              </div>
              <div className="feature-text">
                <h3>Collaborate Seamlessly</h3>
                <p>Share and iterate on BRDs with your team in real-time for better project alignment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-plans" id="pricing">
        <h2>Explore plans</h2>
        
        <div className="plans-container">
          <div className="plan-card">
            <h3>Free</h3>
            <p className="price">$0 Free for everyone</p>
            <ul className="features-list">
              <li>
                <span className="check-icon">✓</span>
                Access to Aura BRD Generator
              </li>
              <li>
                <span className="check-icon">✓</span>
                Basic document templates
              </li>
              <li>
                <span className="check-icon">✓</span>
                Standard BRD generation
              </li>
            </ul>
          </div>

          <div className="plan-card">
            <h3>Pro</h3>
            <p className="price">$20 Per person / month</p>
            <p className="subtitle">Everything in Free, plus:</p>
            <ul className="features-list">
              <li>
                <span className="check-icon">✓</span>
                Advanced BRD templates
              </li>
              <li>
                <span className="check-icon">✓</span>
                Priority processing and support
              </li>
              <li>
                <span className="check-icon">✓</span>
                Access to premium features
              </li>
              <li>
                <span className="check-icon">✓</span>
                Early access to new features
              </li>
            </ul>
          </div>

          <div className="plan-card">
            <h3>Enterprise</h3>
            <p className="price">Contact sales</p>
            <p className="subtitle">Everything in Pro, plus:</p>
            <ul className="features-list">
              <li>
                <span className="check-icon">✓</span>
                Custom BRD workflows
              </li>
              <li>
                <span className="check-icon">✓</span>
                Single sign-on (SSO)
              </li>
              <li>
                <span className="check-icon">✓</span>
                Role-based access control
              </li>
              <li>
                <span className="check-icon">✓</span>
                SCIM provisioning
              </li>
              <li>
                <span className="check-icon">✓</span>
                Audit logs
              </li>
              <li>
                <span className="check-icon">✓</span>
                Custom integrations
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="expand-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#api">API Reference</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <img src={orbLogo} alt="Aura" className="orb-logo" />
            <span className="logo-text">Aura</span>
          </div>
          <p className="copyright">Copyright © {new Date().getFullYear()} Mantarav Private Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
