import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "/images/icons/testing.png",
      title: "SOIL TESTING",
      description: "Comprehensive soil analysis to ensure foundation safety and construction viability."
    },
    {
      icon: "/images/icons/mapping.png",
      title: "SURVEYING",
      description: "Precise land surveying to guide accurate project planning and boundary definitions."
    },
    {
      icon: "/images/icons/planning.png",
      title: "PLANNING & BUILDING PERMISSION",
      description: "Expert assistance with design planning and obtaining necessary approvals from authorities."
    },
    {
      icon: "/images/icons/civil-engineering.png",
      title: "STRUCTURAL DESIGNING",
      description: "Safe and efficient structural solutions tailored to each building's requirements."
    },
    {
      icon: "/images/icons/architectural.png",
      title: "ARCHITECTURAL DESIGNING",
      description: "Innovative architectural designs balancing aesthetics, function, and sustainability."
    },
    {
      icon: "/images/icons/apartment.png",
      title: "RESIDENTIAL CONSTRUCTION",
      description: "End-to-end residential building services for homes that reflect your vision and lifestyle."
    },
    {
      icon: "/images/icons/renovation.png",
      title: "RENOVATION & REMODELING",
      description: "Transform and upgrade your space with minimal disruption and maximum impact."
    },
    {
      icon: "/images/icons/office-building.png",
      title: "COMMERCIAL CONSTRUCTION",
      description: "Tailored commercial spaces built to meet functional and professional requirements."
    },
    {
      icon: "/images/icons/interior-design.png",
      title: "INTERIOR DESIGNING",
      description: "Creative interiors that enhance both beauty and usability of your spaces."
    },
    {
      icon: "/images/icons/construction-site.png",
      title: "INDUSTRIAL CONSTRUCTION",
      description: "Robust construction services tailored for industrial projects and infrastructure."
    },
    {
      icon: "/images/icons/agreement.png",
      title: "JOINT VENTURE",
      description: "Collaborative partnerships to leverage shared resources for successful project delivery."
    },
    {
      icon: "/images/icons/investment.png",
      title: "REAL ESTATE",
      description: "Complete real estate services including buying, selling, and property management."
    }
  ];

  return (
    <section id="services" className="services-section">
      <h1>WHAT WE DO</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <div className="icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;