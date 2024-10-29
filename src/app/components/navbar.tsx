"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'; // Import SignUpButton
import { useState } from 'react'; // Import useState for managing the mobile menu state

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

    // Toggle mobile menu function
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <header className="bg-blue-500 p-2 fixed top-0 w-full z-50">
                <nav className="container mx-auto flex justify-between items-center">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/assets/logo.png"
                            alt="HealthOne Logo"
                            className="rounded-3xl"
                            width={50}
                            height={50}
                        />
                        <div className="text-white text-2xl font-bold">HealthOne</div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex space-x-6 text-white">
                        <li><Link href="/" className="hover:text-gray-300 transition duration-200">Home</Link></li>
                        <li><Link href="#about" className="hover:text-gray-300 transition duration-200">About Us</Link></li>
                        <li><Link href="#features" className="hover:text-gray-300 transition duration-200">Features</Link></li>
                        <li><Link href="#team" className="hover:text-gray-300 transition duration-200">Team</Link></li>
                        <li><Link href="/dashboard" className="hover:text-gray-300 transition duration-200">Dashboard</Link></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300 text-2xl">
                            ☰ {/* Hamburger icon */}
                        </button>
                    </div>

                    {/* Clerk Authentication */}
                    <div className="hidden md:flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton>
                                <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-200">Sign In</button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition duration-200">Sign Up</button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton 
                                appearance={{ elements: { 
                                    avatarBox: 'w-12 h-12' // Adjust width and height for larger avatar
                                }}} 
                            />
                        </SignedIn>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-600 space-y-2 p-4">
                    <Link href="/" className="block text-white hover:text-gray-300">Home</Link>
                    <Link href="#about" className="block text-white hover:text-gray-300">About Us</Link>
                    <Link href="#features" className="block text-white hover:text-gray-300">Features</Link>
                    <Link href="#team" className="block text-white hover:text-gray-300">Team</Link>
                    <Link href="/dashboard" className="block text-white hover:text-gray-300">Dashboard</Link>
                    <div className="space-y-4">
                        <SignInButton>
                            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-transform transform duration-200">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton>
                            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-transform transform duration-200">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </div>
                </div>
            )}

            {/* Add margin to push content below the navbar */}
            <div className="pt-16"></div> {/* Adjust based on your navbar height */}
        </div>
    );
}
