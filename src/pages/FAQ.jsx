import { Link } from "react-router-dom";
import "../styles/Contact.css";
import Layout2 from "../components/Layout2";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import "../styles/FAQ.css";

const FAQ = () => {
  return (
    <Layout2>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="container ">
          <h1 className="display-4 font-b">Ask Questions</h1>
          <div className="text-center">
            <Link className="text-decoration-none cr font-b fs-5" to="/">
              Home
            </Link>
            <i className="fas fa-angle-double-right  px-2"></i>{" "}
            <span className="font-b fs-5">FAQ</span>
          </div>
        </div>
      </section>

      <div className=" mx-xxl-auto m-md-5 py-5 my-5">
        <div className="row px-3">
          <div className="col-lg-8 col-12 ">
            <div className="mb-4">

            
            <div>
              <h3 className="font-b cg display-4">About Our Company</h3>
              <span className="cp font-b">
                Know Something Us. We Are Professional
              </span>
            </div>
            <div className=" dropdownCol FaqPage my-4">
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton show "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Monthly Web Development Update Just-In-Time ?</h5>
                  <h5>
                    <i className=" far fa-eye" />
                    <i className=" far fa-eye-slash" />
                  </h5>
                </div>
                <p className=" dropdown-menu show">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Monthly Web Development Update Design ?</h5>
                  <h5>
                    <i className=" far fa-eye   " />
                    <i className=" far fa-eye-slash   " />
                  </h5>
                </div>
                <p className=" dropdown-menu ">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Splicing HTML’s DNA With CSS Attribute Selectors ?</h5>
                  <h5>
                    <i className=" far fa-eye   " />
                    <i className=" far fa-eye-slash   " />
                  </h5>
                </div>
                <p className=" dropdown-menu ">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Headless WordPress: The Ups And Downs Of Creating ?</h5>
                  <h5>
                    <i className=" far fa-eye   " />
                    <i className=" far fa-eye-slash   " />
                  </h5>
                </div>
                <p className=" dropdown-menu ">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
            </div>
            </div>
            <div className="mb-4">

            
            <div>
              <h3 className="font-b cg display-4">About Our Carrier</h3>
              <span className="cp font-b">
                Know Something Us. We Are Professional
              </span>
            </div>
            <div className=" dropdownCol FaqPage my-4">
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton show "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Monthly Web Development Update Just-In-Time ?</h5>
                  <h5>
                    <i className=" far fa-eye" />
                    <i className=" far fa-eye-slash" />
                  </h5>
                </div>
                <p className=" dropdown-menu show">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Monthly Web Development Update Design ?</h5>
                  <h5>
                    <i className=" far fa-eye   " />
                    <i className=" far fa-eye-slash   " />
                  </h5>
                </div>
                <p className=" dropdown-menu ">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Splicing HTML’s DNA With CSS Attribute Selectors ?</h5>
                  <h5>
                    <i className=" far fa-eye   " />
                    <i className=" far fa-eye-slash   " />
                  </h5>
                </div>
                <p className=" dropdown-menu ">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
              <div className="dropdown mb-3">
                <div
                  className="d-flex justify-content-between align-items-center dropdownButton "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  <h5>Headless WordPress: The Ups And Downs Of Creating ?</h5>
                  <h5>
                    <i className=" far fa-eye   " />
                    <i className=" far fa-eye-slash   " />
                  </h5>
                </div>
                <p className=" dropdown-menu ">
                  But we dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incie didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venam quis notrud exercitation ullamco
                  laboris nisi aliquip commodo consequat.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 my-5">
            <h4 className="font-b  cg">
              Please Fill Up The Form To Contact With Us
            </h4>

            <form action="#" className="form-groupComment ">
              <div className="row">
                <div className="col-12">
                  <i className="far fa-user" />
                  <input type="text" placeholder="Your Full Name" />
                </div>
                <div className="col-12">
                  <i className=" far fa-envelope" />
                  <input type="text" placeholder="Your Email " />
                </div>
                <div className="col-12">
                  <i className=" fas fa-phone" />
                  <input type="any" placeholder="Your Phone " />
                </div>
                <div className="col-lg-12">
                  <i className=" fas fa-pencil-alt" />
                  <textarea
                    rows={4}
                    className=""
                    placeholder="Write Message"
                    defaultValue={""}
                  />
                </div>
              </div>
            </form>
            <div className="col-lg-12 mb-4">
              <button type="submit" className=" btnReadMore  ">
                Send Message <i className="fas fa-angle-double-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};
export default FAQ;
