import React from 'react';

const OurMission = () => {
    return (
        <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <h2 className="font-bold text-3xl text-purple-600 text-center mb-4">Our Mission</h2>
            <p className="mb-4 text-lg leading-relaxed">
                At <span className="font-semibold">Your Healthone</span>, our mission is to provide compassionate,
                high-quality healthcare to all individuals in our community. We are committed to
                improving the health and well-being of our patients through personalized care,
                education, and advocacy.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
                We believe in the importance of community involvement and strive to create an
                environment where patients feel empowered and informed about their health
                choices. Our dedicated team of healthcare professionals works collaboratively to
                ensure that every patient receives the best possible care tailored to their
                unique needs.
            </p>
            <h3 className="font-semibold text-2xl text-purple-500 mt-6 mb-2">Core Values</h3>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Compassion: We treat everyone with kindness and respect.</li>
                <li className="mb-2">Integrity: We uphold the highest ethical standards in our work.</li>
                <li className="mb-2">Innovation: We embrace new ideas and technologies to improve patient care.</li>
                <li className="mb-2">Collaboration: We believe in teamwork to achieve the best outcomes for our patients.</li>
            </ul>
            <h3 className="font-semibold text-2xl text-purple-500 mt-6 mb-2">Community Engagement</h3>
            <p className="mb-4 text-lg leading-relaxed">
                Our commitment extends beyond our facility. We actively participate in community health fairs, offer free screenings,
                and provide educational workshops to promote healthy living and disease prevention.
            </p>
            <p className="text-lg leading-relaxed">
                We are dedicated to fostering a culture of wellness and prevention, encouraging our community members to take charge of
                their health and seek the resources they need for a healthy lifestyle.
            </p>
        </div>
    );
};

export default OurMission;
