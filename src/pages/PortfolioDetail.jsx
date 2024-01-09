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
import poflo5 from "../assets/postfolio/portfolio-d-1.jpg";
const PortfolioDetail = () => {
  return (
    <Layout2>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="container ">
          <h1 className="display-4 font-b">Portfolio Details</h1>
          <div className="text-center">
            <Link className="text-decoration-none cr font-b fs-5" to="/">
              Home
            </Link>
            <i className="fas fa-angle-double-right  px-2"></i>{" "}
            <span className="font-b fs-5">Portfolio Details</span>
          </div>
        </div>
      </section>

      <div className="container my-5 py-5">
        <h1 className="cg display-1 font-b">Creative Illustration</h1>
        <p className="lh-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum
          <img src={poflo5} alt="poflo5" className="img-fluid my-5" />
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who
        </p>
      </div>

      <div className="container ">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h6 className="cp  font-b p-1 px-2 d-inline ls"> OUR PROJECT</h6>

            <h1 className="cg display-5 py-4   font-b  ">Related Project</h1>
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
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 2,
                },
                425: {
                  slidesPerView: 1,
                },
              }}
              spaceBetween={40}
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
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default PortfolioDetail;
