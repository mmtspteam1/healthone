import React from "react";
import { SignUpButton } from '@clerk/nextjs'; // Import SignUpButton

const Banner: React.FC = () => {
    return (
        <section
            id="home"
            className="flex-1 bg-cover bg-center"
            style={{
                backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ieNNUVG_hQuG--cITtxGOwHaEo%26pid%3DApi&f=1&ipt=ad0c399af62f7a43668cf225c59bb14c439437344e95f7f352be84099a341d33&ipo=images")',
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
                    <a
                        href="#contact"
                        className="bg-white hover:bg-gray-300 text-black py-3 px-6 rounded-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
