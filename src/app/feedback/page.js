// components/Feedback.js

import React from 'react';

const Feedback = () => {
  return (
    <div className="p-6 bg-gray-300 shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">We Value Your Feedback</h2>
      <p className="mb-4 text-gray-700">
        Your feedback is important to us. Please take a moment to share your experience at our healthone center.
      </p>

      <form className="space-y-4 text-gray-700">
        <div className='text-gray-700'>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            className="border border-blue-600 rounded-lg p-2 w-full"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            className="border border-blue-600 rounded-lg p-2 w-full"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-medium mb-1">Feedback</label>
          <textarea 
            id="feedback" 
            rows="4" 
            className="border border-blue-600 rounded-lg p-2 w-full"
            placeholder="Your Feedback"
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
