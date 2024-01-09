import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import project1 from "../../assets/home/project/portfolio-1-1.jpg";
import project2 from "../../assets/home/project/portfolio-1-2.jpg";
import project3 from "../../assets/home/project/portfolio-1-3.jpg";
import { Link } from "react-router-dom";
import "../../styles/Project.css";
import ProjectSwiper from "./ProjectSwiper";
const Project = () => {
 
  return (
    <>
      <div className="container-fluid text-center py-5">
        <div className="col-md-7 mt-5 col-12 mx-auto">
          <h6 className="cp  font-b p-1 px-2 d-inline bggray">Our Project</h6>
          <h1 className=" WLU_Heading py-4   font-b  ">
            Let’s See Our Populer Project{" "}
          </h1>{" "}
          <div className="d-flex justify-content-center hide align-items-center">
            <div className="pg" />
            <div className="pgp  mx-2" />
            <div className="pg" />
          </div>
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
            spaceBetween={30}
            className="swiper py-5 "
          >
            <SwiperSlide>
              <div className="swiperProject">
                <img
                  className="img-fluid projectImg position-relative"
                  alt="project1"
                  src={project1}
                />
                <div className="projectCardBody">
                  <h5 className="cg fs-4 font-b">Creative Arts</h5>
                  <p className="cp  font-swiperCard  ">Design, Branding</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperProject">
                <img
                  className="img-fluid projectImg position-relative"
                  alt="project1"
                  src={project2}
                />
                <div className="projectCardBody">
                  <h5 className="cg fs-4 font-b">Creative Arts</h5>
                  <p className="cp  font-swiperCard  ">Design, Branding</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperProject">
                <img
                  className="img-fluid projectImg position-relative"
                  alt="project1"
                  src={project3}
                />
                <div className="projectCardBody">
                  <h5 className="cg fs-4 font-b">Creative Arts</h5>
                  <p className="cp  font-swiperCard  ">Design, Branding</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Link
          to=""
          className="text-decoration-none d-inline mx-auto btnReadMore mt-4 rounded-pill"
        >
          View More<i className="fa ps-2  fa-angle-double-right"></i>
        </Link>
      <ProjectSwiper/>
      </div>
    </>
  );
};
export default Project;
