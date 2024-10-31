"use client"; // This tells Next.js to treat this as a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Doctor = {
    id: number;
    name: string;
    specialization: string;
    experience: number;
};

const SearchDoctorsPage = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            const response = await fetch('/doctor.json');
            const data: Doctor[] = await response.json();
            setDoctors(data);
            setFilteredDoctors(data); // Initialize filtered list
        };
        fetchDoctors();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        // Filter doctors based on search input
        const filtered = doctors.filter((doctor) =>
            doctor.name.toLowerCase().includes(value.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredDoctors(filtered);
    };

    return (
        <div className="p-8 bg-gray-300 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Search Doctors</h1>
            <input
                type="text"
                placeholder="Search by name or specialization"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-3 mb-6 border rounded-md text-black"
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredDoctors.map((doctor) => (
                    <Link href={`/dash/search-doctors/${doctor.id}`} key={doctor.id}>
                        <div className="bg-white text-black shadow-lg rounded-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-semibold text-teal-700 mb-2">{doctor.name}</h2>
                            <p className="text-gray-600">Specialization: {doctor.specialization}</p>
                            <p className="text-gray-500">Experience: {doctor.experience} years</p>
                            <p className="text-teal-600 mt-4">View Details</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchDoctorsPage;
