"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Define an interface for the API response
interface ApiResponsePatient {
  _id: string; // MongoDB ObjectId as a string
  Name: string; // Match the case with your database key
  Age: string; // Keep as string to match your data format
  Gender: string; // Match the case with your database key
  'Medical Condition ': string; // Adjusted field name to match the API response
  url?: string; // Optional field for patient image URL
}

interface Patient {
  _id: string;
  Name: string;
  Age: string;
  Gender: string;
  MedicalCondition: string;
  ImageURL?: string;
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'My routine', href: '/dash/my-routine', current: false },
  { name: 'My doctor', href: '/dash/my-doctor', current: false },
  { name: 'Search doctors', href: '/dash/search-doctors', current: false },
  { name: 'Pharmacy', href: '/dash/pharmacy', current: false },
];

const Dashboard: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/patients');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponsePatient[] = await response.json();
        console.log('Fetched patients:', data);

        // Map data to correct structure
        const formattedData = data.map((patient) => ({
          _id: patient._id,
          Name: patient.Name,
          Age: patient.Age,
          Gender: patient.Gender,
          MedicalCondition: patient['Medical Condition '].trim(), // Remove any trailing spaces
          ImageURL: patient.url || 'https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg',
        }));

        setPatients(formattedData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="min-h-full">
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    item.current ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Patients List</h2>
            <div className="bg-white shadow rounded-lg">
              <ul className="divide-y divide-gray-200">
                {patients.map((patient) => (
                  <li key={patient._id} className="flex items-center p-4 hover:bg-gray-100">
                    <Image
                      src={patient.ImageURL || "https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg"}
                      alt={patient.Name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{patient.Name}</h3>
                      <p className="text-gray-600">Age: {patient.Age}</p>
                      <p className="text-gray-600">Gender: {patient.Gender}</p>
                      <p className="text-gray-600">Condition: {patient.MedicalCondition}</p>
                    </div>
                    <Link href={`/patients/${patient._id}`} legacyBehavior>
                      <span className="text-blue-600 hover:underline cursor-pointer">View Details</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
