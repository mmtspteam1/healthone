// app/dash/my-routine/page.tsx

const MyRoutinePage = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">My Medication Routine</h1>
            
            <div className="space-y-8">
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-indigo-500">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🌅 Morning Routine (8:00 AM)</h2>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li><strong>Metformin</strong> (500 mg) - Helps control blood sugar levels</li>
                        <li><strong>Lisinopril</strong> (10 mg) - Manages blood pressure</li>
                        <li><strong>Vitamin D Supplement</strong> (1000 IU) - Supports bone health and immune function</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">🌞 Afternoon Routine (12:00 PM)</h2>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li><strong>Aspirin</strong> (81 mg) - Heart health maintenance</li>
                        <li><strong>Probiotic</strong> - Supports digestive health</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500">
                    <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🌆 Evening Routine (8:00 PM)</h2>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li><strong>Atorvastatin</strong> (20 mg) - Lowers cholesterol</li>
                        <li><strong>Calcium Supplement</strong> (500 mg) - Promotes bone health</li>
                    </ul>
                </div>

                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-purple-500">
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">🌙 Night Routine (10:00 PM)</h2>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li><strong>Melatonin</strong> (5 mg) - Aids in sleep</li>
                        <li><strong>Omega-3</strong> - Supports heart and brain health</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyRoutinePage;
