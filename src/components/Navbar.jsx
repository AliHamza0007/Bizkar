import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navbarBrand from "../assets/navbar_brand.png";
const Navbar = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar1 ${isNavbarScroll ? "navbarScroll" : "navbarBG"}`}>
      <nav className="navbar mx-xl-auto p-0 m-0 navbar-expand-lg  ">
        <div className="container-fluid  mx-xl-auto px-md-5 mx-md-4  ">
          <NavLink className="navbar-brand" to="/">
            <img src={navbarBrand} alt="navbarBrand" className="img-fluid" />
          </NavLink>
          <button
            className="navbar-toggler d-lg-none "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa   fa-bars  fs-1 justify-content-center py-2 navbar-toggler-icon"></i>
            <i className="fa   fa-close  fs-1 justify-content-center py-2 navbar-toggler-icon"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav mx-auto text-center ">
              <li className="nav-item px-2  ">
                <div className="dropdown nav-link">
                  Home
                  <i
                    className="fa fa-angle-down ps-2 ps-1 fs-5"
                    aria-hidden="true"
                  ></i>
                  <div className="dropdown-content fadeup  text-start">
                    <NavLink className="nav-link bt hr" to="/">
                      Home 02
                    </NavLink>
                    <NavLink className="nav-link hr" to="/">
                      Home 03
                    </NavLink>
                    <NavLink className="nav-link " to="/">
                      Home 04
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2  ">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item px-2  ">
                <div className="dropdown nav-link">
                  Service
                  <i
                    className="fa fa-angle-down ps-2 ps-1 fs-5"
                    aria-hidden="true"
                  ></i>
                  <div className="dropdown-content fadeup  text-start">
                    <NavLink className="nav-link bt hr" to="/service1">
                      Service 01
                    </NavLink>
                    <NavLink className="nav-link " to="/service_detail">
                      Service Details
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2  ">
                <div className="dropdown nav-link">
                  Work
                  <i
                    className="fa fa-angle-down ps-2 ps-1 fs-5"
                    aria-hidden="true"
                  ></i>
                  <div className="dropdown-content fadeup  text-start">
                    <NavLink className="nav-link bt hr" to="/portfolio_full">
                      Portfolio full{" "}
                    </NavLink>
                    <NavLink className="nav-link " to="/portfolio_detail">
                      Portfolio Details
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2  ">
                <div className="dropdown nav-link">
                  Pages
                  <i
                    className="fa fa-angle-down ps-2 ps-1 fs-5"
                    aria-hidden="true"
                  ></i>
                  <div className="dropdown-content fadeup  text-start">
                    <NavLink className="nav-link bt hr" to="/pricing">
                      Pricing
                    </NavLink>
                    <NavLink className="nav-link hr" to="/faq">
                      FAQ
                    </NavLink>
                    <NavLink className="nav-link hr" to="/testimonials">
                      Testimonials
                    </NavLink>
                    <NavLink className="nav-link " to="/team_page">
                      Team
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2  ">
                <div className="dropdown nav-link">
                  News
                  <i
                    className="fa fa-angle-down ps-2 ps-1 fs-5"
                    aria-hidden="true"
                  ></i>
                  <div className="dropdown-content fadeup  text-start">
                    <NavLink className="nav-link bt hr" to="/news_page">
                      News Pages
                    </NavLink>

                    <NavLink className="nav-link " to="/news_detail">
                      News Details
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item px-2 text-center ">
                <NavLink to="/contact" className=" nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className=" ms-md-auto   navbar-nav ">
              <li className="nav-item px-2 text-center">
                <NavLink
                  to="/"
                  className=" rounded-pill btnTrail text-center hide"
                >
                  Free Trial<i className="fa fa-angle-right ps-2"></i>
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
