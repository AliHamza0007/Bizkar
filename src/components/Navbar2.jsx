import "../styles/Navbar.css";
import "../styles/Navbar2.css";
import { Link, NavLink } from "react-router-dom";
import navbarBrand from "../assets/logo-2-1.png";
import { useState, useEffect } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar2 = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

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
    <div
      className={`shadow position-relative  p-0 ${
        isNavbarScroll ? "navbarScroll2 navbar2" : "navbarBG2 navbar2"
      }`}
    >
      <div className={`navbar sidebar  ${isSidebar ? "active" : null}`}>
        <div className=" justify-content-end">
          <button
            onClick={() => setIsSidebar(!isSidebar)}
            className="btn-close btn  btnClose"
          ></button>
        </div>

        <div className="container col-md-8 col-11    mx-md-auto  ms-2 ">
          <div className=" my-md-5">
            <ul className="navbar-nav ms-auto text-md-center  ">
              <li className="nav-item px-2  ">
                <Link to="/" className="dropdown nav-link">
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
                </Link>
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
                      Portfolio Full
                    </NavLink>
                    <NavLink className="nav-link " to="/portfolio_detail">
                      Portfolio Detail
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
                      News Page
                    </NavLink>
                    <NavLink className="nav-link " to="/news_detail">
                      News Details
                    </NavLink>
                   
                  </div>
                </div>
              </li>
              <li className="nav-item px-2  ">
                <NavLink to="/contact" className="dropdown nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="font-l cgt mt-5  ">
            Lorem Ipsum is simply dummy text the printing and setting industry.
            Lorm Ipsum has been the industry's stanard dummy text ever.
          </p>
          <p>
            <Link
              className="cr text-decoration-none"
              to="mailto:needhelp@bizkar.com"
            >
              needhelp@bizkar.com
            </Link>
            <br />
            <Link className="cr text-decoration-none" to="tel:888-999-0000">
              888 999 0000
            </Link>
          </p>

          <div className="side-menu__social">
            <Link
              className="fab fa-facebook-f"
              to="https://www.facebook.com/webtend/"
            />{" "}
            <Link
              className="fab fa-twitter"
              to="https://www.twitter.com/webtend/"
            />{" "}
            <Link
              className="fab fa-instagram"
              to="https://www.instagram.com/webtend/"
            />{" "}
            <Link
              className="fab fa-pinterest-p"
              to="https://www.pinterest.com/webtend/"
            />
          </div>
        </div>
      </div>

      <nav className="navbar p-0 m-0 navbar-expand   ">
        <div className="container-fluid px-md-5 mx-md-4  ">
          <NavLink className="navbar-brand" to="/">
            <img src={navbarBrand} alt="navbarBrand" className="img-fluid" />
          </NavLink>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav ms-auto text-center hide">
              <li className="nav-item px-2  ">
                <Link to="/" className="dropdown nav-link">
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
                </Link>
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
                    Portfolio Full
                    </NavLink>
                    <NavLink className="nav-link " to="/portfolio_detail">
                    Portfolio Detail
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
                    News Page
                    </NavLink>
                    <NavLink className="nav-link" to="/news_detail">
                     News Detail
                    </NavLink>
                  
                  </div>
                </div>
              </li>
              <li className="nav-item px-2  ">
                <NavLink to="/contact" className="dropdown nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsSidebar(!isSidebar)}
            className="btn  "
            type="button"
          >
            <HiOutlineBars3 className="cr fs-1" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
