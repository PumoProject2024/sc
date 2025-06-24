import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// your imports...
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

import { Enquiry } from './Components/enquiry/Enquiry';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Package from './Components/Package/Package';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Estimation from './Components/Estimation/Estimation';
import usePageView from './hooks/usePageView'; 

import './Pages/HomePage.css';

const AppContent = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  usePageView(); // 👈 This tracks page views

  useEffect(() => {
    setShowSidebar(false);
  }, [location]);

  return (
    <div className="homepage-container">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="homepage-body">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="homepage-content">
          <Routes>
            <Route path="/" element={<Enquiry />} />
            <Route path="/home" element={<Enquiry />} />
            <Route path="/services" element={<Services />} />
            <Route path="/recentproject" element={<Projects />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/package" element={<Package />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/estimation" element={<Estimation />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};


const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
