// src/components/Header.js

import React from 'react';
import logo from  '../assets/logo.jpg';
const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      {/* Top Nav (Small) */}
      <div className="flex items-center justify-between p-3 border-b border-blue-800">
       </div>

      {/* Main Event Header */}
      <div className="text-center py-6">
        <div className="flex justify-center items-center space-x-4 mb-1">
          <img src={logo} width="50" height="50" />
          <h1 className="text-xl font-bold">Human Resource Management System</h1>
        </div>
        <p className="text-sm mb-4">December 15, Mumbai</p>
       <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-8 rounded-full shadow-lg transition duration-300">
          Save Your Spot
        </button>
      </div>
    </header>
  );
};

export default Header;
