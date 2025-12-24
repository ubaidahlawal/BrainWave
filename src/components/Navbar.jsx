import "./Navbar.css";

function Navbar() {
  return (
    <>
    <nav className="nav-section navbar navbar-expand-sm navbar-light">
    <div className="container d-flex align-items-center justify-content-center">
      <a className="navbar-brand fw-bold" href="#">Brainwave.io</a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse g-4" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0 ms-auto">
          <li className="nav-item nav-link">
            <a className="nav-link active" href="#" aria-current="page"> 
            Demos<span className="visually-hidden">(current)</span></a>
          </li>
          <li className="nav-item nav-link text-dark">
            <a className="nav-link fw-medium" href="#"> Pages </a>
          </li>
          <li className="nav-item nav-link text-dark">
            <a className="nav-link fw-medium" href="#"> Support </a>
          </li>
          <li className="nav-item nav-link text-dark">
            <a className="nav-link fw-medium" href="#"> Contact </a>
          </li>
        </ul>

        <button className="btn px-5 rounded-4 ms-3 custom-btn" type="login">
        Get started a project
        </button>  
      </div>
    </div>
  </nav>
  </>
  );
};

export default Navbar;

