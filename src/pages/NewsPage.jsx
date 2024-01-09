import "../styles/AboutUs.css";
import "../styles/Service01.css";
import service01BgBox from "../assets/service01/service-bg-1-1.jpg";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import u1 from "../assets/users/u1.jpg";
import u2 from "../assets/users/u2.webp";
import u3 from "../assets/users/u3.jpg";
import u4 from "../assets/users/u4.jpg";
import u5 from "../assets/users/u5.jpg";
import u6 from "../assets/users/u6.jpg";
import blog1 from "../assets/home/blog/blog-1-1.jpg";
import blog2 from "../assets/home/blog/blog-1-2.jpg";
import blog3 from "../assets/home/blog/blog-1-3.jpg";
import "../styles/Blog.css";
import Layout2 from "../components/Layout2";

const NewsPage = () => {
  return (
    <Layout2>
      <div className="NewsPage ">
        <section
          className="page-header"
          style={{
            backgroundImage: `url(${aboutBG})`,
          }}
        >
          <div className="container ">
            <h1 className="display-4 font-b">Blog Grid View</h1>
            <div className="text-center">
              <Link className="text-decoration-none cr font-b fs-5" to="/">
                Home
              </Link>
              <i className="fas fa-angle-double-right  px-2"></i>{" "}
              <span className="font-b fs-5">Blog Grid View</span>
            </div>
          </div>
        </section>
        <div className="container py-5">
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
                  <img src={u4} alt="u1" className="userBlog " />
                  <h5 className="cg fs-6 ps-4 font-b">Hakila K.Dolika</h5>
                </div>
                <h4 className="font-b cg ch">
                  Adobe Experience Manager vs. WordPress The Authoring Expeene
                  Compared
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
                  <img src={u5} alt="u1" className="userBlog " />
                  <h5 className="cg fs-6 ps-4 font-b">Hakila K.Dolika</h5>
                </div>
                <h4 className="font-b cg ch">
                  Understanding API Based form Guide For Product Managers Are
                  Programs Ways
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
                  <img src={u6} alt="u1" className="userBlog " />
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
                  Adobe Experience Manager vs. WordPress The Authoring Expeene
                  Compared
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
                  Understanding API Based form Guide For Product Managers Are
                  Programs Ways
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
                  Adobe Experience Manager vs. WordPress The Authoring Expeene
                  Compared
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
                  Understanding API Based form Guide For Product Managers Are
                  Programs Ways
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
    </Layout2>
  );
};
export default NewsPage;
