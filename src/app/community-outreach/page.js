// components/CommunityOutreach.js
const CommunityOutreach = () => {
    const outreachPrograms = [
        {
            title: "Health Screening Events",
            date: "Every Saturday",
            time: "9:00 AM - 1:00 PM",
            location: "Community Health Center, Room 101",
            description: "Free health screenings for blood pressure, cholesterol, and diabetes. Our skilled healthcare providers will guide you through understanding your health metrics and offer resources for any necessary follow-up care.",
            contact: "healthscreening@community.org"
        },
        {
            title: "Nutrition Workshops",
            date: "Monthly on the first Thursday",
            time: "6:00 PM - 8:00 PM",
            location: "Wellness Center, Auditorium",
            description: "Join our expert nutritionists as they cover topics like meal planning, understanding food labels, and achieving balanced diets. Whether you're looking to improve your diet or learn new healthy recipes, these workshops are perfect for you.",
            contact: "nutrition@community.org"
        },
        {
            title: "Mental Health Awareness Campaign",
            date: "October 20, 2024",
            time: "10:00 AM - 4:00 PM",
            location: "City Hall Plaza",
            description: "An all-day event dedicated to promoting mental health. Engage in workshops, seminars, and open discussions with mental health professionals. Learn about resources and practices to manage stress, anxiety, and emotional well-being.",
            contact: "mentalhealth@community.org"
        }
    ];

    return (
        <div className="max-w-3xl mx-auto p-8 font-sans bg-blue-100">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
                Community Outreach Programs
            </h1>
            <div className="space-y-6">
                {outreachPrograms.map((program, index) => (
                    <div 
                        key={index}
                        className="border border-gray-300 rounded-lg p-6 bg-blue-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-teal-700 mb-2">
                            {program.title}
                        </h2>
                        <p className="text-gray-500 text-sm mb-2 italic">
                            <span>{program.date}</span> | <span>{program.time}</span> | <span>{program.location}</span>
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {program.description}
                        </p>
                        <div className="text-gray-600 text-sm">
                            <span className="font-semibold">Contact:</span> {program.contact}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityOutreach;
