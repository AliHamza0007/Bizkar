import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import brand1 from "../../assets/About/brand-3-1.png";
import brand2 from "../../assets/About/brand-3-2.png";
import brand3 from "../../assets/About/brand-3-3.png";
import brand4 from "../../assets/About/brand-3-4.png";
import brand5 from "../../assets/About/brand-3-5.png";
import brand6 from "../../assets/About/brand-3-6.png";
const BrandSwiper = () => {
  return (
    <>
      <style>{`
    .brandImgAbout:hover {
      filter: blur(3px);
    }
    
   `}</style>
      <section className="page-header py-5 ">
        <div className="py-4 ">
          <div className="container  ">
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="1000"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 4,
                },
                425: { slidesPerView: 2 },
              }}
              spaceBetween={30}
              className="swiper py-5"
            >
              <SwiperSlide>
                <img
                  src={brand1}
                  className="img-fluid brandImgAbout"
                  alt="brand1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={brand2}
                  className="img-fluid brandImgAbout"
                  alt="brand2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={brand3}
                  className="img-fluid brandImgAbout"
                  alt="brand3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={brand4}
                  className="img-fluid brandImgAbout"
                  alt="brand4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={brand5}
                  className="img-fluid brandImgAbout"
                  alt="brand5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={brand6}
                  className="img-fluid brandImgAbout"
                  alt="brand6"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default BrandSwiper;
