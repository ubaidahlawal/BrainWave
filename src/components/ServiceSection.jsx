import "./Services.css";
import ServiceCard from "./ServicesCard";
import imageUnder from "../assets/Group 101.png";

const Services = () => {
    return (
       <>
       <section className="services-section">
       <div className="container text-center">
        <h4 className="section-intro lead text-danger justify-content-center mt-3 w-75 pt-4 mx-auto">Our services</h4>
        <h2 className="section-heading mx-auto text-center w-75 ">
        We provide great services for our customers based on needs
        </h2>
        
        <div className="wrap g-5 justify-content-center">
        <div className="service-wrapper px-3 service-box1 text-align-center text-white rounded-4">
         <ServiceCard 
         image="/design.png"
         title="Graphic Design"
         description="With lots of unique blocks, you can easily build a page without coding.
         Build your next landing page."
         />
        </div>

       <div className="service-wrapper  service-box2 text-white text-align-center rounded-4">
       <ServiceCard
       image="/web.png"
       title="Web Development"
       description="With lots of unique blocks, you can easily build a page without coding.
       Build your next landing page."
       />
       </div>

       <div className="service-wrapper service-box3 text-white text-align-center rounded-4">
       <ServiceCard
       image="/content.png"
       title="Content Writing"
       description="With lots of unique blocks, you can easily build a page without coding.
       Build your next landing page."
       isRed={true}
       imageUnder={imageUnder}
       />
       </div>
       
        </div>
       </div>
       </section>
       </> 
    );
}

export default Services;