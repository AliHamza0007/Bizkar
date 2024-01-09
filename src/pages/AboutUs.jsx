import "../styles/AboutUs.css";
import Team from "./homeCom/Team";
import ClientSays from "./homeCom/ClientSays";
import BrandSwiper2 from "./AboutComp/BrandSwiper2";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import vedioDiv from "../assets/About/video-4-1.png";
import aboutBG2 from "../assets/About/aboutBG2.jpg";
import aboutPage from "../assets/About/about-page-moc-1.png";
import rightArrow from "../assets/About/arow-right.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Layout2 from "../components/Layout2";
import { useEffect, useRef, useState } from "react";
const AboutUs = () => {
  const [project, setProject] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);
  const [members, setMembers] = useState(0);
  const _intervalRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    if (startCounter) {
      setProject(0);
      setAwards(0);
      setMembers(0);
      setClients(0);
      _intervalRef.current = setInterval(() => {
        setProject((project) => project + 1);
        setAwards((project) => project + 1);
        setMembers((project) => project + 1);
        setClients((project) => project + 1);
      }, 1);
    } else {
      clearInterval(_intervalRef.current);
      setProject(2500);
      setAwards(5620);
      setMembers(364);
      setClients(2960);
    }
    return () => clearInterval(_intervalRef.current);
  }, [startCounter]);

  return (
    <Layout2>
      <div className=" ">
        <section
          className="page-header"
          style={{
            backgroundImage: `url(${aboutBG})`,
          }}
        >
          <div className="container ">
            <h1 className="display-4 font-b">About Us</h1>
            <div className="text-center">
              <Link className="text-decoration-none cr font-b fs-5" to="/">
                Home
              </Link>
              <i className="fas fa-angle-double-right  px-2"></i>{" "}
              <span className="font-b fs-5">About Us</span>
            </div>
          </div>
        </section>
        <div className="container pb-2 pt-5">
          <div className="row my-5 py-5">
            <div className=" col-lg-6 position-relative pe-lg-5 col-12 mb-3">
              <img
                src={aboutPage}
                className="img-fluid h-100 aboutPage"
                alt="aboutPage"
              />
            </div>
            <div className=" col-lg-6  col-12 ps-md-5">
              <h6 className="cp   p-1 px-2 d-inline ">ABOUT US</h6>
              <h1 className=" display-5 cg  py-4   font-b  ">
                Exclusive Agency To Provide Solution{" "}
              </h1>

              <p className="font-l  spaceLine cg  ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
              <ul className="list-unstyled spaceLine  cg">
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Smashing Book 6 Is Here New Frontiers In Web Design
                </li>
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Introduction To Animation And The iMessage App Store With
                  Shruggie
                </li>
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Get Your Mobile Site Ready For The 2018 Holiday ways goods
                </li>
                <li>
                  <i className="fas  fa-check pe-2 cr" />
                  Making Distributed Product Teams Work More Efficiently other
                </li>
              </ul>

              <Link
                to=""
                className="text-decoration-none btnReadMore mt-4 rounded-pill"
              >
                Read More<i className="fa ps-3  fa-angle-double-right"></i>
              </Link>
            </div>
          </div>{" "}
        </div>

        <section>
          <div
            onMouseOver={() => setStartCounter(true)}
            onMouseOut={() => setStartCounter(false)}
            className="container pt-md-0 py-5 position-relative"
          >
            {" "}
            <img
              src={rightArrow}
              alt="rightArrow"
              className=" cardAboutIcon AboutIcon1"
            />
            <img
              src={rightArrow}
              alt="rightArrow"
              className=" cardAboutIcon AboutIcon2"
            />
            <img
              src={rightArrow}
              alt="rightArrow"
              className=" cardAboutIcon AboutIcon3"
            />{" "}
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="2000"
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                425: { slidesPerView: 2 },
              }}
              spaceBetween={100}
              className="swiper py-5 "
            >
              <SwiperSlide>
                <div className="cardProject py-4 CardBoxshadow container text-center align-items-center">
                  <div className="iconProjectDiv IconCard1 text-white">
                    <i className=" iconProject  fas fa-user-alt " />
                  </div>
                  <h3 className="cg fw-bold fs-2 font-b">{project}+</h3>
                  <h6 className="font-b cgt">Project</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cardProject py-4 CardBoxshadow container text-center align-items-center">
                  <div className="iconProjectDiv IconCard2 text-white">
                    <i className=" iconProject  far fa-heart " />
                  </div>
                  <h3 className="cg fw-bold fs-2 font-b">{clients}+</h3>
                  <h6 className="font-b cgt">Satisfied Clients</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cardProject py-4 CardBoxshadow container text-center align-items-center">
                  <div className="iconProjectDiv IconCard3 text-white">
                    <i className="fa fa-cloud-download iconProject" />
                  </div>
                  <h3 className="cg fw-bold fs-2 font-b">{awards}</h3>
                  <h6 className="font-b cgt">Win Awards</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cardProject py-4 CardBoxshadow container text-center align-items-center">
                  <div className="iconProjectDiv IconCard4 text-white">
                    <i className=" iconProject  far fa-star " />
                  </div>
                  <h3 className="cg fw-bold fs-2 font-b">{members}+</h3>
                  <h6 className="font-b cgt">Team Member</h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section
          className="page-header mb-5 pb-5"
          style={{
            backgroundImage: `url(${aboutBG2})`,
          }}
        >
          <div className="container  col-md-10 col-12 mx-auto ">
            <h1 className="display-md-1  font-b lh-1 mb-5 ">
              Our Business Advisors
              <br /> Always Help You
            </h1>
            <div className="text-center my-5">
              <Link className="  rounded-pill  btnReadMoreAbout" to="/">
                Read More
                <i className="fas fa-angle-double-right ps-2"></i>
              </Link>
            </div>
          </div>
        </section>
        <Team />
        <ClientSays />

        <BrandSwiper2 />

        <section>
          <div className="container-fluid py-5 ">
            <div className="row   mt-5 py-5 ps-lg-5 mx-md-3 ">
              <div className="col-md-6  col-12 mb-4 ">
                <h5 className="cp  font-b p-1 px-2 d-inline ls ">WHAT WE DO</h5>
                <h3 className=" WLU_Heading py-4   font-b  ">
                  Marketing Is Our Professional Business{" "}
                </h3>

                <p className="lh-lg font-l cg ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                  <br /> dolo remque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore
                  <br /> veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo.
                </p>
                <h5 className="cp font-b py-1">Started With Us</h5>

                <p className="lh-lg font-l cg">
                  Domnis iste natus error sit voluptatem accusantium mque
                  laudantium totam
                  <br /> see rem aperiam eaque ipsa quae abillo inventore
                  veritatis et quasi
                </p>
                <Link
                  to=""
                  className="text-decoration-none btnReadMore mt-4  rounded-pill fw-lighter"
                >
                  Read More<i className="fas ps-2  fa-angle-double-right"></i>
                </Link>
              </div>
              <div className="col-md-6 col-12 text-center position-relative">
                <img
                  src={vedioDiv}
                  alt="vedioDiv"
                  className="img-fluid h-100 vedioDiv"
                />
                <div className="btnReadMore VedioPlayIcon">
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};
export default AboutUs;
