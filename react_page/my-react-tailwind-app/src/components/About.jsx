// src/components/About.js

import React from 'react';
import { Briefcase, Clock, FileText, UserCheck, Settings } from 'lucide-react';
import audienceimage from '../assets/Audience.jpg';
const FeatureItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2 text-sm">
    <Icon className="w-4 h-4 text-blue-900" />
    <span className="font-semibold">{text}</span>
  </div>
);

const About = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-xl mb-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* About Text and Features (Left) */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-center md:text-left mb-4 border-b pb-2">
            About the Event
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A **Human Resource Management System (HRMS)** simplifies HR tasks by managing
            payroll, benefits, and attendance. An HRMS saves time, reduces errors,
            and empowers employees with easy self-service options.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={Briefcase} text="Employee Data Management" />
            <FeatureItem icon={Clock} text="Payroll & Attendance Tracking" />
            <FeatureItem icon={FileText} text="Compliance & Policy Management" />
            <FeatureItem icon={UserCheck} text="Employee Performance Management" />
            <FeatureItem icon={Settings} text="Self-Service for Employees" />
          </div>
        </div>

        {/* Event Photo (Right) */}
        <div className="md:col-span-1">
          <div className="h-56 bg-gray-300 rounded-lg overflow-hidden">
            <img 
              src={audienceimage} 
              alt="Audience at event" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;