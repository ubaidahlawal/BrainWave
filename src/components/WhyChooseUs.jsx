import React from "react";
import "./WhyChooseUs.css";
import PurpleIcon from "../assets/PurpleIcon.png";
import RedIcon from "../assets/RedIcon.png";
import GreenIcon from "../assets/GreenIcon.png";
import BlackIcon from "../assets/BlackIcon.png";
import LeftImg from "../assets/LeftImg.png"

const WhyChooseUs = () => {
    return (
      <>
      <section className="why-choose position-relative py-5">
      <img src={LeftImg} alt="left-img" className="mt-4 position-absolute d-none d-lg-block left-img" />
      <div className="container">
      <div className="text-center mb-5">
      <small className="text-danger mx-auto w-75 pt-5 mt-5 text-uppercase head">Why choose us</small>
      <h2 className="fw-bold mt-2 reason pt-2 w-75 mx-auto">People choose us because we <br /> serve the best for everyone</h2>
      </div>
      <div className="mb-5 row w-75 justify-content-center mx-auto mt-5 g-5">
      <div className="col-12 col-md-12 col-lg-5">
      <div className="row">
      <div className="col-3">
      <img src={PurpleIcon} alt="wcu-icon" className="img-fluid w-100" />
      </div>
      <div className="col-9">
      <h2 className="wcu-h2 mb-3">Dedicated project manager</h2>
      <p className="wcu-p">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
      </div>
      </div>
      </div>
      <div className="col-12 col-md-12 col-lg-5">
      <div className="row">
      <div className="col-3">
      <img src={RedIcon} alt="wcu-icon" loading="lazy" className="w-100 img-fluid" />
      </div>
      <div className="col-9">
      <h2 className="wcu-h2 mb-3">Organized tasks</h2>
      <p className="wcu-p ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
      </div>
      </div>
     </div>

     <div className="col-12 col-md-12 col-lg-5">
     <div className="row">
    <div className="col-3">
    <img src={GreenIcon} alt="wcu-icon" loading="lazy" className="w-100 img-fluid" />
    </div>
    <div className="col-9">
    <h2 className="wcu-h2 mb-3">Easy feedback sharing</h2>
    <p className="wcu-p">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
    </div>
    </div>
    </div>

    <div className="col-12 col-md-12 col-lg-5">
    <div className="row">
    <div className="col-3">
    <img src={BlackIcon} alt="dp icon" loading="lazy" className="w-100" />
    </div>
    <div className="col-9">
    <h2 className="wcu-h2 mb-3">Never miss deadline</h2>
    <p className="wcu-p ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
    </div>
    </div>
    </div>
      </div>
      </div>
      <hr className="w-75  mx-auto" />
      <div className="row mt-5 pt mx-auto w-75 justify-content-between d-flex align-items-center">
      <div className="col-12 col-lg-7">
      <h3 className="ready-h3 mb-4">Ready to launch your next project?</h3>
      <p className="ready-p">With lots of unique blocks, you can easily build a page without <br /> coding. Build your next landing page.</p>
      </div>
      <div className="col-12 col-lg-3 mt-4 mt-lg-0">
      <button className="btn ready-btn mt-3">Get started a project</button>
      </div>
      </div>
      </section>
      </>
    )
}


export default WhyChooseUs;