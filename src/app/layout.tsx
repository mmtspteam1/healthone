import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <header>
                        <Navbar /> {/* Navbar now includes authentication buttons */}
                    </header>
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
