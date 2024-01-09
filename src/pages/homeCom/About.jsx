import "../../styles/About.css";
import about1 from "../../assets/home/about1.png";
import about2 from "../../assets/home/about2.png";
import aboutBG from "../../assets/home/about2Bg.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className=" pb-5 over  ">
      <div className="container pb-5">
        <div className="row mobileHeight">
          <div className="col-md-6 position-relative  col-12">
            <img src={about1} className="img-fluid ImgBounce" alt="about1" />
          </div>
          <div className="col-md-6  col-12">
            <h6 className="cp  font-b p-1 px-2 d-inline bggray">About Us</h6>
            <h1 className=" WLU_Heading py-4   font-b  ">
              We Are Specialized In Business Soluation{" "}
            </h1>

            <div className="d-flex  align-items-center">
              <div className="pg" />
              <div className="pgp mx-2" />
              <div className="pg" />
            </div>
            <p className="font-l cgt pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incid dunt utlabore et dolore magna aliqua. Ut enim
              ad minim veniam weay.
            </p>
            <h5 className="fw-bold cg py-4">We Are Always With You</h5>
            <p className="font-l cgt ">
              But we must be dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exea commodo consequat
            </p>
            <Link
              to="/read"
              className="text-decoration-none btnReadMore mt-4 rounded-pill"
            >
              Read More<i className="fa ps-2  fa-angle-double-right"></i>
            </Link>
          </div>
        </div>{" "}
        <div className="row position-relative py-5">
          {" "}
          <img
            src={about2}
            className="img-fluid about1 ImgBounce1"
            alt="about1"
          />
          <img src={aboutBG} className="img-fluid  aboutBG" alt="aboutBG" />
          <div className="col-md-7  col-12">
            <h6 className="cp  font-b p-1 px-2 d-inline bggray">What We Do</h6>
            <h1 className=" WLU_Heading py-4   font-b  ">
              We Offer Best Soluation For Your Business{" "}
            </h1>

            <div className="d-flex  align-items-center">
              <div className="pg" />
              <div className="pgp mx-2" />
              <div className="pg" />
            </div>

            <div className="d-flex py-5 iconDiv">
              <div className=" pe-4">
                <i className="icon fa fa-leaf"></i>
              </div>
              <div>
                <h4 className="font-b cg">Manage Your Project</h4>
                <p className="font-l cgt pe-4 ">
                  Consectetur adipisicing elit sed eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="d-flex iconDiv  ">
              <div className=" pe-4">
                <i className="icon fa fa-laptop"></i>
              </div>
              <div>
                <h4 className="font-b cg">Business & Data Analytics</h4>
                <p className="font-l cgt pe-4 ">
                  Consectetur adipisicing elit sed eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default About;
