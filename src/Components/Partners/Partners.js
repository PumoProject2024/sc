import React from 'react';
import './Partners.css';

const Partners = () => {
  const vendors = [
    { name: "Somany", logo: "/images/logos/somany.png" },
    { name: "Kajaria", logo: "/images/logos/kajaria.png" },
    { name: "Asian Paints", logo: "/images/logos/asian-paints.png" },
    { name: "UltraTech", logo: "/images/logos/ultratech.png" },
    { name: "Parryware", logo: "/images/logos/parryware.png" },
    { name: "Anchor Roma", logo: "/images/logos/anchor.png" }
  ];

  const banks = [
    { name: "SBI", logo: "https://discovertemplate.com/wp-content/uploads/2024/04/SBI.jpg" },
    { name: "ICICI Bank", logo: "/images/logos/icici.png" },
    { name: "Axis Bank", logo: "/images/logos/axis.png" },
    { name: "HDFC Bank", logo: "/images/logos/hdfc.png" }
  ];

  return (
    <section id="partners" className="partners-section">
      <h1>Our Vendors and Banking Partners</h1>
      <div className="partners-container">
        
        <div className="partner-group vendors">
          <h3>Our Vendors</h3>
          <div className="partner-logos">
            {vendors.map((vendor, index) => (
              <div key={index} className="partner-item">
                <img src={vendor.logo} alt={vendor.name} />
                <p><strong>{vendor.name}</strong></p>
              </div>
            ))}
          </div>
        </div>

        <div className="partner-group banks">
          <h3>Banking Partners</h3>
          <div className="partner-logos">
            {banks.map((bank, index) => (
              <div key={index} className="partner-item">
                <img src={bank.logo} alt={bank.name} />
                <p><strong>{bank.name}</strong></p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;