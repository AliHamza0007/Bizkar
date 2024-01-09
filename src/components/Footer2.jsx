import "../styles/Footer.css";
import "../styles/Footer2.css";
import logoAbout from "../assets/footer/logo-2-2.png";
import leftImgF from "../assets/footer/footer-shape-2-1.png";
import rightImgF from "../assets/footer/footer-shape-2-2.png";
import { Link } from "react-router-dom";
const Footer2 = () => {
  return (
    <>
      <div className=" footer2 position-relative overflow-hidden pt-5">
        <img src={leftImgF} alt="leftImgF" className="img-fluid  leftImgF" />
        <img src={rightImgF} alt="rightImgF" className="img-fluid  rightImgF" />
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3  col-md-6 col-12">
              <img
                src={logoAbout}
                className="img-fluid logoAbout mb-4"
                alt="logoAbout"
              />
              <p className=" lh-lg">
                But we must ipsum dolor sit amet con sectetur adipisicing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim
              </p>

              <div className="d-flex   align-items-center footerSocialsAbout gap-3 mb-4">
                <Link className=" iconFooterAbout" to="#">
                  <i className="fa  fa-facebook-f"></i>
                </Link>
                <Link className=" iconFooterAbout" to="#">
                  <i className="fa fa-twitter "></i>
                </Link>
                <Link className=" iconFooterAbout" to="#">
                  <i className="fa fa-google-plus "></i>
                </Link>
                <Link className=" iconFooterAbout" to="#">
                  <i className="fa fa-behance "></i>
                </Link>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6 col-12 pe-lg-4 me-lg-5">
              <div className="">
                <h4 className="text-white mb-4">Recent News</h4>

                <div className="mb-4">
                  <h6>
                    <Link className="text-decoration-none fc hw" to hp="#">
                      Everything You Need Know About Alignment In Flexbox
                    </Link>
                  </h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link className="text-decoration-none cgt" to="#">
                      By <span className="fc ps-1 hp  ">Zekio Alex</span>
                    </Link>
                    <Link className="text-decoration-none cgt" to="#">
                      Date <span className="fc ps-1 hp ">20 Dec 2019</span>
                    </Link>
                  </div>
                </div>
                <div className="mb-4">
                  <h6>
                    <Link className="text-decoration-none fc hw" to hp="#">
                      Web Performance For Third Party Scripts: Smashing Cone.
                    </Link>
                  </h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link className="text-decoration-none cgt" to="#">
                      By <span className="fc ps-1 hp  ">Zekio Alex</span>
                    </Link>
                    <Link className="text-decoration-none cgt" to="#">
                      Date <span className="fc ps-1 hp ">20 Dec 2019</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-md-6 col-12 ms-lg-2 mx-auto">
              <div className="">
                <h4 className="text-white mb-4">Quick Links</h4>
                <ul className="list-unstyled lh-lg">
                  <li>
                    <Link to="/about" className="text-decoration-none qLink" tp="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/service1" className="text-decoration-none qLink" tp="#">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none qLink" tp="#">
                      Setting &amp; Privecy
                    </Link>
                  </li>
                  <li>
                    <Link to="/news_page" className="text-decoration-none qLink" tp="#">
                      Need Link Job?
                    </Link>
                  </li>
                  <li>
                    <Link to="portfolio_full" className="text-decoration-none qLink" tp="#-grid">
                      Latest Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="news_detail" className="text-decoration-none qLink" tp="#">
                      Get Link Quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6 col-12">
              <div className="footer2About">
                <h4 className="text-white mb-4">Newsletters</h4>
                <p>
                  Subscribe our newsletters to get more update and many more
                </p>{" "}
                <form action="#" className="footerform px-2 mt-2 mb-4">
                  <input
                    className="bg-transparent text-white"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <div className="pe-3">
                    <i className="fas fa-long-arrow-alt-right cp" />
                  </div>
                </form>
                <p className="footerDetail">
                  <i className="fa fa-envelope-o fT"></i>
                  <span className="fnT ps-2">support@gmail.com</span>
                </p>
                <p className="footerDetail">
                  <i className="fas fa-phone fT"></i>
                  <span className="fnT ps-2">+823 654 445 64</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center pt-2  pb-4 ">
          <h6 className=" fw-normal">
            Copy@2020
            <span className="cp hw px-1 font-b">Bizkar.</span>
            All Right Reserved.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer2;
