import React from 'react';
import Section from './Section';

const TourPackages = () => (
  <Section id="packages" title="Tour Packages">
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          name: 'Weekend Getaway',
          duration: '2 Days / 1 Night',
          description: 'Quick escape with one jeep safari and stay in a forest lodge.',
        },
        {
          name: 'Wildlife Adventure',
          duration: '4 Days / 3 Nights',
          description: 'In-depth exploration with multiple safaris and guided tours.',
        },
      ].map((pkg) => (
        <div key={pkg.name} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
          <p className="text-gray-600 mb-2">{pkg.duration}</p>
          <p>{pkg.description}</p>
          <a href="#" className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
            View Details
          </a>
        </div>
      ))}
    </div>
  </Section>
);

export default TourPackages;