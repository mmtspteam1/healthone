import Banner from "./components/banner";
import Team from "./team/page"
import Features from "./features/page";
import AboutUs from "./about/page";
import ContactUs from "./contact/page"
import AIChat from "./components/AICHAT";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
        <Banner/>
        <Features/>
        <Team/>
        <AboutUs/> 
        <ContactUs/>
        <AIChat/>
        </div>
    );
}