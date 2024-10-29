import Link from "next/link";

const DoctorPage = () => {
  const patients = [
    { id: 1, name: "John Doe", age: 30, disease: "Flu", imgUrl: "https://via.placeholder.com/100" },
    { id: 2, name: "Jane Smith", age: 25, disease: "Headache", imgUrl: "https://via.placeholder.com/100" },
    { id: 3, name: "Alice Johnson", age: 40, disease: "Diabetes", imgUrl: "https://via.placeholder.com/100" },
    { id: 4, name: "Bob Brown", age: 35, disease: "Cold", imgUrl: "https://via.placeholder.com/100" },
    { id: 5, name: "Charlie Black", age: 50, disease: "Allergy", imgUrl: "https://via.placeholder.com/100" },
    { id: 6, name: "David White", age: 29, disease: "Fever", imgUrl: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="flex">
      {/* Left Section - Doctor Info */}
      <div className="w-1/2 p-4">
        <img
          src="https://via.placeholder.com/150" // Replace with the doctor's image URL
          alt="Doctor"
          className="w-full h-auto rounded"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Dr. John Smith</h2>
          <p>Age: 45</p>
          <p>Specialization: Cardiology</p>
          <p>Certificates: Board Certified in Cardiology</p>
          <p>Patients Treated: 300+</p>
        </div>
      </div>

      {/* Right Section - Patients Info */}
      <div className="w-1/2 p-4 grid grid-cols-2 gap-4">
        {patients.map((patient) => (
          <Link
            key={patient.id}
            href={`/patients/${patient.id}`} // Adjust based on your routing structure
            className="border rounded-lg p-4 cursor-pointer hover:bg-gray-200 flex flex-col items-center"
          >
            <img
              src={patient.imgUrl} // Patient image URL
              alt={patient.name}
              className="w-full h-24 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Disease: {patient.disease}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
