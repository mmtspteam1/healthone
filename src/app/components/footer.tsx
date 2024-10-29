import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

// Define your icons data
const ICONS = [
    { name: "logo-facebook", link: "https://www.facebook.com" },
    { name: "logo-twitter", link: "https://www.twitter.com" },
    { name: "logo-instagram", link: "https://www.instagram.com" },
];

// Menu links data
const PRODUCTS = [
    { name: "UI/UX", link: "#" },
    { name: "Web & mobile development", link: "#" },
    { name: "Digital marketing", link: "#" },
];

const RESOURCES = [
    { name: "Industries and innovation trends", link: "#" },
    { name: "Use cases", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Online submit", link: "#" },
    { name: "Event & activities", link: "#" },
];

const COMPANY = [
    { name: "Diversity & inclusion", link: "#" },
    { name: "About us", link: "#" },
    { name: "News", link: "#" },
    { name: "Customer Stories", link: "#" },
    { name: "Online communities", link: "#" },
];

const SUPPORT = [
    { name: "Documentation", link: "#" },
    { name: "Tutorial & guides", link: "#" },
    { name: "Webinar", link: "#" },
    { name: "Open-source", link: "#" },
];

// Item component to display links
const Item = ({ Links, title }) => {
    return (
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link) => (
                <li key={link.name}>
                    <a
                        className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                        href={link.link}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

// SocialIcons component to display social media icons
const SocialIcons = ({ Icons }) => {
    return (
        <div className="text-teal-500">
            {Icons.map((icon) => {
                let IconComponent;

                switch (icon.name) {
                    case "logo-facebook":
                        IconComponent = IoLogoFacebook;
                        break;
                    case "logo-twitter":
                        IconComponent = IoLogoTwitter;
                        break;
                    case "logo-instagram":
                        IconComponent = IoLogoInstagram;
                        break;
                    default:
                        IconComponent = null;
                }

                return IconComponent ? (
                    <Link href={icon.link} key={icon.name} aria-label={`Link to ${icon.name}`}>
                        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
                            <IconComponent />
                        </span>
                    </Link>
                ) : null;
            })}
        </div>
    );
};

// Footer component that brings everything together
const Footer = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-teal-400">Get</span> free business growth tips
                </h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-medium rounded-md text-white md:w-auto w-full">
                        Request Code
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
                <Item Links={PRODUCTS} title="PRODUCTS" />
                <Item Links={RESOURCES} title="RESOURCES" />
                <Item Links={COMPANY} title="COMPANY" />
                <Item Links={SUPPORT} title="SUPPORT" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>© 2024 Ultimatetopup. All rights reserved.</span>
                <span>Terms . Privacy Policy</span>
                <SocialIcons Icons={ICONS} />
            </div>
        </div>
    );
};

export default Footer;
