import { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';

import { Enquiry } from '../Components/enquiry/Enquiry';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About';
import Package from '../Components/Package/Package';
import Services from '../Components/Services/Services';
import Testimonials from '../Components/Testimonials/Testimonials';

import './HomePage.css';
import Estimation from '../Components/Estimation/Estimation';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  const [showSidebar, setShowSidebar] = useState(false);

  // Scroll to top whenever activeComponent changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeComponent]);

  const renderContent = () => {
    switch (activeComponent) {
      case 'home':
        return <Enquiry />;
      case 'services':
        return <Services />;
      case 'recentproject':
        return <Projects />;
      case 'contactus':
        return <Contact />;
      case 'package':
        return <Package />;
      case 'testimonials':
        return <Testimonials />;
      case 'aboutus':
        return <About />;
      case 'estimation':
        return <Estimation />;
      default:
        return <Enquiry />;
    }
  };

  return (
    <div className="homepage-container">
      <Header />

      {/* Mobile sidebar toggle button */}
      <button className="mobile-toggle" onClick={() => setShowSidebar(!showSidebar)}>
        ☰
      </button>

      <div className="homepage-body">
        <Sidebar
          setActiveComponent={(id) => {
            setActiveComponent(id);
            setShowSidebar(false); // close sidebar on item click (mobile)
          }}
          showSidebar={showSidebar}
        />
        <main className="homepage-content">
          {renderContent()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;