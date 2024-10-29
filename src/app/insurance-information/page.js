import React from 'react';

const InsuranceInformation = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-purple-600 text-center">
        Insurance Information
      </h2>
      <p className="mb-6 text-gray-700">
        We accept a variety of insurance plans to ensure that you receive the care you need. Please see below for more details on accepted insurances.
      </p>

      <h3 className="text-2xl font-semibold mb-3 text-teal-600">Accepted Insurance Plans</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li className="text-gray-800">United Healthcare</li>
        <li className="text-gray-800">Medicare</li>
        <li className="text-gray-800">Medicaid</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 text-teal-600">Verifying Coverage</h3>
      <p className="mb-6 text-gray-700">
        Before your visit, please verify your insurance coverage. You can do this by contacting your insurance provider or by checking your member portal.
      </p>

      <h3 className="text-2xl font-semibold mb-3 text-teal-600">Financial Assistance</h3>
      <p className="mb-6 text-gray-700">
        If you need help with medical expenses, we offer financial assistance programs. Please contact our billing department for more information.
      </p>

      <h3 className="text-2xl font-semibold mb-3 text-teal-600">Contact Us</h3>
      <p className="mb-4 text-gray-700">If you have any questions regarding insurance or billing, please reach out to us:</p>
      <ul className="list-disc list-inside">
        <li className="text-gray-800">Phone: <span className="font-semibold">(123) 456-7890</span></li>
        <li className="text-gray-800">Email: <span className="font-semibold">mmtphackteam1@gmail.com</span></li>
      </ul>
    </div>
  );
};

export default InsuranceInformation;
