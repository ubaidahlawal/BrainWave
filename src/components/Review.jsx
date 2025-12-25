import "./Review.css";
import Oval from "../assets/Oval.png";

const Review = () => {
    return (
      <>
      <section className="review text-align-center mt-5 mx-auto">
      <h5 className="review-tag text-center text-uppercase mx-auto mt-5">Testimonial</h5>
      <h2 className="review-text container text-center mt-5 mx-auto">
      “Simply the best. Better than all the rest.I’d recommend this product to beginners and advanced users.”
      </h2>
      <div className="review-wrapper">
      <img src={Oval} alt="oval-img" className="review-img col-2 mx-auto pt-4 rounded-4" />
      <h4 className="review-name">Ian Klein</h4>
      <p className="review-role">Digital Marketer</p>
      </div>
      </section>
      </>
    );
}

export default Review;