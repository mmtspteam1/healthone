import React from 'react';

const HealthcareNews = () => {
    const newsArticles = [
        {
            title: "New Healthcare Facility Opening Soon",
            date: "October 15, 2024",
            content: "A new state-of-the-art healthcare facility is set to open next month, providing advanced services to the community."
        },
        {
            title: "Flu Season Tips from Our Experts",
            date: "October 10, 2024",
            content: "Our healthcare professionals offer essential tips for staying healthy this flu season. Read more to learn how to protect yourself."
        },
        {
            title: "Health Fair Scheduled for November",
            date: "October 5, 2024",
            content: "Join us for our annual health fair featuring free screenings, wellness workshops, and more!"
        },
        {
            title: "New Vaccination Drive Launched",
            date: "October 20, 2024",
            content: "We are launching a new vaccination drive to increase immunization rates in our community. Free vaccines will be available every Saturday at our clinic."
        },
        {
            title: "Partnership with Local Fitness Center",
            date: "October 25, 2024",
            content: "We have partnered with a local fitness center to offer discounted memberships for our patients. Stay active and healthy with our special rates."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">Healthcare Center News</h1>
            <div className="space-y-4">
                {newsArticles.map((article, index) => (
                    <div 
                        key={index} 
                        className="border border-gray-300 rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg"
                    >
                        <h2 className="text-xl font-semibold text-teal-600 mb-2">{article.title}</h2>
                        <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                        <p className="text-gray-700 leading-relaxed">{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthcareNews;
