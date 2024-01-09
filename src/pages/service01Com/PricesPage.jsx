import { Link } from "react-router-dom";
import PriceCard1 from "../../assets/service01/pricing-i-1-1.png";
import PriceCard2 from "../../assets/service01/pricing-i-1-2.png";
import PriceCard3 from "../../assets/service01/pricing-i-1-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
const PricesPage = () => {
  return (
    <section className="mt-5 pt-5">
      <div className="container-fluid  projectSwiperTop my-5  py-5 col-md-11 col-12 mx-auto">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <p className="cp font-b     ls d-inline small ">get a quote</p>
            <h3 className=" display-5 cg py-4   font-b  ">
              Don't Hesitate To Contact <br /> With Us Get A Call{" "}
            </h3>
          </div>
          <div>
            <ul className="list-unstyled nav nav-tabs pricingNav">
              <li className="nav-item active">
                <Link to="#monthly" className="nav-link " data-toggle="tab">
                  Monthly
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#yearly" className="nav-link " data-toggle="tab">
                  Yearly
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container  tab-content">
        <div className="tab-pane active text-center " id="monthly">
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
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              430: { slidesPerView: 1 },
            }}
            className="swiper text-center"
          >
            <SwiperSlide>
              <div className="bgColor py-5 ">
                <div className="">
                  <img src={PriceCard1} alt="image" />
                  <div
                    className="d-flex justify-content-center  align-items-center my-3
                    gap-4 position-relative"
                  >
                    <h3 className="fs-3 cg">Startup</h3>
                    <p className="cp fs-1 font-b">
                      <sub className="fw-light fs-3 ">$</sub>24.99
                    </p>
                  </div>
                  <ul className="mb-4 list-unstyled lh-lg">
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
                  <Link to="#" className="text-decoration-none choosePlanBtn ">
                    Choose Plan <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgColor py-5 position-relative overflow-hidden">
                <div className=" ">
                  <span className="corner-ribbon font-b">Best</span>
                  <img src={PriceCard2} alt="image" />
                  <div
                    className="d-flex justify-content-center  align-items-center my-3
                    gap-4 position-relative"
                  >
                    <h3 className="fs-3 cg">Regular</h3>
                    <p className="cp fs-1 font-b">
                      <sub className="fw-light fs-3 ">$</sub>45.99
                    </p>
                  </div>
                  <ul className="mb-4 list-unstyled lh-lg">
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
                  <Link to="#" className="text-decoration-none choosePlanBtn ">
                    Choose Plan <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgColor py-5 ">
                <div className="">
                  <img src={PriceCard3} alt="image" />
                  <div
                    className="d-flex justify-content-center  align-items-center my-3
                    gap-4 position-relative"
                  >
                    <h3 className="fs-3 cg">Premium</h3>
                    <p className="cp fs-1 font-b">
                      <sub className="fw-light fs-3 ">$</sub>89.99
                    </p>
                  </div>
                  <ul className="mb-4 list-unstyled lh-lg">
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
                  <Link to="#" className="text-decoration-none choosePlanBtn ">
                    Choose Plan <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="tab-pane " id="yearly">
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
            className="swiper text-center  "
          >
            <SwiperSlide>
              <div className="bgColor py-5 ">
                <div className="">
                  <img src={PriceCard1} alt="image" />
                  <div
                    className="d-flex justify-content-center  align-items-center my-3
                    gap-4 position-relative"
                  >
                    <h3 className="fs-3 cg">Startup</h3>
                    <p className="cp fs-1 font-b">
                      <sub className="fw-light fs-3 ">$</sub>69.99
                    </p>
                  </div>
                  <ul className="mb-4 list-unstyled lh-lg">
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
                  <Link to="#" className="text-decoration-none choosePlanBtn ">
                    Choose Plan <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgColor py-5 position-relative overflow-hidden">
                <div className=" ">
                  <span className="corner-ribbon font-b">Best</span>
                  <img src={PriceCard2} alt="image" />
                  <div
                    className="d-flex justify-content-center  align-items-center my-3
                    gap-4 position-relative"
                  >
                    <h3 className="fs-3 cg">Regular</h3>
                    <p className="cp fs-1 font-b">
                      <sub className="fw-light fs-3 ">$</sub>79.99
                    </p>
                  </div>
                  <ul className="mb-4 list-unstyled lh-lg">
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
                  <Link to="#" className="text-decoration-none choosePlanBtn ">
                    Choose Plan <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgColor py-5 ">
                <div className="">
                  <img src={PriceCard3} alt="image" />
                  <div
                    className="d-flex justify-content-center  align-items-center my-3
                    gap-4 position-relative"
                  >
                    <h3 className="fs-3 cg">Premium</h3>
                    <p className="cp fs-1 font-b">
                      <sub className="fw-light fs-3 ">$</sub>99.99
                    </p>
                  </div>
                  <ul className="mb-4 list-unstyled lh-lg">
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
                  <Link to="#" className="text-decoration-none choosePlanBtn ">
                    Choose Plan <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PricesPage;
