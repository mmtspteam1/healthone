// src/app/components/HealthcareBlogs.js

const HealthcareBlogs = () => {
  const blogs = [
    {
      title: "The Importance of Regular Check-ups",
      description: "Regular check-ups help detect health issues early.",
    },
    {
      title: "Healthy Eating Habits",
      description: "Learn about balanced diets and nutrition.",
    },
    {
      title: "Mental Health Awareness",
      description: "Understanding mental health is crucial for well-being.",
    },
    {
      title: "Benefits of Physical Exercise",
      description: "Stay active to improve your overall health.",
    },
  ];

  return (
    <div className="bg-blue-50 shadow-xl rounded-lg p-8 mb-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-teal-700 border-b-4 border-teal-300 pb-3 tracking-tight">
        Healthcare Blogs
      </h2>
      <div>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-blue-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 hover:text-teal-600 transition-colors duration-200">
              {blog.title}
            </h3>
            <p className="text-gray-700 mt-2">{blog.description}</p>
            <a
              href={blog.link}
              className="inline-block mt-3 text-teal-600 hover:text-teal-800 font-semibold transition-colors duration-200"
            >
            
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareBlogs;
