"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Modal from 'react-modal';

type Medicine = {
  id: number;
  name: string;
  generic_name: string;
  formula: string;
  description: string;
  image: string;
  price: string; // Keep it as a string for JSON parsing
  dosage_forms: string[];
  side_effects: string[];
  contraindications: string[];
  usage_instructions: string;
};

interface MedicineDetailProps {
  params: {
    id: string; // Get ID as a string
  };
}

const MedicineDetail = ({ params }: MedicineDetailProps) => {
  const { id } = params; // Get the ID from the URL params
  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [orderSuccess, setOrderSuccess] = useState(false); // State for order success message

  useEffect(() => {
    if (id) {
      fetch('/data/medicines.json') // Ensure this path is correct
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch medicine data');
          }
          return response.json();
        })
        .then((data) => {
          const selectedMedicine = data.medicines.find(
            (med: Medicine) => med.id === parseInt(id)
          );
          if (!selectedMedicine) {
            notFound(); // Handle case where medicine is not found
          }
          setMedicine(selectedMedicine || null);
        })
        .catch((error) => {
          console.error('Error fetching medicine data:', error);
          setMedicine(null);
        });
    }
  }, [id]);

  if (!medicine) {
    return <p>Loading...</p>; // Show loading while fetching data
  }

  // Keep the original price string for display
  const priceString = medicine.price;
  // Parse price as a float for calculations
  const price = parseFloat(priceString);
  // Calculate total price
  const totalPrice = (price * quantity).toFixed(2); // Return total price as string with two decimals

  const handlePayment = (method: string) => {
    console.log(`Paying ${totalPrice} with ${method}`);
    setOrderSuccess(true); // Set order success state to true
    setModalOpen(false); // Close modal after payment
  };

  return (
    <div className="container mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white">
      {orderSuccess && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          Order successfully completed!
        </div>
      )}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img src={medicine.image} alt={medicine.name} className="w-full h-full object-contain rounded-lg shadow-md mb-4" />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{medicine.name}</h1>
          <p className="text-gray-600 mb-4">{medicine.description}</p>
          <h2 className="text-2xl font-semibold text-gray-700">Price: <span className="text-blue-600">{priceString}</span></h2>
          <h3 className="text-lg font-semibold text-gray-700 mt-4">Generic Name: {medicine.generic_name}</h3>
          <h3 className="text-lg font-semibold text-gray-700 mt-2">Chemical Formula: {medicine.formula}</h3>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">Dosage Forms</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2 mb-4">
            {medicine.dosage_forms.map((form, index) => (
              <li key={index}>{form}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">Usage Instructions</h3>
          <p className="text-gray-600 mb-4">{medicine.usage_instructions}</p>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">Side Effects</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
            {medicine.side_effects.map((effect, index) => (
              <li key={index} className="hover:text-red-600 transition duration-300">{effect}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">Contraindications</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
            {medicine.contraindications.map((contra, index) => (
              <li key={index} className="hover:text-red-600 transition duration-300">{contra}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <button 
          onClick={() => setModalOpen(true)} 
          className="mt-8 inline-block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition duration-300 shadow-md">
          Buy Now
        </button>
      </div>

      {/* Modal for Buying Medicine */}
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => setModalOpen(false)} 
        ariaHideApp={false}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Buy {medicine.name}</h2>
        <div className="flex justify-center mb-4">
          <img src={medicine.image} alt={medicine.name} className="w-48 h-48 object-contain" />
        </div>
        <h3 className="text-lg mb-2 text-center text-black">Price: <span className="text-blue-600">{priceString}</span></h3>
        <div className="flex items-center justify-center mb-4">
          <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="border px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-900">-</button>
          <span className="mx-4 text-black">{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)} className="border px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-900">+</button>
        </div>
        <div className="flex flex-col space-y-2">
          <button onClick={() => handlePayment('PhonePay')} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
            Pay with PhonePay
          </button>
          <button onClick={() => handlePayment('Card')} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
            Pay with Card
          </button>
          <button onClick={() => handlePayment('Meta')} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
            Pay with Meta
          </button>
        </div>
        <button onClick={() => setModalOpen(false)} className="mt-4 text-red-500 underline text-center">Close</button>
      </Modal>
    </div>
  );
};

export default MedicineDetail;
