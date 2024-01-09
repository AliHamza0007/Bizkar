import "../styles/AboutUs.css";
import "../styles/Service01.css";
import service01BgBox from "../assets/service01/service-bg-1-1.jpg";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import ctashape1 from "../assets/service01/cta-shape-2-1.png";
import ctashape2 from "../assets/service01/cta-shape-2-2.png";
import ctashape3 from "../assets/service01/cta-shape-2-3.png";

import faq2 from "../assets/service01/faq-2-image.png";
import case1 from "../assets/service01/case-1-1.jpg";
import case2 from "../assets/service01/case-1-2.jpg";
import case3 from "../assets/service01/case-1-3.jpg";
import BrandSwiper2 from "./AboutComp/BrandSwiper2";
import { Link } from "react-router-dom";
import Layout2 from "../components/Layout2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "../styles/ClientSays.css";
import Testmonials from "./service01Com/Testmonials";
const Service01 = () => {
  return (
    <Layout2>
      <div className=" ">
        <section
          className="page-header"
          style={{
            backgroundImage: `url(${aboutBG})`,
          }}
        >
          <div className="container ">
            <h1 className="display-4 font-b">Our Services</h1>
            <div className="text-center">
              <Link className="text-decoration-none cr font-b fs-5" to="/">
                Home
              </Link>
              <i className="fas fa-angle-double-right  px-2"></i>{" "}
              <span className="font-b fs-5">Our Services</span>
            </div>
          </div>
        </section>
        <div className="container mx-xxl-auto mx-md-4  pb-2 pt-4">
          <div className="row my-5 py-5">
            <div className="col-xl-6  col-12 ps-md-5 px-3  mb-4">
              <h6 className="cp   p-1 px-2 d-inline font-b ls fs-6 smal Lsl">
                OUR SERVICES
              </h6>
              <h1 className="  py-4  display-5  font-b cg ">
                We Offer Exclusive Service For You{" "}
              </h1>

              <p className="font-l  spaceLine cg  ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
              <ul className="list-unstyled spaceLine  cg">
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Smashing Book 6 Is Here New Frontiers In Web Design
                </li>
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Introduction To Animation And The iMessage App Store With
                  Shruggie
                </li>
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Get Your Mobile Site Ready For The 2018 Holiday ways goods
                </li>
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Making Distributed Product Teams Work More Efficiently other
                </li>
              </ul>

              <Link
                to=""
                className="text-decoration-none btnReadMore mt-4 rounded-pill"
              >
                Read More<i className="fa ps-3  fa-angle-double-right"></i>
              </Link>
            </div>
            <div className="col-xl-6 col-12 ">
              <div className="row services position-relative ">
                <div className="col-md-6 col-12  sBox sBox1">
                  <div className=" service1Box rounded-4 text-center py-4  ">
                    <div
                      className="page-header "
                      style={{
                        backgroundImage: `url(${service01BgBox})`,
                      }}
                    ></div>

                    <div className="content">
                      <div className=" mt-4  ">
                        <i className="fas fa-hand-holding-usd display-3 cp mb-4" />
                        <h5 className="fs-4 hd">Finance &amp; Insurance</h5>
                        <p className="lh-lg mb-4 px-3">
                          Lorem ipsum dolor sit amet conse ctetur adipisicing
                          elit sed do eiusmod tempor incididunt ut <br />
                          labore et
                        </p>
                        <Link
                          className="text-decoration-none d-inline-block text-center mb-3"
                          to=""
                        >
                          <i className="fas fa-long-arrow-alt-right service01Link_Arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12  sBox sBox2">
                  <div className=" service1Box rounded-4 text-center py-4  ">
                    <div
                      className="page-header "
                      style={{
                        backgroundImage: `url(${service01BgBox})`,
                      }}
                    ></div>

                    <div className="content">
                      <div className=" mt-4  ">
                        <i className="fas fa-hand-holding-usd display-3 cp mb-4" />
                        <h5 className="fs-4 hd">Finance &amp; Insurance</h5>
                        <p className="lh-lg mb-4 px-3">
                          Lorem ipsum dolor sit amet conse ctetur adipisicing
                          elit sed do eiusmod tempor incididunt ut <br />
                          labore et
                        </p>
                        <Link
                          className="text-decoration-none d-inline-block text-center mb-3"
                          to=""
                        >
                          <i className="fas fa-long-arrow-alt-right service01Link_Arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12  sBox sBox3 ">
                  <div className=" service1Box rounded-4 text-center py-4  ">
                    <div
                      className="page-header "
                      style={{
                        backgroundImage: `url(${service01BgBox})`,
                      }}
                    ></div>

                    <div className="content">
                      <div className=" mt-4  ">
                        <i className="fas fa-hand-holding-usd display-3 cp mb-4" />
                        <h5 className="fs-4 hd">Finance &amp; Insurance</h5>
                        <p className="lh-lg mb-4 px-3">
                          Lorem ipsum dolor sit amet conse ctetur adipisicing
                          elit sed do eiusmod tempor incididunt ut <br />
                          labore et
                        </p>
                        <Link
                          className="text-decoration-none d-inline-block text-center mb-3"
                          to=""
                        >
                          <i className="fas fa-long-arrow-alt-right service01Link_Arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12  sBox sBox4">
                  <div className=" service1Box rounded-4 text-center py-4  ">
                    <div
                      className="page-header "
                      style={{
                        backgroundImage: `url(${service01BgBox})`,
                      }}
                    ></div>

                    <div className="content">
                      <div className=" mt-4  ">
                        <i className="fas fa-hand-holding-usd display-3 cp mb-4" />
                        <h5 className="fs-4 hd">Finance &amp; Insurance</h5>
                        <p className="lh-lg mb-4 px-3">
                          Lorem ipsum dolor sit amet conse ctetur adipisicing
                          elit sed do eiusmod tempor incididunt ut <br />
                          labore et
                        </p>
                        <Link
                          className="text-decoration-none d-inline-block text-center mb-3"
                          to=""
                        >
                          <i className="fas fa-long-arrow-alt-right service01Link_Arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        <section className="cta-eleven mb-5 pb-5">
          <img
            src={ctashape1}
            alt="ctashape1"
            className="img-fluid ctashape1"
          />
          <img
            src={ctashape2}
            alt="ctashape2"
            className="img-fluid ctashape2"
          />
          <img
            src={ctashape3}
            alt="ctashape3"
            className="img-fluid ctashape3"
          />
          <div className="ctaContent">
            <h1 className="font-b display-1">Work With Us</h1>
            <p className="font-b mt-2 px-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque lauda <br /> ntium totam rem aperiam eaque
              ipsa quae ab illo inventore veritatis et{" "}
            </p>
            <div className="text-center my-4">
              <Link className="  rounded-pill  btnReadMoreAbout" to="/">
                Read More
                <i className="fas fa-angle-double-right ps-2"></i>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid  ">
            <div className="row   mt-5 py-5 ps-lg-5 mx-md-3 ">
              <div className="col-md-6  col-12 mb-4 ">
                <h5 className="cp  font-b p-1 px-2 d-inline ls ">
                  WHY CHOOSE US
                </h5>
                <h3 className=" WLU_Heading py-4   font-b  ">
                  Join Us & Get Our Professional Service
                </h3>

                <div className=" dropdownCol ">
                  <div className="dropdown py-1  ">
                    <h6
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="dropdownButton font-b cg"
                    >
                      <i className=" fas fa-angle-right  me-2 " /> We Provide
                      Best Consulting Service
                    </h6>
                    <p className=" dropdown-menu  ps-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae
                    </p>
                  </div>
                  <div className="dropdown  py-1 ">
                    <h6
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="dropdownButton font-b cg"
                    >
                      <i className=" fas fa-angle-right  me-2 " /> Web
                      Performance For Third Party Scripts: Smashing
                    </h6>
                    <p className=" dropdown-menu ps-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae{" "}
                    </p>
                  </div>
                  <div className="dropdown  py-1 ">
                    <h6
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="dropdownButton font-b cg"
                    >
                      <i className=" fas fa-angle-right  me-2 " /> We Are Just
                      Getting Started 1,000 Smashing Members Ways
                    </h6>
                    <p className=" dropdown-menu ps-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae
                    </p>
                  </div>
                  <div className="dropdown  py-1 ">
                    <h6
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="dropdownButton font-b cg"
                    >
                      <i className=" fas fa-angle-right  me-2 " /> What Happens
                      When You Create A Flexbox Flex Container?
                    </h6>
                    <p className=" dropdown-menu ps-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae
                    </p>
                  </div>
                </div>
                <Link
                  to=""
                  className="text-decoration-none btnReadMore mt-4  rounded-pill fs-6"
                >
                  Read More<i className="fas ps-2  fa-angle-double-right"></i>
                </Link>
              </div>
              <div className="col-md-6 col-12 text-center ">
                <img src={faq2} alt="faq2" className="img-fluid h-100 faq2" />
              </div>
            </div>
          </div>
        </section>

        {/* Swiper Testimonias */}
       <Testmonials/>
        <BrandSwiper2 />
        <div className="container-fluid  projectSwiperTop my-5  py-5 col-md-11 col-12 mx-auto">
          <div className="d-lg-flex justify-content-between align-items-center">
            <div>
              <p className="cp font-b     ls d-inline small ">our project</p>
              <h3 className=" WLU_Heading py-4   font-b  ">
                Recent Company <br /> Case Studies
              </h3>
            </div>
            <div>
              <Link
                to="/view"
                className="text-decoration-none btnReadMore mt-4 rounded-pill fs-6 py-5"
              >
                View All Cases
                <i className="fas ps-2  fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <Swiper
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
            effect="slide"
            speed="1500"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              425: { slidesPerView: 1 },
            }}
            spaceBetween={40}
            className="swiper py-5  "
          >
            <SwiperSlide>
              <div className="caseSwiper">
                <img
                  className="img-fluid caseImg  position-relative"
                  alt="case1"
                  src={case1}
                />
                <div className="CaseCardBody">
                  <h3 className="text-center text-white font-b hp">
                    How To Improve <br /> Business
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="caseSwiper">
                <img
                  className="img-fluid caseImg  position-relative"
                  alt="case1"
                  src={case3}
                />
                <div className="CaseCardBody">
                  <h3 className="text-center text-white font-b hp">
                    How To Improve <br /> Business
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="caseSwiper">
                <img
                  className="img-fluid caseImg  position-relative"
                  alt="case1"
                  src={case2}
                />
                <div className="CaseCardBody">
                  <h3 className="text-center text-white font-b hp">
                    How To Improve <br /> Business
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="caseSwiper">
                <img
                  className="img-fluid caseImg  position-relative"
                  alt="case1"
                  src={case1}
                />
                <div className="CaseCardBody">
                  <h3 className="text-center text-white font-b hp">
                    How To Improve <br /> Business
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout2>
  );
};
export default Service01;
