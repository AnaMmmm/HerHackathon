import React from "react";
import Searchbox from './Searchbox';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-pill sticky-top ms-4 me-4">
          <a className="navbar-brand pa2" href="https://www.accenture.com/ch-en/about/company-index">
            About us
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse flex clearfix relative" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Your feed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.canva.com/design/DAFEh5vOXEM/_bl5bZLebnBrYCq_eHRshw/watch?utm_content=D[…]mpaign=designshare&utm_medium=link&utm_source=publishsharelink">
                  Gender gap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.accenture.com/gb-en/blogs/blogs-thomas-onboarding">
                  Onboarding
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Marketing
                  </a>
                  <a className="dropdown-item" href="#">
                    HR
                  </a>
                  <a className="dropdown-item" href="#">
                    IT
                  </a>
                  <a className="dropdown-item" href="#">
                    Procurement
                  </a>
                  <a className="dropdown-item" href="#">
                    Finance
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <Searchbox />
        </nav>
      );
}
export default Navbar;