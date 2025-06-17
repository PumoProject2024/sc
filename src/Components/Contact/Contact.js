import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import WhatsAppButton from '../Whatsapp/WhatsAppButton';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS service details
      const serviceId = 'service_ywhjukr';
      const templateId = 'template_v2b5nxo';
      const publicKey = 'WQ00WKIWS4D8TP3AL';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.mobile,
        query: formData.query,
        message: `New consultation request from ${formData.name}. 
                  Phone: ${formData.mobile}, 
                  Email: ${formData.email}
                  Query: ${formData.query}`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', mobile: '', email: '', query: '' });

      setTimeout(() => {
        setShowPopup(false);
        setSubmitStatus('');
      }, 2000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({ name: '', mobile: '', email: '', query: '' });
    setSubmitStatus('');
  };

  return (
    <section id="contact">
      {/* Consultation Section */}
      <div className="consultation-section">
        <div className="consultation-content">
          <h2>CONSULT WITH TECHNICAL TEAM</h2>
          <p>
            Sarrathi Construction's technical team integrates design precision with on-site expertise.
            Their proactive planning and execution drive project success from start to finish.
          </p>
          <button
            className="consultation-btn"
            onClick={() => setShowPopup(true)}
          >
            CONNECT WITH OUR TECH TEAM →
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content1" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>
            <h3>Connect to Our Tech Team</h3>

            <div className="package-info-banner">
              Enter valid mobile number and email address to connect with our technical team
            </div>

            {submitStatus === 'success' && (
              <div className="status-message success">
                Thank you for contacting us. You will receive a call from our technical team soon.              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                Sorry, there was an error submitting your request. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="form-group">
                <label htmlFor="query">Enter your query</label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  placeholder="Please describe your project requirements, budget, timeline, or any specific queries you have..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="submit-enquiry-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT '}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="contact-container">
        <div className="contact-info">
          <h1>Meet Us</h1>
          {/* First Row */}
          <div className="contact-row">
            <div className="contact-item">
              <div className="icon-container">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <strong>Phone Number</strong>
                <p>+91 98405 24873 / 98407 98059</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <strong>Email Id</strong>
                <p>build@sarrathiconstructions.com</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="contact-row">
            <div className="contact-item address-item">
              <div className="icon-container">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <strong>Office Address</strong>
                <p>82, Jagannathan Salai, Anjugam Nagar<br />
                  SRP Colony, Kolathur, Chennai,<br />
                  Tamil Nadu 600082.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7313024047617!2d80.2250468758887!3d13.116201011689858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264549d0a277f%3A0x537c80f9826a8c57!2sSarrathi%20Constructions!5e0!3m2!1sen!2sin!4v1747981999115!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="circle-map"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sarrathi Construction Location"
          ></iframe>
        </div>
      </div>
      <WhatsAppButton
        phone="919840524873"
        message="Hello Sarrathi Constructions, Can I get more info on package details?"
        size={48}
      />
    </section>
  );
};

export default Contact;