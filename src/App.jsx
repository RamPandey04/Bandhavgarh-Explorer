import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import SafariBooking from './Components/SafariBooking';
import TourPackages from './Components/TourPackages';
import BestTime from './Components/BestTime';
import HowToReach from './Components/HowToReach';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => (
  <div className="w-full">
    <Navbar />
    <Hero />
    <About />
    <SafariBooking />
    <TourPackages />
    <BestTime />
    <HowToReach />
    <Contact />
    <Footer />
  </div>
);

export default App;