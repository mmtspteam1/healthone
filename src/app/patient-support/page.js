import React from 'react';

const PatientSupport = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-teal-600 border-b-2 border-teal-200 pb-2">
        Patient Support
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Welcome to our Patient Support Center. We are here to assist you with any questions or concerns you may have regarding your healthcare.
      </p>
      
      <h3 className="text-2xl font-semibold mb-2 text-teal-500">
        Contact Us
      </h3>
      <p className="mb-4 text-gray-700">If you need immediate assistance, please contact our support team:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li className="mb-1">Phone: <span className="font-semibold">(123) 456-7890</span></li>
        <li>Email: <span className="font-semibold text-gray-700">mmtspteam1@gmail.com</span></li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-teal-500">
        Frequently Asked Questions
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li className="mb-1"><strong>How do I make an appointment?</strong> You can schedule an appointment through our online portal or by calling us.</li>
        <li className="mb-1"><strong>What should I bring to my first appointment?</strong> Please bring your ID, insurance card, and any relevant medical records.</li>
      </ul>
    </div>
  );
};

export default PatientSupport;
