import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Package.css';
import WhatsAppButton from '../Whatsapp/WhatsAppButton';

const Package = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleTopicClick = (pkg, topic) => {
    setSelectedPackage(pkg);
    setSelectedTopic(topic);
    setShowPopup(true);
  };

  const handleViewPackage = (pkg) => {
    setSelectedPackage(pkg);
    setSelectedTopic(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedPackage(null);
    setSelectedTopic(null);
    setFormData({ name: '', email: '', mobile: '' });
    setSubmitMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = 'service_mc8o6ig';// Replace with your EmailJS service ID
      const templateId = 'template_nxukv4d'; // Replace with your EmailJS template ID
      const userId = 'SVIfNeyxJHRHMt_4_'; // Replace with your EmailJS user ID

      const emailData = {
        to_email: 'your-email@example.com', // Replace with your email
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        package_name: selectedPackage.name,
        package_price: selectedPackage.price,
        package_period: selectedPackage.period,
        topic_name: selectedTopic ? selectedTopic.name : 'General Package Inquiry',
        message: `New package inquiry for ${selectedPackage.name} package at ${selectedPackage.price}/${selectedPackage.period}${selectedTopic ? ` - Topic: ${selectedTopic.name}` : ''}. Customer details: Name: ${formData.name}, Email: ${formData.email}, Mobile: ${formData.mobile}`,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        userId
      );

      console.log('Email sent successfully:', response);
      setSubmitMessage('Thank you! Your inquiry has been submitted successfully. We will contact you soon.');
      
      // Reset form after successful submission
      setTimeout(() => {
        handleClosePopup();
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Sorry, there was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const packages = [
    {
      name: 'BASIC',
      price: '₹2050',
      period: 'sqft',
      topics: [
        {
          name: 'Scope of Work',
          points: []
        },
        {
          name: 'Structure',
          points: []
        },
        {
          name: 'Kitchen',
          points: []
        },
        {
          name: 'Bathroom',
          points: []
        },
        {
          name: 'Plumbing',
          points: []
        },
        {
          name: 'Doors & Windows',
          points: []
        },
        {
          name: 'Painting',
          points: []
        },
        {
          name: 'Flooring',
          points: []
        },
        {
          name: 'Electrical',
          points: []
        },
        {
          name: 'Other Inclusive Things',
          points: []
        }
      ],
      isPopular: false
    },
    {
      name: 'STANDARD',
      price: '₹2200',
      period: 'sqft',
      topics: [
        {
          name: 'Scope of Work',
          points: []
        },
        {
          name: 'Structure',
          points: []
        },
        {
          name: 'Kitchen',
          points: []
        },
        {
          name: 'Bathroom',
          points: []
        },
        {
          name: 'Plumbing',
          points: []
        },
        {
          name: 'Doors & Windows',
          points: []
        },
        {
          name: 'Painting',
          points: []
        },
        {
          name: 'Flooring',
          points: []
        },
        {
          name: 'Electrical',
          points: []
        },
        {
          name: 'Other Inclusive Things',
          points: []
        }
      ],
      isPopular: true
    },
    {
      name: 'PREMIUM',
      price: '₹2400',
      period: 'sqft',
      topics: [
        {
          name: 'Scope of Work',
          points: []
        },
        {
          name: 'Structure',
          points: []
        },
        {
          name: 'Kitchen',
          points: []
        },
        {
          name: 'Bathroom',
          points: []
        },
        {
          name: 'Plumbing',
          points: []
        },
        {
          name: 'Doors & Windows',
          points: []
        },
        {
          name: 'Painting',
          points: []
        },
        {
          name: 'Flooring',
          points: []
        },
        {
          name: 'Electrical',
          points: []
        },
        {
          name: 'Other Inclusive Things',
          points: []
        }
      ],
      isPopular: false
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {packages.map((pkg, index) => (
          <div key={index} className={`package-card ${pkg.isPopular ? 'popular' : ''}`}>
            {pkg.isPopular}

            <div className="package-header">
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">
                <span className="price">{pkg.price}</span>
                <span className="period">/{pkg.period}</span>
              </div>
            </div>

            <div className="package-features">
              {pkg.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="topic-section">
                  <div
                    className="topic-header"
                    onClick={() => handleTopicClick(pkg, topic)}
                  >
                    <span className="topic-name">{topic.name}</span>
                    <span className="arrow">
                      ›
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`select-button ${pkg.isPopular ? 'popular-button' : ''}`}
              onClick={() => handleViewPackage(pkg)}
            >
              View Package
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <h2>
                {selectedTopic 
                  ? ` Package Details` 
                  : 'Package Details'
                }
              </h2>
              <button className="close-button" onClick={handleClosePopup}>×</button>
            </div>
            
            <div className="popup-content">
              <div className="selected-package-info">
                <p className="package-price-info">
                  {selectedTopic 
                    ? `Enter valid mobile number and email address to receive package details`
                    : 'Enter valid mobile number and email address to receive package details'
                  }
                </p>
              </div>

              <div className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
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
                  />
                </div>

                {submitMessage && (
                  <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                    {submitMessage}
                  </div>
                )}

                <button 
                  type="button"
                  className="submit-button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        <WhatsAppButton
        phone="919840524873"
        message="Hello Sarrathi Constructions, Can I get more info on package details?"
        size={48}
      />
    </div>
  );
};

export default Package;