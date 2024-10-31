import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
                        {/* Logo and App Name */}
                        <div className="flex items-center">
                            <Image src="/assets/logo.png" alt="HealthOne Logo" width={40} height={40} />
                            <h1 className="ml-2 text-xl font-bold">HealthOne</h1>
                        </div>
                        <Navbar /> {/* Navbar now includes authentication buttons */}
                    </header>
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
