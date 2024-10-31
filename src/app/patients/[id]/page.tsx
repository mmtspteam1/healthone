"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PatientDetailPage = ({ params }) => {
    const { id } = params; // Get the patient ID from the URL
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch(`/api/patients/${id}`);
                if (!response.ok) throw new Error('Failed to fetch patient data');
                const data = await response.json();
                setPatient(data); // Store the fetched data in state
            } catch (err) {
                setError(err.message); // Handle errors
            }
        };

        fetchPatient();
    }, [id]); // Fetch when the component mounts or the ID changes

    // Render loading state or error message
    if (error) return <div className="text-red-600 text-center">Error: {error}</div>;
    if (!patient) return <div className="text-gray-500 text-center">Loading...</div>;

    // Render the patient details
    return (
        <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">{patient.Name}</h1>
                <Image
                    src={patient.url} 
                    alt={patient.Name} 
                    className="w-32 h-32 rounded-full mb-4 border-2 border-gray-300 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl mx-auto" 
                />
                <p className="text-lg text-gray-800"><strong>Age:</strong> {patient.Age}</p>
                <p className="text-lg text-gray-800"><strong>Gender:</strong> {patient.Gender}</p>
                <p className="text-lg text-gray-800"><strong>Medical Condition:</strong> {patient['Medical Condition ']}</p>
                <p className="text-lg text-gray-800"><strong>Last Checkup:</strong> {new Date(patient['Last checkup date']).toLocaleDateString()}</p>
                <p className="text-lg text-gray-800"><strong>Notes:</strong> {patient.Notes}</p>

                <h2 className="text-2xl font-semibold mt-6 text-gray-800">Medication History</h2>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-gray-800">{patient['Medication History']}</pre>

                <h2 className="text-2xl font-semibold mt-6 text-gray-800">Current Medications</h2>
                <p className="text-lg text-gray-800">{patient.Medications}</p>
            </div>
        </div>
    );
};

export default PatientDetailPage;
