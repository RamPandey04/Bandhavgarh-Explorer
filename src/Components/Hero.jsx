import React from 'react';

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center">
    <img
      src="https://blog-content.ixigo.com/wp-content/uploads/2013/08/bandhavgarh-national-park_25.jpg"
      alt="Bandhavgarh Tiger"
      className="absolute inset-0 w-full h-full object-cover brightness-50"
    />
    <div className="relative text-center text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Bandhavgarh National Park</h1>
      <p className="text-xl mb-6">Experience the Thrill of Wildlife in the Heart of India</p>
      <a href="#safari" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
        Book Your Safari
      </a>
    </div>
  </section>
);

export default Hero;