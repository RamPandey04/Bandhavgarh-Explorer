import React from 'react';
import Section from './Section';

const SafariBooking = () => (
  <Section id="safari" title="Safari Booking">
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Jeep Safari',
          description: 'Explore the park in an open jeep with a guide. Best for small groups.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjml_O205ClpNOXXygg0SnKTyA6cbemy5uNw&s',
        },
        {
          name: 'Canter Safari',
          description: 'Group safari in a 20-seater canter, ideal for larger groups.',
          image: 'https://www.tigersafaribandhavgarh.com/wp-content/uploads/2023/10/Canter-Safari-Bandhavgarh.jpg',
        },
        {
          name: 'Elephant Safari',
          description: 'Unique experience riding an elephant through the jungle.',
          image: 'https://www.trawell.in/admin/images/upload/731697660Tala_Elephant_Safari.jpg',
        },
      ].map((safari) => (
        <div key={safari.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src={safari.image} alt={safari.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{safari.name}</h3>
          <p className="mb-4">{safari.description}</p>
          <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
            Book Now
          </a>
        </div>
      ))}
    </div>
  </Section>
);

export default SafariBooking;