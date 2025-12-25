import Services from "./components/ServiceSection"
import "bootstrap-icons/font/bootstrap-icons.css";
import HeroWrapper from "./components/HeroWrapper";
import TestimonialSection from "./components/TestimonialSection";
import OurStory from "./components/OurStory";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Review from "./components/Review"
import Footer from "./components/Footer";

function App() {
  return (
    <> 
    <HeroWrapper/>
    <Services/>
    <TestimonialSection/>
    <OurStory/>
    <WhyChooseUs/>
    <CaseStudies/>
    <Review/>
    <Footer/>
    </>
  );
}

export default App;

       
