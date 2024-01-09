import "../styles/Footer.css";
import logoDark from "../assets/logo-dark.png";
import footerImg from "../assets/footer-1-1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
     <>      <div className="container position-relative pt-5"> <img
        src={footerImg}
        alt="footerImg"
        className="img-fluid  ImgBounce1 footerImg"
      />
        <div className="row py-5">
          <div className="col-lg-4 col-12 pe-lg-5">
            <img src={logoDark} className="img-fluid logoDark" alt="logoDark" />
            <p className="font-l cgf pt-5 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod
            </p>
            <form action="#" className="footerform px-2 ">
              <input type="text" placeholder="Enter Your Email" />
              <div className="pe-3">
                <i className="fas fa-long-arrow-alt-right cg " />
              </div>
            </form>
            <div className="d-flex  py-3  align-items-center footerSocials gap-2">
              <Link className=" cp" to="#">
                <i className="fa  fa-facebook-f"></i>
              </Link>
              <Link className=" cp" to="#">
                <i className="fa fa-twitter "></i>
              </Link>
              <Link className=" cp" to="#">
                <i className="fa fa-google-plus "></i>
              </Link>
              <Link className=" cp" to="#">
                <i className="fa fa-behance "></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-12 offset-md-1">
            <div className="mt-md-0 mt-4">
              <h4 className=" font-b cg mb-4">Official Address</h4>
              <div className="mb-4">
                <h6 className="font-b cg py-2">
                  <i className="fas fa-map-marked cp me-3" />
                  Address
                </h6>
                <p className=" cgf ">
                  205, Khola Street Name, New <br />
                  York, USA
                </p>
              </div>
              <div className="mb-4">
                <h6 className="font-b cg ">
                  <i className="fas fa-phone cp me-3" />
                  Phone
                </h6>
                <p>
                  <Link
                    className=" cgf text-decoration-none"
                    to="tel:+82-123-456-89"
                  >
                    +82 123 456 89{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />{" "}
      </div>
      <div className="container pt-2  pb-4 ">
        <h6 className="cgf fw-normal">
          Copy@2020
          <span className="cp px-1">Bizkar.</span>
          All Right Reserved.Design By LayerDrops.
        </h6>
      </div>
      </>

  );
};

export default Footer;
