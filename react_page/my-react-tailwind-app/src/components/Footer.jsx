// src/components/Footer.js

import React from 'react';
import { Send, Globe, Sun } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
        
        {/* Contact */}
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Contact:</span>
          <span className="text-blue-400 hover:text-blue-500 cursor-pointer">
            info@myeventspot.com
          </span>
        </div>

        {/* Subscription Form */}
        <div className="flex items-center space-x-2 w-full md:w-auto justify-center">
          <input 
            type="email" 
            placeholder="enter your email..." 
            className="p-2 text-xs rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-2/3 md:w-auto"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xs rounded transition duration-300">
        </div>

        {/* Icons/Settings */}
        <div className="flex space-x-4">
          <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <Send className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <Sun className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
