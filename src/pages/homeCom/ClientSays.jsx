import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import u1 from "../../assets/users/u1.jpg";
import u2 from "../../assets/users/u2.webp";
import u3 from "../../assets/users/u3.jpg";
import u4 from "../../assets/users/u4.jpg";
import u5 from "../../assets/users/u5.jpg";
import "../../styles/ClientSays.css";
const ClientSays = () => {
  return (
    <div className="container">
      <div className="row position-relative py-3">
        <div className="col-12">
          <h6 className="cp  font-b p-1 px-2 d-inline bggray">Clients Say</h6>

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
            pagination={true}
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

                <div className="clientCardBody mt-5 p-md-4 p-3">
                  <p className="  font-l swipertext ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod.Lorem ipsum dolor sit amet consectetur
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

                <div className="clientCardBody mt-5 p-md-4 p-3">
                  <p className="  font-l swipertext ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod.Lorem ipsum dolor sit amet consectetur
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

                <div className="clientCardBody mt-5 p-md-4 p-3">
                  <p className="  font-l swipertext ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod.Lorem ipsum dolor sit amet consectetur
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

                <div className="clientCardBody mt-5 p-md-4 p-3">
                  <p className="  font-l swipertext ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod.Lorem ipsum dolor sit amet consectetur
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

                <div className="clientCardBody mt-5 p-md-4 p-3">
                  <p className="  font-l swipertext ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod.Lorem ipsum dolor sit amet consectetur
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
      </div>

      <section
        className="py-5 my-5
      BYB_BG
      "
      >
        <div className="BYB_BG_IMG" />
        <div className="BYB_Con">
          <div className="container  px-md-5 px-2 py-3">
            <div className="d-lg-flex justify-content-lg-between   align-items-center">
              <div className="">
                <h3 className="font-b display-4">Build Your Business</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
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
  );
};

export default ClientSays;
