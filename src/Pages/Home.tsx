import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

function HomePage() {
  return (
    <div className="min-h-screen relative">
      <main>
        <Hero />
        <AboutUs />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
}

export default HomePage;
