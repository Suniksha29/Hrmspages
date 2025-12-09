// src/App.js

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Speakers from './components/Speakers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Speakers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;