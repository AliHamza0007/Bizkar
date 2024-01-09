import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import service1 from "../../assets/home/service-i-1.png";
import service2 from "../../assets/home/service-i-2.png";
import service3 from "../../assets/home/service-i-3.png";
const WhyLikeUs = () => {
  return (
    <>
      <div className="container-fluid text-center py-5">
        <div className="col-md-7 mt-5 col-12 mx-auto">
          <h6 className="cp  font-b p-1 px-2 d-inline bggray">Why Like Us</h6>
          <h1 className=" WLU_Heading py-4   font-b  ">
            Success Your Business With Establish Agency
          </h1>
        </div>
        <div className="container-fluid col-md-11 col-12 mx-auto">
          {" "}
          <Swiper
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
            effect="slide"
            speed="1000"
            pagination={true}
            autoplay={{
              delay: 1500,
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
            spaceBetween={80}
            className="swiper py-5 "
          >
            <SwiperSlide>
              <div className="d-flex  py-4 justify-content-center text-start ">
                <img
                  src={service1}
                  alt="service1 "
                  className="img-fluid service pe-4"
                />
                <div>
                  <h4 className="fw-bold font-b  cg">
                    Business Strategy & Market Research
                  </h4>

                  <h6>
                    <i className=" font-b cp">Improve Business</i>
                  </h6>
                </div>
              </div>
              <hr className="pb-3" />
              <p className=" text-start font-l swipertext ">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eiusmod tempor incid dunt utlab ore et dolore magna aliqua.
                Ut enim ad minim veniam weay in the sun.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex  py-4 justify-content-center text-start ">
                <img
                  src={service2}
                  alt="service1 "
                  className="img-fluid service pe-4"
                />
                <div>
                  <h4 className="fw-bold font-b  cg">
                    SEO, PPC & Social Media Soluation
                  </h4>

                  <h6>
                    <i className=" font-b cp">SEO Optimization</i>
                  </h6>
                </div>
              </div>
              <hr className="pb-3" />
              <p className=" text-start font-l swipertext ">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eiusmod tempor incid dunt utlab ore et dolore magna aliqua.
                Ut enim ad minim veniam weay in the sun.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex  py-4 justify-content-center text-start ">
                <img
                  src={service3}
                  alt="service1 "
                  className="img-fluid service pe-4"
                />
                <div>
                  <h4 className="fw-bold font-b  cg">
                    Web Design And Development
                  </h4>

                  <h6>
                    <i className=" font-b cp">Web Soluations</i>
                  </h6>
                </div>
              </div>
              <hr className="pb-3" />
              <p className=" text-start font-l swipertext ">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eiusmod tempor incid dunt utlab ore et dolore magna aliqua.
                Ut enim ad minim veniam weay in the sun.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex  py-4 justify-content-center text-start ">
                <img
                  src={service1}
                  alt="service1 "
                  className="img-fluid service pe-4"
                />
                <div>
                  <h4 className="fw-bold font-b  cg">
                    Business Strategy & Market Research
                  </h4>

                  <h6>
                    <i className=" font-b cp">Improve Business</i>
                  </h6>
                </div>
              </div>
              <hr className="pb-3" />
              <p className=" text-start font-l swipertext ">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eiusmod tempor incid dunt utlab ore et dolore magna aliqua.
                Ut enim ad minim veniam weay in the sun.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default WhyLikeUs;
