import "./Footer.css";
import SocialIcons from "../assets/SocialIcons.png";

const Footer = () => {
    return (
      <>
      <footer className="footer text-light pt-5">
      <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4">
      <div>
      <h3 className="fw-bold cta-text text-white mb-4">Ready to launch your next project?</h3>
      <p className="mb-3 mt-4 text-white cta-p">
        With lots of unique blocks, you can easily build a page without <br />
         coding. Build your next landing page.
        </p>
      </div>
       <button className="btn cta-btn  mt-4 mt-lg-0">
       Get started a project
       </button>
      </div>
      <hr className="my-5 w-75 mx-auto footer-hr border-secondary"/>
      <div className="container pb-5">
      <div className="row gy-4">
      <div className="col-12 col-md-4 mt-5">
      <h4 className="fw-bold mb-4">Brainwave.io</h4>
      <p className="footer-p mb-3 mt-4">
      With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
      </p>
      <img src= {SocialIcons} alt="Social media icons" className="img-fluid mt-4 mx-auto mx-lg-0 mt-lg-2 social-icon"/>
      </div>
      <div className="col-6 col-md-2">
      <h6 className="fw-semibold mb-4">Company</h6>
      <ul className="list-unstyled text-white">
        <li>About us</li>
        <li>Contact us</li>
        <li>Careers</li>
        <li>Press</li>
      </ul>
      </div>
      <div className="col-6 col-md-2">
      <h6 className="fw-semibold mb-4">Product</h6>
      <ul className="list-unstyled text-white">
        <li>Features</li>
        <li>Pricing</li>
        <li>News</li>
        <li>Help desk</li>
        <li>Support</li>
      </ul>
      </div>
      <div className="col-6 col-md-2">
      <h6 className="fw-semibold mb-4">Services</h6>
      <ul className="list-unstyled text-white">
        <li>Digital Marketing</li>
        <li>Content Writing</li>
        <li>SEO for Business</li>
        <li>UI Design</li>
      </ul>
      </div>
      <div className="col-6 col-md-2">
      <h6 className="fw-semibold mb-4">Legal</h6>
      <ul className="list-unstyled text-white">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Return Policy</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </footer>
      </>
    )
}

export default Footer;