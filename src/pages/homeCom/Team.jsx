import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import team1 from "../../assets/users/team-1-1.jpg";
import team2 from "../../assets/users/team-1-2.jpg";
import team3 from "../../assets/users/team-1-3.jpg";
import team4 from "../../assets/users/team-1-4.jpg";
import "../../styles/Team.css";
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <>
      <div className="container-fluid text-center ">
        <div className="col-lg-5 col-md-8 col-12 mx-auto">
          <h6 className="cp font-b p-1 px-2 d-inline bggray">Our Team</h6>
          <h1 className=" WLU_Heading py-4   font-b  ">
            Meet Our Exclusive Team Member
          </h1>
        </div>
        <div className="d-flex hide justify-content-center align-items-center">
          <div className="pg" />
          <div className="pgp mx-2" />
          <div className="pg" />
        </div>
        <div className="container-fluid col-md-11 col-12 mx-auto">
          {" "}
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
            className="swiper py-5 "
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
        </div>
      </div>
    </>
  );
};
export default Team;
