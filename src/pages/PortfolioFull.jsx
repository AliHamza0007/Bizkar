import { Link } from "react-router-dom";
import "../styles/PortfolioFull.css";
import Layout2 from "../components/Layout2";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import poflo1 from "../assets/postfolio/portfolio-3-1.jpg";
import poflo2 from "../assets/postfolio/portfolio-3-2.jpg";
import poflo3 from "../assets/postfolio/portfolio-3-3.jpg";
import poflo4 from "../assets/postfolio/portfolio-3-4.jpg";
import poflo5 from "../assets/postfolio/portfolio-3-5.jpg";
import poflo6 from "../assets/postfolio/portfolio-3-6.jpg";
import poflo7 from "../assets/postfolio/portfolio-3-7.jpg";
import poflo8 from "../assets/postfolio/portfolio-3-8.jpg";
const PortfolioFull = () => {
  return (
    <Layout2>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="container ">
          <h1 className="display-4 font-b">Portfolio Full Width</h1>
          <div className="text-center">
            <Link className="text-decoration-none cr font-b fs-5" to="/">
              Home
            </Link>
            <i className="fas fa-angle-double-right  px-2"></i>{" "}
            <span className="font-b fs-5">Portfolio Full Width</span>
          </div>
        </div>
      </section>

      <div className=" my-5">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h6 className="cp  font-b p-1 px-2 d-inline ls">LATEST WORK</h6>

            <h1 className="cg display-5 py-4   font-b  ">
              Let’s See Our Most
              <br />
              Recent Work
            </h1>
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="2000"
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
              className="swiper "
            >
             
              <SwiperSlide className="portfolioImg">
                <img src={poflo1} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolioImg">
                <img src={poflo2} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolioImg">
                <img src={poflo3} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="2000"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
              
                768: {
                  slidesPerView: 2,
                },
                425: {
                  slidesPerView: 1,
                },
              }}
              className="swiper "
            >
           
              <SwiperSlide className="portfolioImg">
                <img src={poflo4} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolioImg">
                <img src={poflo5} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="2000"
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
              className="swiper "
            >
             
              <SwiperSlide className="portfolioImg">
                <img src={poflo6} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolioImg">
                <img src={poflo7} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolioImg">
                <img src={poflo8} alt="portfolio1" className="img-fluid " />
                <div className="Img_Port_Hover">
                  <Link
                    className="text-decoration-none d-inline-block text-center mb-3"
                    to=""
                  >
                    <i className="fas fa-long-arrow-alt-right   PortfolioLink_Arrow" />
                  </Link>
                  <h1 className=" text-white font-b hp">Creative Work</h1>
                  <h6 className="text-white">DESIGN.BRANDING</h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <section
          className="py-5 my-5 ctaPortfolio

"
        >
          <div className="Port_Con">
            <div className="container  py-3">
              <div className="d-lg-flex justify-content-lg-around   align-items-center">
                <div className="">
                  <h3 className="font-b display-4">Get Ready To Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
                <Link
                  to=""
                  className="text-decoration-none  btnReadMore   rounded-pill "
                >
                  Read More<i className="fas ps-2  fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default PortfolioFull;
