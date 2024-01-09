import { Link } from "react-router-dom";
import PriceCard1 from "../assets/service01/pricing-i-1-1.png";
import PriceCard2 from "../assets/service01/pricing-i-1-2.png";
import PriceCard3 from "../assets/service01/pricing-i-1-3.png";
import PriceCard4 from "../assets/service01/pricing-i-3-4.png";
import pricingImg1 from "../assets/PricingPages/pricing-shape-2-1.png";
import pricingImg2 from "../assets/PricingPages/pricing-shape-2-2.png";
import Layout2 from "../components/Layout2";
import { Swiper, SwiperSlide } from "swiper/react";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import PricesPage from "./service01Com/PricesPage";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "../styles/PricingPage.css";
const PricingPages = () => {
  return (
    <Layout2>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="container ">
          <h1 className="display-4 font-b">Pricing Plan</h1>
          <div className="text-center">
            <Link className="text-decoration-none cr font-b fs-5" to="/">
              Home
            </Link>
            <i className="fas fa-angle-double-right  px-2"></i>{" "}
            <span className="font-b fs-5">Pricing Plan</span>
          </div>
        </div>
      </section>
      <div className="py-3  pricingPage">
        <PricesPage />
      </div>
      <div style={{ height: "100px" }} />

      <section className="cta-eleven ">
        <div className="pricingPages pt-5">
          <div className="container-fluid  projectSwiperTop my-5  py-5 col-md-11 col-12 mx-auto">
            <div className="d-md-flex justify-content-between align-items-center">
              <div>
                <p className="cp font-b     ls d-inline small ">get a quote</p>
                <h3 className=" display-5  py-4 text-white  font-b  ">
                  We Offer Awesome
                  <br />
                  Pricing Plan{" "}
                </h3>
              </div>
              <div>
                <ul className="list-unstyled nav nav-tabs  pricingNav ">
                  <li className="nav-item active">
                    <Link
                      to="#monthly2"
                      className="nav-link "
                      data-toggle="tab"
                    >
                      Monthly
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#yearly2" className="nav-link " data-toggle="tab">
                      Yearly
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid  col-md-11 col-12 mx-auto bg-white shadow p-4 pricingPagesCard  tab-content">
            <div className="tab-pane active  " id="monthly2">
              <Swiper
                modules={[Navigation, EffectFade, Autoplay, Pagination]}
                effect="slide"
                spaceBetween={40}
                speed="1500"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  430: { slidesPerView: 1 },
                }}
                className="swiper "
              >
                <SwiperSlide>
                  <div className="row gap-5 pb-4  p-3">
                    <div className="border1 py-5 position-relative  ">
                      <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                          {" "}
                          <img
                            src={PriceCard1}
                            alt="image"
                            className="img-fluid imgPrice"
                          />
                          <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                          <p className="cp  ">
                            <sub className=" fs-4 font-b">$</sub>
                            <span className="fs-1 font-b">24.99</span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center">
                          {" "}
                          <ul className=" listPrice ">
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              50GB Bandwidth
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Business &amp; Financ Analysing
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              24 hour support
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Customer Managemet
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="text-decoration-none choosePlanBtn2 rounded-pill "
                          >
                            Choose Plan{" "}
                            <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="border1 py-5 position-relative  ">
                      <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                          {" "}
                          <img
                            src={PriceCard3}
                            alt="image"
                            className="img-fluid imgPrice"
                          />
                          <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                          <p className="cp  ">
                            <sub className=" fs-4 font-b">$</sub>
                            <span className="fs-1 font-b">64.99</span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center">
                          {" "}
                          <ul className=" listPrice ">
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              50GB Bandwidth
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Business &amp; Financ Analysing
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              24 hour support
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Customer Managemet
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="text-decoration-none choosePlanBtn2 rounded-pill "
                          >
                            Choose Plan{" "}
                            <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row gap-5 pb-4 p-3">
                    <div className="position-relative ">
                      {" "}
                      <div className="border1 py-5 position-relative overflow-hidden ">
                        <span className="corner-ribbon font-b">Best</span>

                        <div className="row">
                          <div className="col-lg-6 col-12 text-center">
                            {" "}
                            <img
                              src={PriceCard2}
                              alt="image"
                              className="img-fluid imgPrice"
                            />
                            <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                            <p className="cp  ">
                              <sub className=" fs-4 font-b">$</sub>
                              <span className="fs-1 font-b">44.99</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-12 text-lg-start text-center">
                            {" "}
                            <ul className=" listPrice ">
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                50GB Bandwidth
                              </li>
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                Business &amp; Financ Analysing
                              </li>
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                24 hour support
                              </li>
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                Customer Managemet
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="text-decoration-none choosePlanBtn2 rounded-pill "
                      >
                        Choose Plan <i className="fas fa-angle-double-right" />
                      </Link>
                    </div>

                    <div className="border1 py-5 position-relative  ">
                      <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                          {" "}
                          <img
                            src={PriceCard4}
                            alt="image"
                            className="img-fluid imgPrice"
                          />
                          <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                          <p className="cp  ">
                            <sub className=" fs-4 font-b">$</sub>
                            <span className="fs-1 font-b">94.99</span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center">
                          {" "}
                          <ul className=" listPrice ">
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              50GB Bandwidth
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Business &amp; Financ Analysing
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              24 hour support
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Customer Managemet
                            </li>
                            <Link
                              to="#"
                              className="text-decoration-none choosePlanBtn2 rounded-pill "
                            >
                              Choose Plan{" "}
                              <i className="fas fa-angle-double-right" />
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="tab-pane " id="yearly2">
              {" "}
              <Swiper
                modules={[Navigation, EffectFade, Autoplay, Pagination]}
                effect="slide"
                spaceBetween={40}
                speed="1500"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  430: { slidesPerView: 1 },
                }}
                className="swiper "
              >
                <SwiperSlide>
                  <div className="row gap-5 pb-4  p-3">
                    <div className="border1 py-5 position-relative  ">
                      <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                          {" "}
                          <img
                            src={PriceCard1}
                            alt="image"
                            className="img-fluid imgPrice"
                          />
                          <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                          <p className="cp  ">
                            <sub className=" fs-4 font-b">$</sub>
                            <span className="fs-1 font-b">24.99</span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center">
                          {" "}
                          <ul className=" listPrice ">
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              50GB Bandwidth
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Business &amp; Financ Analysing
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              24 hour support
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Customer Managemet
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="text-decoration-none choosePlanBtn2 rounded-pill "
                          >
                            Choose Plan{" "}
                            <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="border1 py-5 position-relative  ">
                      <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                          {" "}
                          <img
                            src={PriceCard3}
                            alt="image"
                            className="img-fluid imgPrice"
                          />
                          <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                          <p className="cp  ">
                            <sub className=" fs-4 font-b">$</sub>
                            <span className="fs-1 font-b">64.99</span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center">
                          {" "}
                          <ul className=" listPrice ">
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              50GB Bandwidth
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Business &amp; Financ Analysing
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              24 hour support
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Customer Managemet
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="text-decoration-none choosePlanBtn2 rounded-pill "
                          >
                            Choose Plan{" "}
                            <i className="fas fa-angle-double-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row gap-5 pb-4 p-3">
                    <div className="position-relative ">
                      {" "}
                      <div className="border1 py-5 position-relative overflow-hidden ">
                        <span className="corner-ribbon font-b">Best</span>

                        <div className="row">
                          <div className="col-lg-6 col-12 text-center">
                            {" "}
                            <img
                              src={PriceCard2}
                              alt="image"
                              className="img-fluid imgPrice"
                            />
                            <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                            <p className="cp  ">
                              <sub className=" fs-4 font-b">$</sub>
                              <span className="fs-1 font-b">44.99</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-12 text-lg-start text-center">
                            {" "}
                            <ul className=" listPrice ">
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                50GB Bandwidth
                              </li>
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                Business &amp; Financ Analysing
                              </li>
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                24 hour support
                              </li>
                              <li>
                                <i className="fas fa-check cp pe-2" />
                                Customer Managemet
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="text-decoration-none choosePlanBtn2 rounded-pill "
                      >
                        Choose Plan <i className="fas fa-angle-double-right" />
                      </Link>
                    </div>

                    <div className="border1 py-5 position-relative  ">
                      <div className="row">
                        <div className="col-lg-6 col-12 text-center">
                          {" "}
                          <img
                            src={PriceCard4}
                            alt="image"
                            className="img-fluid imgPrice"
                          />
                          <h3 className="fs-3 mt-3 font-b cg">Startup</h3>
                          <p className="cp  ">
                            <sub className=" fs-4 font-b">$</sub>
                            <span className="fs-1 font-b">94.99</span>
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center">
                          {" "}
                          <ul className=" listPrice ">
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              50GB Bandwidth
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Business &amp; Financ Analysing
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              24 hour support
                            </li>
                            <li>
                              <i className="fas fa-check cp pe-2" />
                              Customer Managemet
                            </li>
                            <Link
                              to="#"
                              className="text-decoration-none choosePlanBtn2 rounded-pill "
                            >
                              Choose Plan{" "}
                              <i className="fas fa-angle-double-right" />
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div className="spaceHeight" />
      <div className="container-fluid  position-relative col-md-11 col-12 mx-auto my-5 py-5">
        <img
          src={pricingImg1}
          alt="pricingImg1"
          className="img-fluid pricingImg1 "
        />
        <img
          src={pricingImg2}
          alt="pricingImg2"
          className="img-fluid pricingImg2 "
        />
        <section
          className="py-5 my-5
      BYB_BG
      "
        >
          <div className="BYB_BG_IMG" />
          <div className="BYB_Con">
            <div className="container  px-md-5 px-2 py-3">
              <div className="d-lg-flex justify-content-lg-between px-3   align-items-center">
                <div className="mb-2">
                  <h3 className="font-b display-4">Build Your Business</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
                <Link
                  to=""
                  className="text-decoration-none d-inline  btnReadMore mt-md-0 mt-4 rounded-pill"
                >
                  Contact Us<i className="fa ps-2  fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default PricingPages;
