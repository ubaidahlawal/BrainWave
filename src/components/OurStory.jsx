import React from "react";
import "./OurStory.css";
import BigImage from "../assets/BigImage.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Fill1 from "../assets/Fill1.png";
const OurStory = () => {
    return (
        <>
       <section className="container our-story py-5">
        <div className="row mb-5">
        <div className="col-lg-6">
        <small className="text-danger fw-semibold sm-story">OUR STORY</small>
        <h2 className="fw-bold mt-4">
        We know how everything works and why your business is failing over and over again.
        </h2>
        </div>
        </div>
        <div className="row align-items-center mb-5">
        <div className="col-lg-4 mb-4 mb-lg-0 mt-lg-5 g-5">
        <img src={BigImage} alt="big-img" className="img-fluid rounded-4 mt-lg-5 w-100" />
        </div>
        <div className="col-lg-7 d-lg-flex d-none">
        <div className="row mb-3 justify-content-between">
        <div className="mb-3 col-12 col-md-4 col-lg-7 d-none d-md-block">
        <img src={Image2} alt="image2" className="img-fluid rounded-4 second-img w-75" />
        <div>
        <img src={Fill1} alt="top-image" className="position-absolute top-image img-fluid" />   
        </div>
        </div>
        <div className="mb-3 col-12 col-lg-5 d-none d-lg-block">
        <img src={Image3} alt="Image3" className="img-fluid rounded-4 mt-5 pt-5 third-img w-75"/>
        </div>
        
        <p className="text-muted col-12 mt-4 p-story">
        We share common trends and strategies for improving your rental income and making sure you stay in high demand.
        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        </div>
        </div>
        </div>
        <div className="row text-center mt-5 pt-5 justify-content-between">
        <div className=" mb-3 col-12 col-sm-4">
        <h3 className="fw-bold stats-h3">1M+</h3>
        <p className="text-muted stats-p">
        Customers visit Omega every month to get their service done.
        </p>
        </div>
        <div className="mb-3 col-12 col-sm-4 mt-5 mt-sm-0">
        <h3 className="fw-bold stats-h3">92%</h3>
        <p className="text-muted stats-p">
        Satisfaction rate comes from our awesome customers.
        </p>
        </div>
        <div className="mb-3 col-12 col-sm-4 mt-5 mt-sm-0">
        <h3 className="fw-bold stats-h3">4.9/5.0</h3>
        <p className="text-muted stats-p">
        Average customer ratings we have got all over internet.
        </p>
        </div>
        </div>
       </section>
       </>
  );
}

export default OurStory;