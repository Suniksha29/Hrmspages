// src/components/Speakers.js

import React from 'react';
import { User, Calendar } from 'lucide-react';

const speakerData = [
  { name: 'John Doe', role: 'Chief People Officer' },
  { name: 'Jack Smith', role: 'Product Manager' },
  { name: 'Rita Miles', role: 'HR Manager' },
  { name: 'Taj Singh', role: 'Performance Analyst' },
  { name: 'Karim Zang', role: 'HR Consultant' },
  { name: 'Robert Blake', role: 'Assistant Manager' },
];

const SpeakerCard = ({ name, role }) => (
  <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
      <User className="w-8 h-8 text-gray-600" />
    </div>
    <p className="text-[18px] font-bold text-center">{name}</p>
    <p className="text-[18px] text-black-500 text-center">{role}</p>
  </div>
);

const Speakers = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-center mb-6">Speakers</h2>
      
      {/* Speaker Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {speakerData.map((speaker, index) => (
          <SpeakerCard key={index} name={speaker.name} role={speaker.role} />
        ))}
      </div>

      {/* Registration Form */}
      <div className="flex justify-center">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl w-full max-w-sm">
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-2 text-sm border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 text-sm border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-300"
            >
              Register Now
            </button>
          </form>
          <button className="flex items-center justify-center 
                   w-48 py-2 mt-4 
                   **bg-gray-700 text-white border border-gray-600** rounded-md text-sm font-semibold 
                   hover:bg-gray-600 **hover:text-white** transition duration-200 
                   mx-auto">
    <Calendar className="w-4 h-4 mr-2" />
    Add To Calendar
</button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;