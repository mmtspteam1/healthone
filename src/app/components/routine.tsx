// pages/routine.tsx
"use client";
import React from 'react';

const RoutinePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Daily Health Routine</h1>

            {/* Medication Reminders Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Medication Reminders</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">
                        <span className="font-medium">Morning:</span> Take Vitamin C and Blood Pressure Medication
                    </li>
                    <li className="mb-2">
                        <span className="font-medium">Afternoon:</span> Take Antihistamines
                    </li>
                    <li className="mb-2">
                        <span className="font-medium">Evening:</span> Take Sleep Aid
                    </li>
                </ul>
            </div>

            {/* Medical Checkups Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Medical Checkups</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Annual Physical: <span className="font-medium">November 15, 2024</span></li>
                    <li className="mb-2">Dental Checkup: <span className="font-medium">December 1, 2024</span></li>
                    <li className="mb-2">Eye Exam: <span className="font-medium">December 10, 2024</span></li>
                </ul>
            </div>

            {/* Health Tips Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Daily Health Tips</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Stay hydrated: Drink at least 8 cups of water a day.</li>
                    <li className="mb-2">Get at least 30 minutes of exercise daily.</li>
                    <li className="mb-2">Aim for 7-9 hours of sleep each night.</li>
                    <li className="mb-2">Practice mindfulness or meditation for stress relief.</li>
                </ul>
            </div>
        </div>
    );
};

export default RoutinePage;
