import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'; // Import SignUpButton

export default function Navbar() {
    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <header style={{ backgroundColor: '#1a2238' }} className="bg-blue-600 p-3 fixed top-0 w-full z-50">
                <nav className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <div className="text-white text-xl font-semibold">HealthOne</div>
                    </div>
                    <ul className="flex space-x-6 text-white">
                        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link href="#about" className="hover:text-gray-300">About Us</Link></li>
                        <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
                        <li><Link href="#team" className="hover:text-gray-300">Team</Link></li>
                        <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
                    </ul>

                    {/* Clerk Authentication */}
                    <div className="flex items-center space-x-4">
                        <SignedOut>
                            {/* Show both Sign In and Sign Up buttons when the user is signed out */}
                            <SignInButton>
                                <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">Sign In</button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">Sign Up</button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            {/* Show the User Button when signed in */}
                            <UserButton 
                                appearance={{ elements: { 
                                    avatarBox: 'w-12 h-12' // Adjust width and height for larger avatar
                                }}} 
                            />
                        </SignedIn>
                    </div>
                </nav>
            </header>
            {/* Add margin to push content below the navbar */}
            <div className="pt-16"></div> {/* Adjust based on your navbar height */}
        </div>
    );
}
