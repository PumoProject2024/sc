import './Contact.css';

const Contact = () => {
 
  return (
    <section id="contact">
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