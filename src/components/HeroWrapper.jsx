import Navbar from "./Navbar";
import Hero from "./HeroSection";
import "./HeroWrapper.css";

const  HeroWrapper = () => {
    return (
        <div className="hero-wrapper">
        <Navbar/>
        <Hero/>
        </div>
    );
};

export default HeroWrapper;