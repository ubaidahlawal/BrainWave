import "./Hero.css";
import HeroImg from "../assets/HeroImg.png";
function Hero() {
   return (
    <>
    <section className="hero-section" py-4>
    <div className="container">
    <div className="row aligh-item-center">
    <div className="col-md-6">
    <p className="text-danger">Let’s shift your business</p>    
    <h1 className="display-4 fw-bold">
    Shift your business fast with Shade Pro.
    </h1>
    <p className="lead w-75">
    With lots of unique blocks, you can easily build a page without coding. 
    Build your next consultancy website within few minutes.</p>
    <button className="btn custom-btn mt-3">Get started a project</button>
    </div>
    <div className="col-md-6 text-center">
    <img src={HeroImg} alt="Hero" className="img-fluid hero-img"/>
    </div>
    </div>
    </div>
    </section>
    </>
   );
}

export default Hero;