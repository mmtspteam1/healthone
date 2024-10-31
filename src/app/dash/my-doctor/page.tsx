import Image from "next/image";
// app/dash/my-doctor/page.tsx

const MyDoctorPage = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-400 to-teal-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-teal-800 mb-10">My Doctor</h1>
            
            <div className="max-w-md mx-auto bg-gray-200 shadow-lg rounded-lg p-6 border-l-4 border-solid">
                <div className="flex items-center space-x-4 mb-6">
                    <Image 
                        src="/assets/sara.jpeg" 
                        alt="Doctor's Avatar" 
                        className="w-20 h-20 rounded-full shadow-lg"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700">Dr. Sarah Thompson</h2>
                        <p className="text-gray-600">Cardiologist</p>
                    </div>
                </div>

                <div className="space-y-4 text-gray-700">
                    <div>
                        <h3 className="font-semibold text-teal-600">📍 Location</h3>
                        <p>City Hospital, New York</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-teal-600">📞 Contact</h3>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: sarah.thompson@hospital.com</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-teal-600">🗓 Consultation Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-teal-600">💬 Specialization</h3>
                        <p>Dr. Thompson specializes in preventive cardiology, hypertension management, and heart disease treatments.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-teal-600">📝 Notes</h3>
                        <p>Regular follow-up required every 6 months. Emphasis on lifestyle changes and diet management.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDoctorPage;
