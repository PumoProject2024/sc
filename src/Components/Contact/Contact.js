import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    location: '',
    message: ''
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
      'service_mc8o6ig',       // e.g., 'service_abc123'
      'template_zqto05t',      // e.g., 'template_xyz456'
      formData,
      'SVIfNeyxJHRHMt_4_'        // e.g., 'ABCdefGHIjkl123456'
    )
    .then((result) => {
      alert("Your message is successfully sent. Kindly wait until we get back to you.");
      setFormData({
        name: '',
        contact: '',
        email: '',
        location: '',
        message: ''
      });
    }, (error) => {
      alert("Something went wrong. Please try again later.");
      console.error(error);
    });
  };

  return (
    <section id="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-enqiury">
          <form onSubmit={handleSubmit}>
            <br />
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
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
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="location"
              placeholder="Your Location" 
              value={formData.location}
              onChange={handleInputChange}
              required 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit"><strong>Send Message</strong></button>
          </form>
        </div>

        <div className="contact-info">
          <p><strong>Office Address:</strong><br />
            82, Jagannathan Salai, Anjugam Nagar<br />
            SRP Colony, Kolathur, Chennai,<br />
            Tamil Nadu 600082.</p>
            <br/>

          <p><strong>Contact Person:</strong><br />
            Vasudevan K/ Parthasarrathi V</p>
                      <br/>

          <p><strong><i className="fas fa-phone" style={{fontSize: '0.7em'}}></i> Phone Number:</strong><br />
            +91 98407 98059/ 98405 24873</p>
            <br/>

          <p><strong><i className="fas fa-envelope" style={{fontSize: '0.7em'}}></i> Email Id:</strong><br />
            sarrathicontruction@gmail.com</p>
        </div>

        <div className="map-container">
          <br />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7313024047617!2d80.2250468758887!3d13.116201011689858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264549d0a277f%3A0x537c80f9826a8c57!2sSarrathi%20Constructions!5e0!3m2!1sen!2sin!4v1747981999115!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            className="circle-map"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sarrathi Construction Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
