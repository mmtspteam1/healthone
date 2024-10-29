
import React from "react";
import { SignUpButton } from '@clerk/nextjs'; // Import SignUpButton
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <section
            id="home"
            className="flex-1 bg-cover bg-center"
            style={{
                backgroundImage: 'url("https://images.hdqwalls.com/download/shooting-stars-in-purple-sky-k8-1920x1080.jpg")',
            }}
        >
            <div className="bg-black bg-opacity-50 text-white text-center py-24">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
                <p className="text-xl mb-8">The best solution for all your health needs.</p>
                <div>
                    <SignUpButton>
                        {/* Button for signing up */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mr-4">
                            Get Started
                        </button>
                    </SignUpButton>

                    {/* Contact Us button */}
                    <Link href="/contact">
    <button className="bg-white hover:bg-gray-300 text-black py-3 px-6 rounded-lg">
        Contact Us
    </button>
</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
