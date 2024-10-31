"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Medicine = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

export default function Home() {
  const [medicines, setMedicines] = useState<Medicine[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data/medicines.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch medicines data");
        }
        return response.json();
      })
      .then(data => setMedicines(data.medicines))
      .catch(error => {
        console.error("Error fetching data:", error);
        setMedicines([]); // Set as an empty array to avoid undefined error
      });
  }, []);

  // Filter medicines based on the search term
  const filteredMedicines = medicines?.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Medicine Store!</h1>

        {/* Search bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>

        <h2 className="text-xl font-semibold mb-4">Available Medicines:</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedicines && filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine) => (
              <div key={medicine.id} className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-32 object-cover rounded-t-lg" // Adjust the image class
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{medicine.name}</h2>
                  <p className="text-sm text-gray-600">{medicine.description}</p>
                  <p className="font-bold mt-2">{medicine.price}</p>
                  <Link href={`/dash/pharmacy/${medicine.id}`} className="mt-2 inline-block bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600">
                    Buy Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No medicines available.</p>
          )}
        </div>
      </main>
    </div>
  );
}
