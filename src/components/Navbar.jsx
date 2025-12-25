import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className=" w-100">
    <nav className="nav-section navbar navbar-expand-sm navbar-light container d-flex align-items-center">
    <div className="container nav-flex">
      <a className="navbar-brand fw-bold nav-logo" href="#">Brainwave.io</a>
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
        <ul className="navbar-nav align-items-center gap-2 d-flex mt-sm-0 ms-3">
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

        <button className="btn mt-3 nav-btn  ms-auto" type="login">
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

