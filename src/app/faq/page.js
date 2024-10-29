"use client";

import { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What is preventive healthcare?",
      answer: "Preventive healthcare includes measures taken for disease prevention, rather than disease treatment. It aims to avoid illness, improve health, and prolong life through proactive efforts like vaccinations, regular screenings, and lifestyle adjustments."
    },
    {
      question: "How can I maintain a balanced diet?",
      answer: "Maintaining a balanced diet involves eating a variety of foods in appropriate amounts. Focus on whole grains, lean proteins, fruits, vegetables, and healthy fats, while minimizing processed foods, sugar, and excess salt."
    },
    {
      question: "Why is mental health important?",
      answer: "Mental health is essential because it affects how we think, feel, and act in our daily lives. It influences our ability to handle stress, relate to others, and make decisions. Prioritizing mental well-being improves overall quality of life."
    }
  ];

  return (
    <div className="accordion w-full max-w-3xl mx-auto mt-10 p-4 bg-gray-300 rounded-lg shadow-md">
      {items.map((item, index) => (
        <div className="accordion-item border-b border-gray-300" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button flex justify-between items-center w-full p-4 text-left text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none ${openIndex === index ? 'bg-teal-600 text-white' : 'text-gray-800'}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`collapse${index}`}
            >
              <span className="font-medium">{item.question}</span>
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#basicAccordion"
          >
            <div className="accordion-body p-4 bg-white text-gray-700">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
