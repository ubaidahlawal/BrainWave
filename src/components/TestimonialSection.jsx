const TestimonialSection = () => {
    return (
        <>
        <section className="container testimonial row mt-5 pt-5 w-75 mx-auto justify-content-center">
        <div className="testimonial-img col-md-5 d-flex justify-content-center align-items-center">
        <img src="/public/Oval.png" alt="tes-img" className="rounded-circle mb-3" loading="lazy"/>
        </div>
        <div className="col-md-7 t-content">
        <div className="w-25 mb-3">
        <img src="/Stars.png" alt="5 stars" className="w-100 img-fluid stars" loading="lazy"/>
        </div>
        <p className="fw-bold mt-3 testimonial-text">
        “OMG! I cannot believe that I have got a brand new landing page after getting Albino.
        It was super easy to edit and publish.”
        </p>
        <p className="mb-0 name-role mt-4">Franklin Hicks 
        <strong className="text-muted">  Web Developer</strong>
        </p>
        <br />
       
        </div>
        <hr className="w-100 mb-5 mt-5"/>
        </section>
        </>
    );
}

export default TestimonialSection;