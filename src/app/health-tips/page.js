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
    "Provide mental health resources for both patients and staff."
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-600 text-center underline">
        Health Tips for Patients
      </h2>
      <ul className="list-disc list-inside space-y-4">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="text-gray-800 font-serif text-xl bg-purple-100 rounded-lg p-4 shadow-sm hover:bg-purple-200 transition duration-200"
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTips;
