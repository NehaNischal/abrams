import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs';
import ProductShowcase from './components/ProductShowcase';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlantationPage from './components/PlantationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to the top when navigating between pages
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  if (currentPage === 'plantation') {
    return <PlantationPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="app">
      <Navbar />
      <Hero onNavigate={setCurrentPage} />
      <About />
      <AboutUs />
      <ProductShowcase />
      <WhyChoose />
      <Gallery />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
