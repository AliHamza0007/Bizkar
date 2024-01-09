import "../styles/Home.css";
import Layout from "../components/Layout";
import banner1 from "../assets/home/banner-bg-1-1.png";
import homeImg1 from "../assets/home/homeImg1.png";
import BrandSwiper from "./homeCom/BrandSwiper";
import WhyLikeUs from "./homeCom/whyLikeUs";
import About from "./homeCom/About";
import Team from "./homeCom/Team";
import Skills from "./homeCom/Skills";
import Project from "./homeCom/Project";
import ClientSays from "./homeCom/ClientSays";
import Blog from "./homeCom/Blog";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="z-3 position-relative">
        <img alt="homeImg1" src={homeImg1} className="img-fluid homeImg1" />
        <img src={banner1} alt="banner1" className="  banner1" />

        <div className="homeContent  text-white">
          <div>
            <h1 className="font-l display-2 ">
              Discover New
              <br />
              <span className="fw-bold hFB font-b lh-1">
                Idea To Build
                <br />
                Your
                <i className="font-b d-lg-block "> Business</i>
              </span>
            </h1>
            <h4>We are professional & Experiene Digital Agency</h4>
            <div className="my-5">
              {" "}
              <Link className="  rounded-pill  btnDiscoverNow" to="/">
                Discover Now
                <i className="fas fa-angle-double-right ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BrandSwiper />
      <WhyLikeUs />
      <About />
      <Team />
      <Skills />
      <Project />
      <ClientSays />
      <Blog />
    </Layout>
  );
};

export default Home;
