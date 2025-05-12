import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;