'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AIChat from '@/app/components/AICHAT';
import Image from 'next/image';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  contact: {
    phone: string;
    email: string;
  };
  hospital: string;
  experience: number;
  location: string;
  image: string;
}

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [isVideoCallModalOpen, setVideoCallModalOpen] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [isCallEnded, setCallEnded] = useState(false);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      const response = await fetch('/doctor.json');
      const data: Doctor[] = await response.json();
      const selectedDoctor = data.find((doc) => doc.id.toString() === id);
      setDoctor(selectedDoctor || null);
    };

    fetchDoctorDetails();
  }, [id]);

  if (!doctor) return <p className="text-center mt-8 text-gray-400">Loading...</p>;

  const handleAppointmentConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppointmentSuccess(true);
    setAppointmentModalOpen(false);
  };

  const handleEndCall = () => {
    setVideoCallModalOpen(false);
    setCallEnded(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://meeting-link.example.com"); // Replace with actual link
    alert("Meeting link copied to clipboard!");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500 p-6 relative">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-56 flex justify-center items-center bg-gray-200">
          <Image
            className="w-auto h-full object-contain"
            src={doctor.image}
            alt={`${doctor.name}'s photo`}
          />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{doctor.specialization}</p>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Hospital</h2>
            <p className="text-gray-600">{doctor.hospital}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Experience</h2>
            <p className="text-gray-600">{doctor.experience} years</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Location</h2>
            <p className="text-gray-600">{doctor.location}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Contact</h2>
            <p className="text-gray-600">{doctor.contact.phone}</p>
            <p className="text-gray-600">{doctor.contact.email}</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setAppointmentModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book Appointment
            </button>
            <button
              onClick={() => setVideoCallModalOpen(true)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Start Video Call
            </button>
          </div>

          {/* Book Appointment Modal */}
          {isAppointmentModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-lg text-black">
                <h2 className="text-lg font-bold mb-4">Book Appointment</h2>
                <form onSubmit={handleAppointmentConfirm}>
                  <label className="block mb-2">
                    Date:
                    <input type="date" className="w-full border rounded p-2" required />
                  </label>
                  <label className="block mb-2">
                    Time:
                    <input type="time" className="w-full border rounded p-2" required />
                  </label>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                  >
                    Confirm Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => setAppointmentModalOpen(false)}
                    className="text-red-500 ml-4"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Success Modal for Appointment Confirmation */}
          {appointmentSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-lg text-black">
                <h2 className="text-lg font-bold mb-4">Appointment Scheduled</h2>
                <p className="text-green-600">Your appointment has been scheduled successfully!</p>
                <button
                  onClick={() => setAppointmentSuccess(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Video Call Modal */}
          {isVideoCallModalOpen && (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl flex flex-col items-center">
                <h2 className="text-lg font-bold mb-4">Video Call with {doctor.name}</h2>
                <div className="flex w-full">
                  {/* User's Video */}
                  <div className="flex-1 h-64 bg-gray-200 flex items-center justify-center border rounded mr-2">
                    <video className="w-full h-full object-cover" autoPlay muted></video>
                  </div>
                  {/* Waiting Screen for Other User */}
                  <div className="flex-1 h-64 bg-gray-300 flex items-center justify-center border rounded">
                    <p className="text-gray-700">Waiting for the other user...</p>
                    <div className="mt-2">
                      <button onClick={handleCopyLink} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                        Copy Meeting Link
                      </button>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex space-x-4 mt-4">
                  <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">🎤</button>
                  <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">📹</button>
                  <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">💬</button>
                </div>

                {/* End Call Button */}
                <button
                  onClick={handleEndCall}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
                >
                  End Call
                </button>
              </div>
            </div>
          )}

          {/* Call Completion Modal */}
          {isCallEnded && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-lg text-black">
                <h2 className="text-lg font-bold mb-4">Meeting Completed</h2>
                <p className="text-green-600">Here is your prescription:</p>
                <p className="mt-2">1. Paracetamol - 1 tablet daily</p>
                <p>2. Aspirin - 2 tablets every 6 hours</p>
                <Link href="/dash/pharmacy">
  <button
    onClick={() => setCallEnded(false)}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
  >
    BUY NOW
  </button>
</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>

      <AIChat/>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
