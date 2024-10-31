import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

export const metadata = {
    title: 'HealthOne',  // Set the title here
    icons: {
        icon: '/assets/logo.png', // Add your favicon path here, e.g., /favicon.ico
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <header>
                        <Navbar />
                    </header>
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
