import WhatsAppButton from '../Whatsapp/WhatsAppButton';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-content">
            <h2 className="about-title">About Us</h2>

            <p className="about-description">
              We founded our company out of pure love and passion for the engineering and construction industry. From the very beginning, our mission has been to create spaces that inspire, uplift, and bring lasting value to the people who live in them. Over the past 30+ years, we have built a reputation rooted in quality, trust, and dedication.
              Our greatest reward is not just the structures we build, but the joy we see on our clients' faces when their dream homes come to life. For us, a house is more than just walls and roofs — it's a place where love, warmth, and memories flourish. Each project we undertake is driven by a commitment to excellence and a deep respect for the trust our clients place in us.
              With over three decades of experience in the construction field, we've proudly delivered countless residential, commercial, and industrial projects that stand as testaments to our craftsmanship and integrity. Our legacy is defined by satisfied clients, strong relationships, and an unwavering promise to continue delivering top-tier quality in every brick we lay and every space we shape.
            </p>
          </div>

          <div className="about-image-section">
            <div className="image-container">
              <img
                src="/images/aboutus.jpeg"
                alt="Business professionals"
                className="about-image"
              />
            </div>
            <div className="floating-coin">
            </div>
          </div>
        </div>
      </div>
       <div className="statistics">
              <div className="stat-item">
                <div className="stat-number">30 +</div>
                <div className="stat-label">Years Of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40 + </div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100 +</div>
                <div className="stat-label">Happy Customers</div>
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

export default About;