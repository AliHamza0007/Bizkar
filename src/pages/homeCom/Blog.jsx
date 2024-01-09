import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import u1 from "../../assets/users/u1.jpg";
import u2 from "../../assets/users/u2.webp";
import u3 from "../../assets/users/u3.jpg";
import blog1 from "../../assets/home/blog/blog-1-1.jpg";
import blog2 from "../../assets/home/blog/blog-1-2.jpg";
import blog3 from "../../assets/home/blog/blog-1-3.jpg";
import "../../styles/Blog.css";
const Blog = () => {
  return (
    <div className="container">
      <div className="row position-relative py-3">
        <div className="col-12">
          <div className="z-1">
            <h6 className="cp  font-b p-1 px-2 d-inline bggray">Our Blog</h6>
            <h1 className=" WLU_Heading py-4   font-b  ">
              Reads Our Latest
              <br />
              News & Blog
            </h1>
            <div className="d-flex  hide align-items-center">
              <div className="pg" />
              <div className="pgp  mx-2" />
              <div className="pg" />
            </div>
            <p className="font-l cgt pt-4 ">
              But we ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
          <div className="d-md-flex justify-content-between align-items-center z-3">
            <div className="d-flex justify-content-center mobileSwiperNav align-items-center">
              <Link className="swiperNav me-2">
                <i className="fas fa-angle-double-left"></i>
              </Link>
              <Link className="swiperNav">
                <i className="fas fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <div className="container ">
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="2000"
              navigation={{
                prevEl: ".fa-angle-double-left",
                nextEl: ".fa-angle-double-right",
              }}
              pagination={{
                clickable: true,
              }}
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
              spaceBetween={30}
              className="swiper   swiperBlog py-5 position-relative  "
            >
              <SwiperSlide>
                <div className="swiperBlogSlide overflow-hidden rounded-3">
                  <img src={blog1} alt="blog1" className="blogImg " />
                </div>
                <div className="swiperBlogBody">
                  <div className="d-flex py-4 align-items-center">
                    <img src={u1} alt="u1" className="userBlog " />
                    <h5 className="cg fs-6 ps-4 font-b">Hakila K.Dolika</h5>
                  </div>
                  <h4 className="font-b cg ch">
                    Monthly Web Development Update Rethinking Habits And Finding
                    Custom Solutions
                  </h4>
                  <Link
                    to=""
                    className="text-decoration-none btnReadMore buttonSwiper mt-4 rounded-pill"
                  >
                    Read More<i className="fa ps-2  fa-angle-double-right"></i>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperBlogSlide overflow-hidden rounded-3">
                  <img src={blog2} alt="blog2" className="blogImg " />
                </div>
                <div className="swiperBlogBody">
                  <div className="d-flex py-4 align-items-center">
                    <img src={u2} alt="u1" className="userBlog " />
                    <h5 className="cg fs-6 ps-4 font-b">Hakila K.Dolika</h5>
                  </div>
                  <h4 className="font-b cg ch">
                    Monthly Web Development Update Rethinking Habits And Finding
                    Custom Solutions
                  </h4>
                  <Link
                    to=""
                    className="text-decoration-none btnReadMore buttonSwiper mt-4 rounded-pill"
                  >
                    Read More<i className="fa ps-2  fa-angle-double-right"></i>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperBlogSlide overflow-hidden rounded-3">
                  <img src={blog3} alt="blog3" className="blogImg " />
                </div>
                <div className="swiperBlogBody">
                  <div className="d-flex py-4 align-items-center">
                    <img src={u3} alt="u1" className="userBlog " />
                    <h5 className="cg fs-6 ps-4 font-b">Hakila K.Dolika</h5>
                  </div>
                  <h4 className="font-b cg ch">
                    Monthly Web Development Update Rethinking Habits And Finding
                    Custom Solutions
                  </h4>
                  <Link
                    to=""
                    className="text-decoration-none btnReadMore buttonSwiper mt-4 rounded-pill"
                  >
                    Read More<i className="fa ps-2  fa-angle-double-right"></i>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
