import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import Layout2 from "../components/Layout2";
import "../styles/NewsDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import u1 from "../assets/users/u1.jpg";
import u2 from "../assets/users/u2.webp";
import u3 from "../assets/users/u3.jpg";
import u4 from "../assets/users/u4.jpg";
import u5 from "../assets/users/u5.jpg";
import "../styles/ClientSays.css";
import "../styles/TestimonialsPage.css";
import { LuQuote } from "react-icons/lu";
const TestimonialsPage = () => {
  return (
    <Layout2>
      <div className="testimonialsPage ">
        <section
          className="page-header"
          style={{
            backgroundImage: `url(${aboutBG})`,
          }}
        >
          <div className="container ">
            <h1 className="display-4 font-b">Testimonials</h1>
            <div className="text-center">
              <Link className="text-decoration-none cr font-b fs-5" to="/">
                Home
              </Link>
              <i className="fas fa-angle-double-right  px-2"></i>{" "}
              <span className="font-b fs-5"> Testimonials</span>
            </div>
          </div>
        </section>
        <div className=" mx-xxl-auto m-md-5 py-5 my-5 mx-3">
          <div className="row position-relative py-3 px-lg-5">
            <div className="col-12">
              <h6 className="cp  font-b p-1 px-2 d-inline ls">Clients Say</h6>

              <div className="d-md-flex justify-content-between align-items-center">
                <h1 className=" WLU_Heading py-4   font-b  ">
                  know Everything About
                  <br /> Professional Skills
                </h1>
                <div className="d-flex justify-content-center mobileSwiperNav align-items-center">
                  <Link className="swiperNav me-2">
                    <i className="fas fa-angle-double-left"></i>
                  </Link>
                  <Link className="swiperNav">
                    <i className="fas fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>

              <Swiper
                modules={[Navigation, EffectFade, Autoplay, Pagination]}
                effect="slide"
                speed="2000"
                navigation={{
                  prevEl: ".fa-angle-double-left",
                  nextEl: ".fa-angle-double-right",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                }}
                spaceBetween={70}
                className="swiper swiperClient py-5 position-relative"
              >
                <SwiperSlide>
                  <div className="clientCardSwiper text-center ">
                    <img
                      src={u1}
                      className="userClient
                "
                      alt="u1"
                    />

                    <div className="clientCardBody bg-white mt-5 p-md-4 p-3">
                      <p className="  font-l swipertext ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sed do eiusmod
                      </p>
                      <p className="cg  clientName font-b">
                        Sophia Zimmerman
                        <br />
                        <span className="cp fs-6 font-b">CEO & Founder</span>
                        <i className="fa fa-quote-right fs-3"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="clientCardSwiper text-center ">
                    <img
                      src={u2}
                      className="userClient
                "
                      alt="u2"
                    />

                    <div className="clientCardBody bg-white mt-5 p-md-4 p-3">
                      <p className="  font-l swipertext ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sed do eiusmod
                      </p>
                      <p className="cg  clientName font-b">
                        Pearl Campbell
                        <br />
                        <span className="cp fs-6 font-b">CEO & Founder</span>
                        <i className="fa fa-quote-right fs-3"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="clientCardSwiper text-center ">
                    <img
                      src={u3}
                      className="userClient
                "
                      alt="u3"
                    />

                    <div className="clientCardBody bg-white mt-5 p-md-4 p-3">
                      <p className="  font-l swipertext ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sed do eiusmod
                      </p>
                      <p className="cg  clientName font-b">
                        Austin Houston
                        <br />
                        <span className="cp fs-6 font-b">CEO & Founder</span>
                        <i className="fa fa-quote-right fs-3"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="clientCardSwiper text-center ">
                    <img
                      src={u4}
                      className="userClient
                "
                      alt="u4"
                    />

                    <div className="clientCardBody bg-white mt-5 p-md-4 p-3">
                      <p className="  font-l swipertext ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sed do eiusmod
                      </p>
                      <p className="cg  clientName font-b">
                        Chester Ortiz
                        <br />
                        <span className="cp fs-6 font-b">CEO & Founder</span>
                        <i className="fa fa-quote-right fs-3"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="clientCardSwiper text-center ">
                    <img
                      src={u5}
                      className="userClient
                "
                      alt="u5"
                    />

                    <div className="clientCardBody bg-white mt-5 p-md-4 p-3">
                      <p className="  font-l swipertext ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sed do eiusmod
                      </p>
                      <p className="cg  clientName font-b">
                        Jay Houston
                        <br />
                        <span className="cp fs-6 font-b">CEO & Founder</span>
                        <i className="fa fa-quote-right fs-3"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className=" linesDiv">
                <div className="position-relative ">
                  <hr className="lineClient" />

                  <i className="fa fa-angle-right lineIcon l1"></i>
                  <i className="fa fa-angle-right lineIcon l2"></i>
                  <i className="fa fa-angle-right lineIcon l3"></i>
                  <i className="fa fa-angle-right lineIcon l4"></i>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <section className="cta-eleven  mb-5 pb-5">
          <div className="ctaContent">
            <div className="row py-5">
              <div className="col-12 text-center">
                <h6 className="cp  font-b p-1 px-2 d-inline ls">
                  OUR TESTIMONIALS
                </h6>

                <h1 className=" WLU_Heading py-4   font-b  text-white">
                  What Our Client’s
                  <br />
                  Say About Us
                </h1>
                <div className="container px-3 mx-md-0 mx-3  mb-5">
                  <Swiper
                    modules={[Navigation, EffectFade, Autoplay, Pagination]}
                    effect="slide"
                    speed="2000"
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      1024: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      425: {
                        slidesPerView: 1,
                      },
                    }}
                    spaceBetween={30}
                    className="swiper swiperService py-5 position-relative "
                  >
                    <SwiperSlide>
                      <div className="rounded-4 bg-white   text-start py-5 px-4">
                        <div className="d-flex ">
                          <img
                            src={u1}
                            className="userClient me-3
                "
                            alt="u1"
                          />{" "}
                          <p className="cg  clientName font-b">
                            Sophia Zimmerman
                            <br />
                            <span className="cp small Ls font-b text-uppercase ">
                              CEO & Founder
                            </span>
                          </p>
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                        <div className="d-flex justify-content-between align-items-center pe-3 py-2">
                          <LuQuote className=" display-5 position-static cb " />
                          <div className="d-flex gap-2">
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="rounded-4 bg-white   text-start py-5 px-4">
                        <div className="d-flex ">
                          <img
                            src={u2}
                            className="userClient me-3
                "
                            alt="u1"
                          />{" "}
                          <p className="cg  clientName font-b">
                            Dean Gibbs
                            <br />
                            <span className="cp small Ls font-b text-uppercase ">
                              CEO & Founder
                            </span>
                          </p>
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                        <div className="d-flex justify-content-between align-items-center pe-3 py-2">
                          <LuQuote className=" display-5 position-static cb " />
                          <div className="d-flex gap-2">
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="rounded-4 bg-white   text-start py-5 px-4">
                        <div className="d-flex ">
                          <img
                            src={u3}
                            className="userClient me-3
                "
                            alt="u1"
                          />{" "}
                          <p className="cg  clientName font-b">
                            Alejandro Cannon
                            <br />
                            <span className="cp small Ls font-b text-uppercase ">
                              CEO & Founder
                            </span>
                          </p>
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                        <div className="d-flex justify-content-between align-items-center pe-3 py-2">
                          <LuQuote className=" display-5 position-static cb " />
                          <div className="d-flex gap-2">
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="rounded-4 bg-white   text-start py-5 px-4">
                        <div className="d-flex ">
                          <img
                            src={u4}
                            className="userClient me-3
                "
                            alt="u1"
                          />{" "}
                          <p className="cg  clientName font-b">
                            Emiy Hale
                            <br />
                            <span className="cp small Ls font-b text-uppercase ">
                              CEO & Founder
                            </span>
                          </p>
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                        <div className="d-flex justify-content-between align-items-center pe-3 py-2">
                          <LuQuote className=" display-5 position-static cb " />
                          <div className="d-flex gap-2">
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                            <i className="far fa-star fs-5 cp"></i>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" container">
            <div className="row py-5">
              <div className="col-12 text-center">
                <h1 className=" display-5 cg py-4   font-b  ">
                  What Our Client’s
                  <br />
                  Say About Us
                </h1>
                <p className="cg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiuses tempor incididunt ut labore et dolore
                  <br />
                  magna aliqua. Ut enimminim veniam, quis nostrud exercitation
                </p>
                <div className="container px-md-0 px-3 mx-md-0  mb-5">
                  <Swiper
                    modules={[Navigation, EffectFade, Autoplay, Pagination]}
                    effect="slide"
                    speed="2000"
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      1024: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      425: {
                        slidesPerView: 1,
                      },
                    }}
                    spaceBetween={30}
                    className="swiper swiperTestimonials py-5 position-relative"
                  >
                    <SwiperSlide>
                      <div className="  rounded-4 clientCardBody bg-white   text-start py-5 px-4">
                        <div className="d-flex justify-content-between ">
                          <div className="d-flex ">
                            <img
                              src={u1}
                              className="userClient me-3
                "
                              alt="u1"
                            />{" "}
                            <p className="cg  clientName font-b">
                              Lean Blake
                              <br />
                              <span className="co small Ls font-b text-uppercase ">
                                CEO & Founder
                              </span>
                            </p>
                          </div>
                          <LuQuote className=" display-5  cb " />
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="  rounded-4 clientCardBody bg-white   text-start py-5 px-4">
                        <div className="d-flex justify-content-between ">
                          <div className="d-flex ">
                            <img
                              src={u2}
                              className="userClient me-3
                "
                              alt="u1"
                            />{" "}
                            <p className="cg  clientName font-b">
                              Emily Hale
                              <br />
                              <span className="co small Ls font-b text-uppercase ">
                                CEO & Founder
                              </span>
                            </p>
                          </div>
                          <LuQuote className=" display-5  cb " />
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="  rounded-4 clientCardBody bg-white   text-start py-5 px-4">
                        <div className="d-flex justify-content-between ">
                          <div className="d-flex ">
                            <img
                              src={u3}
                              className="userClient me-3
                "
                              alt="u1"
                            />{" "}
                            <p className="cg  clientName font-b">
                              Rosetta Herrera
                              <br />
                              <span className="co small Ls font-b text-uppercase ">
                                CEO & Founder
                              </span>
                            </p>
                          </div>
                          <LuQuote className=" display-5  cb " />
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="  rounded-4 clientCardBody bg-white   text-start py-5 px-4">
                        <div className="d-flex justify-content-between ">
                          <div className="d-flex ">
                            <img
                              src={u4}
                              className="userClient me-3
                "
                              alt="u1"
                            />{" "}
                            <p className="cg  clientName font-b">
                              Ale jandre
                              <br />
                              <span className="co small Ls font-b text-uppercase ">
                                CEO & Founder
                              </span>
                            </p>
                          </div>
                          <LuQuote className=" display-5  cb " />
                        </div>

                        <p className="lh-lg my-4 cg ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur sed do eiusmod.Lorem ipsum dolor sit amet
                          consectetur adipisicing elit sed do.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};
export default TestimonialsPage;
