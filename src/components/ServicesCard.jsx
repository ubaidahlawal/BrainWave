const ServiceCard = ({image, title, description, isRed, imageUnder}) => {
    return (
       <div className={`service-wrapper p-4 h-100 ${isRed ? "text-white" : ""}`}>
       <img src={image} alt={title} className="img-fluid mb-3" />
       <h5>{title}</h5>
       <p>{description}</p>
       <a href="#" className={`learn-more text-white ${isRed ? "text-white" : ""}`}>
        Learn more <i className="bi bi-arrow-right ms-4"></i>
       </a>
       {isRed && imageUnder && (
        <img src={imageUnder} alt="image" className="img-under" />
       )}
       </div>
    );
}

export default ServiceCard;