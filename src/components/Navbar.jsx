import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className="w-75 ms-auto">
    <nav className="nav-section navbar navbar-expand-sm navbar-light">
    <div className="container d-flex align-items-center justify-content-between">
      <a className="navbar-brand fw-bold nav-logo me-3 me-sm-4" href="#">Brainwave.io</a>
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
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav  mt-2 mt-lg-0 ms-auto">
          <li className="nav-item nav-link">
            <a className="nav-link nav-list active" href="#" aria-current="page"> 
            Demos<span className="visually-hidden">(current)</span></a>
          </li>
          <li className="nav-item nav-link text-dark">
            <a className="nav-link nav-list fw-medium" href="#"> Pages </a>
          </li>
          <li className="nav-item nav-link text-dark">
            <a className="nav-link nav-list fw-medium" href="#"> Support </a>
          </li>
          <li className="nav-item nav-link text-dark">
            <a className="nav-link nav-list fw-medium" href="#"> Contact </a>
          </li>
        </ul>

        <button className="btn px-5 rounded-4 ms-3 nav-btn" type="login">
        Get started a project
        </button>  
      </div>
    </div>
  </nav>
  </div>
  </>
  );
};

export default Navbar;

