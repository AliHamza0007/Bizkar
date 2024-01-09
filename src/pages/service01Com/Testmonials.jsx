import { LuQuote } from "react-icons/lu";
import u1 from "../../assets/users/u1.jpg";
import u2 from "../../assets/users/u2.webp";
import u3 from "../../assets/users/u3.jpg";
import u4 from "../../assets/users/u4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
const Testmonials = () => {
  return (
    <div className="container mb-5">
      <div className="row py-5">
        <div className="col-12 text-center">
          <h6 className="cp  font-b p-1 px-2 d-inline ls">OUR TESTIMONIALS</h6>

          <h1 className=" WLU_Heading py-4   font-b  ">
            What Our Client’s
            <br />
            Say About Us
          </h1>

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
            className="swiper swiperService py-5 position-relative"
          >
            <SwiperSlide>
              <div className="clientCardBody   text-start py-5 px-3">
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

                <p className="lh-lg my-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit sed do.
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
              <div className="clientCardBody   text-start py-5 px-3">
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

                <p className="lh-lg my-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit sed do.
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
              <div className="clientCardBody   text-start py-5 px-3">
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

                <p className="lh-lg my-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit sed do.
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
              <div className="clientCardBody   text-start py-5 px-3">
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

                <p className="lh-lg my-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur sed do
                  eiusmod.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit sed do.
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
  );
};

export default Testmonials;
