import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import brand1 from "../../assets/brandImgs/brand1.png";
import brand2 from "../../assets/brandImgs/brand2.png";
import brand3 from "../../assets/brandImgs/brand3.png";
import brand4 from "../../assets/brandImgs/brand4.png";
import brand5 from "../../assets/brandImgs/brand5.png";
import brand6 from "../../assets/brandImgs/brand6.png";
const BrandSwiper = () => {
  return (
    <>
      <style>{`.brandImg{
        opacity:0.3;

    }
    
    .brandImg:hover{
        opacity:1;

    }`}</style>
      <div className="container-fluid text-center my-5">
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
          className="swiper "
        >
          <SwiperSlide>
            <img src={brand1} className="img-fluid brandImg" alt="brand1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand2} className="img-fluid brandImg" alt="brand2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand3} className="img-fluid brandImg" alt="brand3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand4} className="img-fluid brandImg" alt="brand4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand5} className="img-fluid brandImg" alt="brand5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand6} className="img-fluid brandImg" alt="brand6" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default BrandSwiper;
