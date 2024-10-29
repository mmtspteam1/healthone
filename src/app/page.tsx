import Banner from "./components/banner";
import Team from "./team/page"
import Features from "./features/page";
import AboutUs from "./about/page";
import Accordion from "./faq";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
        <Banner/>
        <Features/>
        <Team/>
        <AboutUs/>
        <Accordion/>
        </div>
    );
}