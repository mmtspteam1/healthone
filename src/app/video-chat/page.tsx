"use client";

import Link from 'next/link';
import Image from 'next/image';
export default function VideoChat() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">Video Chat with the Doctor</h1>
      <div className="flex space-x-8 mb-4">
        <Link href="/chatbot">
          <div className="flex flex-row items-center">
            <Image
              src="/asset/ai.png" // Ensure the image path is correct
              alt="AI"
              className="w-10 h-10 mb-2"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2">
              Chat with the AI
            </button>
          </div>
        </Link>
      </div>
      {/* Here you can integrate your video chat SDK or any library you are using */}
      <div className="mt-4">
        <p className="text-lg">Video chat functionality will be integrated here.</p>
      </div>
    </div>
  );
}
