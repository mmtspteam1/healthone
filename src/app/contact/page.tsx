"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface FormData {
    fullName: string;
    email: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/c32adfdcda.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Convert formData to a plain object
        const dataToSend: Record<string, unknown> = { ...formData };

        emailjs.send('service_wgadpco', 'template_ce8kqqb', dataToSend, 'zEvMMrIqeFb667R3x') // Use your actual User ID here
            .then((response: EmailJSResponseStatus) => {
                console.log('Email sent successfully!', response.status, response.text);
                setIsModalOpen(true);
                setIsError(false);
                setFormData({ fullName: '', email: '', message: '' });
            }, (err) => {
                console.error('Failed to send email:', err);
                setIsError(true);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white min-h-screen">
            <section className="relative pt-12 pb-12 z-30">
                <div className="max-w-4xl mx-auto px-5">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-800 font-bold text-5xl mb-5">Contact Us</h2>
                        <p className="text-gray-800">Have questions? Reach out below or email us</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-1/2">
                            <div className="mb-8 flex items-center">
                                <div className="h-16 w-16 bg-white text-center rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faHome} className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-teal-500 text-xl mb-1 font-bold">Address</h4>
                                    <p className="text-gray-800">Jnana Prabha, East Point Campus Virgo Nagar Post Avalahalli, Bengaluru, Karnataka 560049</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-center">
                                <div className="h-16 w-16 bg-white text-center rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-teal-500 text-xl mb-1 font-bold">Phone</h4>
                                    <p className="text-gray-800">+91 7996032595</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-center">
                                <div className="h-16 w-16 bg-white text-center rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-teal-500 text-xl mb-1 font-bold">Email</h4>
                                    <p className="text-gray-800">mmtspteam1@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 bg-gray-200 p-10 rounded-lg shadow-lg">
                            <h2 className="font-bold text-2xl mb-4 text-indigo-500">Send Message</h2>
                            <form onSubmit={handleSubmit} id="contact-form">
                                <div className="mb-4">
                                    <label className="block text-black font-bold mb-1" htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full border-2 border-green-500 bg-gray-100 text-black focus:outline-none focus:border-teal-500 py-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-800 mb-1 font-bold" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border-2 border-green-500 bg-gray-100 text-black focus:outline-none focus:border-teal-500 py-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-800 font-bold mb-1" htmlFor="message">Type your Message...</label>
                                    <textarea
                                        id="message"
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full border-2 border-gray-800 bg-gray-100 text-black focus:outline-none focus:border-teal-500 py-2"
                                        rows={4}
                                    ></textarea>
                                </div>

                                <input
                                    type="submit"
                                    value="Send"
                                    className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-white hover:text-teal-500 border border-green-500 transition duration-500 cursor-pointer"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-5 text-gray-800 rounded-lg shadow-lg">
                        <h2 className="text-lg text-black font-bold mb-2">Information Sent!</h2>
                        <p className="mb-4">Your message has been sent successfully.</p>
                        <button onClick={closeModal} className="mt-4 bg-teal-500 text-white py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isError && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-5 text-red-800 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-2">Error!</h2>
                        <p className="mb-4">There was an error sending your message. Please try again.</p>
                        <button onClick={() => setIsError(false)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;