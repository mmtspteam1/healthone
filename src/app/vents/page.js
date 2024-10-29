import React from "react";

const HealthTips = () => {
  const tips = [
    "Communicate clearly with patients about their care plans.",
    "Utilize electronic health records to improve patient data management.",
    "Implement telemedicine services for greater accessibility.",
    "Encourage staff to engage in continuous training and education.",
    "Focus on personalized patient care to meet individual needs.",
    "Maintain rigorous infection control protocols.",
    "Engage with the community through health education programs.",
    "Monitor key performance indicators to track patient outcomes.",
    "Adopt sustainable practices to reduce environmental impact.",
    "Provide mental health resources for both patients and staff."
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-teal-600 border-b-2 border-teal-200 pb-2 text-center">
      Events & Workshops for Healthone
      </h2>
      <ul className="list-disc list-inside">
        {tips.map((tip, index) => (
          <li key={index} className="mb-2 text-gray-700 text-lg leading-relaxed">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTips;
