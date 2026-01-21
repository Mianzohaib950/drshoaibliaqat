
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Stats from './components/Stats';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Testimonials />
        <Appointment />
        <Stats />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
