import { Link } from "react-router-dom";
import "../styles/Contact.css";
import Layout2 from "../components/Layout2";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";

const Contact = () => {
  return (
    <Layout2>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="container ">
          <h1 className="display-4 font-b">Contact Us</h1>
          <div className="text-center">
            <Link className="text-decoration-none cr font-b fs-5" to="/">
              Home
            </Link>
            <i className="fas fa-angle-double-right  px-2"></i>{" "}
            <span className="font-b fs-5">Contact Us</span>
          </div>
        </div>
      </section>

      <section className="my-5 py-5 ">
        <div className="container ms-md-5 ps-md-5 justify-content-center">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="cg font-b  display-4 lh-sm">
                Don't Hesitate To Contact Us
              </h3>
              <p className="lh-lg my-3">
                Sed ut perspiciatis unde omnis iste natus erro voluptat
                accusantium doloremque laudantium totam rem aperiam eaque
              </p>
              <ul className="list-unstyled lh-lg ">
                <li className="d-flex align-items-baseline">
                  <div className="d-flex align-items-center">
                    <i className="cp fas fa-map-marked" />
                    <span className="cp px-2">Address :</span>
                  </div>
                  <p>
                    27 Division St, New York, <br />
                    NY 10002,USA
                  </p>
                </li>
                <li className="d-flex align-items-baseline">
                  <div className="d-flex align-items-center">
                    <i className="cp fas fa-phone" />
                    <span className="cp px-2"> Call Us :</span>
                  </div>
                  <p>
                    <Link
                      className="text-decoration-none cg"
                      to="tel:08964712365"
                    >
                      08964712365
                    </Link>
                  </p>
                </li>
                <li className="d-flex align-items-baseline">
                  <div className="d-flex align-items-center">
                    <i className="cp fas fa-envelope" />
                    <span className="cp px-2"> Email Us :</span>
                  </div>
                  <p>
                    <Link
                      className="text-decoration-none cg"
                      to="mailto:support@gmail.com"
                    >
                      support@gmail.com
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <form className="form-group contactForm">
                <div className="">
                  <h3 className="display-4 font-b cg">Get In Touch</h3>
                  <p className="lh-lg my-3">
                    Sed ut perspiciatis unde omnis iste natus erro voluptat
                    accusantium <br />
                    doloremque laudantium totam rem aperiam eaque
                  </p>
                </div>
                <div className="row ">
                  <div className="col-md-6 ps-0 ms-0">
                    <input type="text" placeholder="Full Name" />{" "}
                  </div>{" "}
                  <div className="col-md-6 ps-0 ms-0">
                    <input type="text" placeholder="Email Address" />{" "}
                  </div>
                  <input type="text" placeholder="Subject" />
                  <div className="col-md-12 ">
                    <textarea placeholder="Message" defaultValue={""} />
                    <button type="submit" className="btnReadMore mt-3">
                      Send Message <i className="fas fa-angle-double-right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="700px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}",
            }}
          />
        </div>
      </div>
    </Layout2>
  );
};

export default Contact;
