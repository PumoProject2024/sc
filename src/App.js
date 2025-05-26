import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;