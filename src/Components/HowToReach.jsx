import React from 'react';
import Section from './Section';

const HowToReach = () => (
  <Section id="reach" title="How to Reach">
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          mode: 'By Air',
          description: 'Nearest airport is Jabalpur (170 km). Flights from Delhi and Mumbai available.',
        },
        {
          mode: 'By Train',
          description: 'Umaria (35 km) and Katni (100 km) are the closest railway stations, well-connected to major cities.',
        },
        {
          mode: 'By Road',
          description: 'Well-connected via NH43. Regular buses and taxis from Jabalpur, Bhopal, and Nagpur.',
        },
      ].map((mode) => (
        <div key={mode.mode} className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">{mode.mode}</h3>
          <p>{mode.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default HowToReach;