import React from 'react';

const PatientStories = () => {
    const stories = [
      {
        title: "John's Journey to Recovery",
        description: "After a challenging battle with pneumonia, John shares how he regained his strength and health through physical therapy and support from healthcare professionals.",
      },
      {
        title: "Maria's Triumph Over Diabetes",
        description: "Maria discusses her journey of managing diabetes through diet changes, regular check-ups, and the importance of education in her healthcare.",
      },
      {
        title: "A Mother's Fight Against Cancer",
        description: "This story follows Sarah as she navigates her cancer treatment, highlighting the emotional support she received from her family and healthcare team.",
      },
      {
        title: "David's Heart Surgery Success",
        description: "David shares his experience of undergoing heart surgery, emphasizing the importance of pre-surgery preparations and post-operative care.",
      },
    ];
  
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-semibold mb-4 text-teal-600 border-b-2 border-teal-200 pb-2">
          Patient Stories
        </h2>
        <div className="space-y-4">
          {stories.map((story, index) => (
            <div key={index} className="p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">{story.title}</h3>
              <p className="text-gray-700 leading-relaxed">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PatientStories;
