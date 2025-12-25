import "./CaseStudies.css";
import Aura from "../assets/Aura.png/";
import ABSImg from "../assets/ABSImg.png";
import Gradients from "../assets/Gradients.png";
import Magazine from "../assets/Magazine.png";

const caseStudiesData = [
    {
      image: Aura,
      category: "Graphic Design",
      title: "Aura Branding Design",
    },

    {
     image: ABSImg,
     category: "Graphic Design",
     title: "AB.S Snack Packaging",
    },

    {
     image: Gradients,
     category: "Development",
     title: "Gradient Website Development",
    },

    {
     image: Magazine,
     category: "Content Writing",
     title: "Magazine Content Writing",

    },
];

export default function CaseStudies() {
    return (
        <>
        <section className="container case-studies mt-5 py-5 text-align-center">
        <p className="cs-p text-danger text-center text-uppercase mb-3">Case studies</p>
        <h2 className="cs-title text-center mb-5">Our works describe why we are <br />the best in the business</h2>
        <div className="cs-grid">
        {caseStudiesData.map((item, index) => (
            <div className="cs-card ps-3 pt-4" key={index}>
            <img src={item.image} alt={item.title} className="cs-img img-fluid w-100" />
            <p className="cs-category">{item.category}</p>
            <h4 className="cs-item">{item.title}</h4>
           </div>
           ))}
           </div>
           <div className="cs-link-container d-flex justify-content-center">
           <a href="#" className="cs-link d-flex align-items-center g-5 mt-5 fw-semibold text-decoration-none">
            See all works
            <i className="bi bi-arrow-right"></i>
           </a>
           </div>
        </section>
        </>
    );
}
