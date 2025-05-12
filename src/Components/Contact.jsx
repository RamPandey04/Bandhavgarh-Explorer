import { useState } from 'react';
import Section from './Section';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (No backend, data not sent)');
  };

  return (
    <Section id="contact" title="Contact Us">
      <div className="max-w-lg mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
          >
            Send Message
          </button>
        </div>
        <p className="mt-4 text-center text-sm">
          Email: info@bandhavgarhnationalpark.in | Phone: +91-6263365513
        </p>
      </div>
    </Section>
  );
};

export default Contact;