import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "We developed great partnership with Sarrathi Constructions and their dedication to the project was evident in all aspects, we appreciate their creative approach in bringing our dreams alive.",
      author: "Mr. Kalyana Raman",
      company: "Ashok Leyland",
      rating: 5
    },
    {
      id: 2,
      text: "We were guided by top class professionals who finished the project in a given time period and in given budget without comprising the quality.",
      author: "Mr. Ganeshan",
      company: "Inspector of police",
      rating: 5
    },
    {
      id: 3,
      text: "Our plot was very tricky we thought of single space room, but sarrathi constructions helped us in building entire space for a family with proper planning and sketch and project ended has perfect as they planned. Thanks to their commendable work",
      author: "Mr. Murgan",
      company: "Southern Railways",
      rating: 5
    },
    {
      id: 4,
      text: "Never a doubt occurred to me when  I decided to handover my dream space to be built by sarrathi constructions they delivered the space even before estimated time period with top notch quality most important of all they took in our consideration and made necessary alterations whenever we requested.",
      author: "Mrs. Ramya",
      company: "Bhavansrajiji vidhyashram",

      rating: 5
    },
    {
      id: 5,
      text: "I had a great experience with Sarrathi Constructions. They demonstrated professionalism, quality workmanship, and timely project completion. The team was responsive and maintained clear communication throughout the process, making the entire construction journey smooth and stress-free. Their attention to detail and commitment to customer satisfaction truly stood out. I highly recommend Sarrathi Constructions for anyone looking for reliable and skilled builders",
      author: "Mr. Ashwin Kalyan",
      rating: 5
    },
    {
      id: 6,
      text: "We are extremely satisfied with the quality of work delivered by your construction team. From the initial planning stages to the final handover, the entire process was handled with professionalism, transparency, and attention to detail. The project was completed on time and within budget. We appreciate your dedication and look forward to working with you on future projects.",
      author: "Mr. Prathi Haran",
      rating: 5
    },
    {
      id: 7,
      text: "I recently had the pleasure of working with Sarrathi Constructions for a renovation project, and I must say, their work exceeded my expectations. The team was highly professional, paying attention to every detail, from construction to interior design.",
      author: "Mr. Paul Kevin Surya",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  // Get 3 visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  // Generate unique key for each card to trigger re-animation
  const getCardKey = (testimonial, position) => {
    return `${testimonial.id}-${currentIndex}-${position}`;
  };

  // Handle manual indicator click
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h1>What our</h1>
        <h1 className="customers-text">Customers</h1>
        <h1 className="say-text">Say!</h1>
      </div>

      <div className="testimonials-grid">
        {getVisibleTestimonials().map((testimonial, position) => (
          <div
            key={getCardKey(testimonial, position)}
            className="testimonial-card"
            style={{ animationDelay: `${position * 0.1}s` }}
          >
            <div className="card-header">
              <div className="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor" />
                </svg>
              </div>
              <div className="avatar">
                <div className="avatar-circle">
                  <span className="avatar-emoji">👤</span>
                </div>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>

            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p className="position">{testimonial.position}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="indicators">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;