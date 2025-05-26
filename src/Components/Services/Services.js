import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "/images/icons/soil testing.png",
      title: "Soil Testing",
      description: "Comprehensive soil analysis to ensure foundation safety and construction viability."
    },
    {
      icon: "/images/icons/Surveying.png",
      title: "Surveying",
      description: "Precise land surveying to guide accurate project planning and boundary definitions."
    },
    {
      icon: "/images/icons/Planning.png",
      title: "Planning & Building Permission",
      description: "Expert assistance with design planning and obtaining necessary approvals from authorities."
    },
    {
      icon: "/images/icons/Stuctural Design.png",
      title: "Structural Designing",
      description: "Safe and efficient structural solutions tailored to each building's requirements."
    },
    {
      icon: "/images/icons/Architectural Design.png",
      title: "Architectural Designing",
      description: "Innovative architectural designs balancing aesthetics, function, and sustainability."
    },
    {
      icon: "/images/icons/Residential.png",
      title: "Residential Construction",
      description: "End-to-end residential building services for homes that reflect your vision and lifestyle."
    },
    {
      icon: "/images/icons/Renovation.png",
      title: "Renovation & Remodeling",
      description: "Transform and upgrade your space with minimal disruption and maximum impact."
    },
    {
      icon: "/images/icons/Commercial.png",
      title: "Commercial Construction",
      description: "Tailored commercial spaces built to meet functional and professional requirements."
    },
    {
      icon: "/images/icons/Interior.png",
      title: "Interior Designing",
      description: "Creative interiors that enhance both beauty and usability of your spaces."
    },
    {
      icon: "/images/icons/Industrial.png",
      title: "Industrial Construction",
      description: "Robust construction services tailored for industrial projects and infrastructure."
    },
    {
      icon: "/images/icons/Estimate.png",
      title: "Estimation",
      description: "Accurate project cost and material estimates for informed planning and budgeting."
    },
    {
      icon: "/images/icons/Joint Venture.png",
      title: "Joint Venture",
      description: "Collaborative partnerships to leverage shared resources for successful project delivery."
    },
    {
      icon: "/images/icons/Real Estate.png",
      title: "Real Estate",
      description: "Complete real estate services including buying, selling, and property management."
    }
  ];

  return (
    <section id="services" className="services-section">
      <h1>Our Services</h1>
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