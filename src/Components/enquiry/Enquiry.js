import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Enquiry.css';
import { Calendar, Hammer, Mail, MapPin, Phone, User, CheckCircle } from 'lucide-react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

export const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    location: '',
    plan: '',
    purpose: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_mc8o6ig',
      'template_zqto05t',
      formData,
      'SVIfNeyxJHRHMt_4_'
    )
      .then(() => {
        alert("Your message is successfully sent. Kindly wait until we get back to you.");
        setFormData({
          name: '',
          contact: '',
          email: '',
          location: '',
          plan: '',
          purpose: ''
        });
      }, (error) => {
        alert("Something went wrong. Please try again later.");
        console.error(error);
      });
  };

  return (
    <section id="home" className='Enquriy'>
      <div className="enquiry-container">
        <div className="contact-content">
          <div className="contact-enquiry">
            <form onSubmit={handleSubmit}>
              <h1>Get in Touch</h1>

              <div className="input-with-icon">
                <User size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-with-icon">
                <Phone size={18} />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact No"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength="10"
                />
              </div>

              <div className="input-with-icon">
                <Mail size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-with-icon">
                <MapPin size={18} />
                <input
                  type="text"
                  name="location"
                  placeholder="Site Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-with-icon">
                <Calendar size={18} />
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">When do you plan to build?</option>
                  <option value="0 to 3 Months">0 to 3 Months</option>
                  <option value="3 to 6 Months">3 to 6 Months</option>
                  <option value="6 months to 1 year">6 months to 1 year</option>
                  <option value="Next year">Next year</option>
                </select>
              </div>

              <div className="input-with-icon">
                <Hammer size={18} />
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Project Description</option>
                  <option value="New construction">New construction</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Interior designing">Interior designing</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Joint venture">Joint venture</option>
                  <option value="Turnkey House construction">Turnkey House construction</option>
                </select>
              </div>

              <button type="submit"><strong>Submit</strong></button>
            </form>
          </div>

          <div className="enquiry-info">
            <div className="price-highlight">
              <div className="line1">CONSTRUCTION STARTS @</div>
              {/* <div className="line2">@</div> */}
              <div className="line3">Rs:2200/sqft</div>
            </div>
            {/* Existing content wrapped in new container */}
            <div className="enquiry-info-content">
              <h2>Why Choose Us?</h2>
              <p className="why-text">
                With over 30 years of industry expertise, we bring passion and precision to every project. Our work spans residential, commercial, and industrial spaces, built on quality and trust.
                Each structure is thoughtfully crafted to inspire, endure, and enhance everyday life. We are committed to delivering lasting value and building enduring client relationships.
              </p>
              <ul className="why-points">
                <li><CheckCircle size={18} color="#28a745" /> 30+ Years of Experience</li>
                <li><CheckCircle size={18} color="#28a745" /> Uncompromising Quality</li>
                <li><CheckCircle size={18} color="#28a745" /> Client-Centric Approach</li>
                <li><CheckCircle size={18} color="#28a745" /> On-Time, On-Budget Delivery</li>
                <li><CheckCircle size={18} color="#28a745" /> Experienced & Skilled Team</li>
                <li><CheckCircle size={18} color="#28a745" /> 10-Year Structural Warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Projects/>
      <Contact/>
    </section>
  );
};
