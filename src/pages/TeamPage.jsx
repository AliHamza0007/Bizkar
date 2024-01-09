import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import Layout2 from "../components/Layout2";
import "../styles/NewsDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ctashape1 from "../assets/service01/cta-shape-2-1.png";
import ctashape2 from "../assets/service01/cta-shape-2-2.png";
import ctashape3 from "../assets/service01/cta-shape-2-3.png";

import case1 from "../assets/service01/case-1-1.jpg";
import case2 from "../assets/service01/case-1-2.jpg";
import case3 from "../assets/service01/case-1-3.jpg";
import team1 from "../assets/users/team-1-1.jpg";
import team2 from "../assets/users/team-1-2.jpg";
import team3 from "../assets/users/team-1-3.jpg";
import team4 from "../assets/users/team-1-4.jpg";
import u1 from "../assets/users/u4.jpg";
import u2 from "../assets/users/u5.jpg";
import u3 from "../assets/users/u6.jpg";
import u4 from "../assets/users/u7.jpg";
import "../styles/TeamPage.css";
import BrandSwiper from "./homeCom/BrandSwiper";

const TeamPage = () => {
  return (
    <Layout2>
      <div className="TeamPage ">
        <section
          className="page-header"
          style={{
            backgroundImage: `url(${aboutBG})`,
          }}
        >
          <div className="container ">
            <h1 className="display-4 font-b">Exclusive Team</h1>
            <div className="text-center">
              <Link className="text-decoration-none cr font-b fs-5" to="/">
                Home
              </Link>
              <i className="fas fa-angle-double-right  px-2"></i>{" "}
              <span className="font-b fs-5">Our Team</span>
            </div>
          </div>
        </section>
        <div className="container-fluid py-5 my-5 col-md-11 col-12 mx-auto">
          <div className="row">
            <div className="col-md-6 col-12">
              <h6 className="cp font-b p-1 px-2 d-inline ls">Our Team</h6>
              <h1 className=" display-5 cg lh-sm py-4   font-b  ">
                We Have A Creative <br />
                Team Member{" "}
              </h1>
            </div>
            <div className="col-md-6 col-12">
              <p className="cg lh-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolore mque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis etes quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt Neque porro quisquam est
              </p>
            </div>
          </div>
          <div className="container-fluid text-center  col-12 mx-auto">
            {" "}
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="000"
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 2,
                },
                425: { slidesPerView: 1 },
              }}
              spaceBetween={20}
              className="swiper py-5 "
            >
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={u1} className="img-fluid h-75" alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-facebook-f"></i>
                      </Link>
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-twitter"></i>
                      </Link>
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-google-plus"></i>
                      </Link>
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-behance"></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Ricardo Torres</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={u2} className="img-fluid h-75" alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className=" cp" to="#">
                        <i className="fa fa-facebook-f "></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-behance  "></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Paul Sanchez</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={u3} className="img-fluid h-75" alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className=" cp" to="#">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-behance"></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Herbert Waters</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={u4} className="img-fluid h-75" alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className=" cp" to="#">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-behance"></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Jeremy Harrington</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="2000"
              pagination={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 2,
                },
                425: { slidesPerView: 1 },
              }}
              spaceBetween={20}
              className="swiper py-5 mb-md-0 mb-5"
            >
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={team1} className="img-fluid " alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-facebook-f"></i>
                      </Link>
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-twitter"></i>
                      </Link>
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-google-plus"></i>
                      </Link>
                      <Link className="cp " to="#">
                        <i className="iconColor fa fa-behance"></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Ricardo Torres</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={team2} className="img-fluid " alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className=" cp" to="#">
                        <i className="fa fa-facebook-f "></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-behance  "></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Paul Sanchez</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={team3} className="img-fluid " alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className=" cp" to="#">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-behance"></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Herbert Waters</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperCard position-relative">
                  <img src={team4} className="img-fluid " alt="UserImg" />
                  <div className="swiperCardBody ">
                    <div className="d-flex icon-Socials gap-2 py-3  justify-content-center">
                      <Link className=" cp" to="#">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link className=" cp" to="#">
                        <i className="fa fa-behance"></i>
                      </Link>
                    </div>
                    <h5 className="cg fs-4 font-b">Jeremy Harrington</h5>
                    <p className="cp  font-swiperCard  ">WEB DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Link
              to=""
              className="text-decoration-none d-inline mx-auto btnReadMore mt-5 rounded-pill"
            >
              View More<i className="fa ps-2  fa-angle-double-right"></i>
            </Link>
          </div>
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
        <div className="container-fluid text-center py-3 TeamPage  col-12 mx-auto">
          <BrandSwiper />
        </div>
        <div className="container-fluid  projectSwiperTop my-5  py-5 px-md-4 col-md-11 col-12 mx-auto">
          <div className="d-lg-flex justify-content-between align-items-center">
            <div>
              <p className="cp font-b     ls d-inline small ">our project</p>
              <h3 className=" display-5 cg py-4   font-b  ">
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
export default TeamPage;
