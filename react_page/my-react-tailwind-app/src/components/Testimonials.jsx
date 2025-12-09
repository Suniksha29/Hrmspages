// src/components/Testimonials.js

import React from 'react';

const TestimonialCard = ({ quote }) => (
  <div className="bg-gray-200 p-4 text-xs italic text-gray-900 rounded-lg shadow-inner flex items-center justify-center h-28 w-full">
    {quote}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-10">
      <h2 className="text-xl font-bold text-center mb-6 border-t pt-4">Testimonials</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
        <TestimonialCard 
          quote="Incredibly insightful sessions and well-organized."
        />
        <TestimonialCard 
          quote="The HRMS demo was eye-opening—it showed us how technology can truly simplify HR."
        />
        <TestimonialCard 
          quote="Real-time workforce insights turned HR into a strategic asset."
        />
        <TestimonialCard 
          quote="Networking with industry leaders here was invaluable for my career growth."
        />
      </div>
    </section>
  );
};

export default Testimonials;