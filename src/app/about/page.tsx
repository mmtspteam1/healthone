import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-white sm:flex items-center">
            <div >
                <div className="image object-center text-center">
                    <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        <span className="text-indigo-600">About Our Company</span>
                    </h2>
                    <h4 className="text-gray-700">
                        At Health one, we are dedicated to transforming the way individuals access and manage their health. Our mission is to empower you with the tools and resources you need to take charge of your well-being. With a team of experienced healthcare professionals, we offer a range of services designed to make healthcare more accessible and personalized. From telemedicine consultations to secure health record management, we prioritize your comfort and convenience every step of the way. We believe that informed individuals are healthier individuals, and we are here to support you on your journey to better health.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;