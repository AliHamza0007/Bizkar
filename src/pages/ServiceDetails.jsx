import "../styles/AboutUs.css";
import "../styles/Service01.css";
import "../styles/ServiceDetails.css";
import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import service1 from "../assets/service01/service-d-moc-1.png";
import service2 from "../assets/service01/service-d-moc-2.png";
import vedioserviceDetail from "../assets/service01/video-3-1.jpg";
import ProjectSwiper from "../pages/homeCom/ProjectSwiper";
import BrandSwiper2 from "../pages/AboutComp/BrandSwiper2";
import { Link } from "react-router-dom";
import Layout2 from "../components/Layout2";

import "../styles/ClientSays.css";
import Testmonials from "./service01Com/Testmonials";
import PricesPage from "./service01Com/PricesPage";
const ServiceDetails = () => {
  return (
    <Layout2>
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="container ">
          <h1 className="display-4 font-b">Service Details</h1>
          <div className="text-center">
            <Link className="text-decoration-none cr font-b fs-5" to="/">
              Home
            </Link>
            <i className="fas fa-angle-double-right  px-2"></i>{" "}
            <span className="font-b fs-5">Service Details</span>
          </div>
        </div>
      </section>
      <div className="container pt-md-5 ">
        <div className="row position-relative my-5 py-5">
          <div className="col-md-6 col-12 mb-4 ">
            <img
              src={service1}
              alt="service1"
              className="img-fluid  serviceDetailImg1 "
            />
          </div>

          <div className="col-md-6  col-12    px-md-0 mx-md-0 px-3">
            <h1 className="font-b    serviceDetailHeading  cg ">
              Software Does The Work But You're Always In Correct Soluation
            </h1>

            <p className="font-l  spaceLine cg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantiu doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odite.
            </p>

            <p className="font-l  spaceLine cg  ">
              Feaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur
            </p>

            <Link
              to=""
              className="cg mt-4 text-decoration-none 
              bLink   hp"
            >
              <i>Continue Reading</i>
            </Link>
          </div>
        </div>
        <div className="row position-relative mt-5 py-5">
          <div className="col-md-6  col-12    px-md-0 mx-md-0 px-3">
            <h1 className="font-b    serviceDetailHeading  cg ">
              We Help To Grow Your Business Growth
            </h1>

            <ul className="list-unstyled   serviceList lh-lg cg">
              <li className="mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                acclor emquei laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore
              </li>
              <li className="mb-3">
                But I must explain to you how all this mistaken idea of
                denouncing plaerais ing pain was born and I will give you Link
                complete account of the syst expound the actual teachings of the
                great explorer of the truth
              </li>
              <li className="mb-3">
                Dccusamus et iusto odio dignissimos ducimus qui blanditiis prae
                oluptatum deleniti atque corrupti quos dolores et quas molestia
                Continue Reading
              </li>
            </ul>

            <Link
              to=""
              className="cg mt-4 text-decoration-none 
              bLink   hp"
            >
              <i>Continue Reading</i>
            </Link>
          </div>
          <div className="col-md-6 col-12 mb-4 ">
            <img
              src={service2}
              alt="service2"
              className="img-fluid  serviceDetailImg2 "
            />
          </div>
        </div>
      </div>
      <div className="mb-5 pb-5">
        <div
          className="row  mb-5 text-center position-relative serviceDetailsbg "
          style={{ backgroundImage: `URL(${vedioserviceDetail})` }}
        >
          <div className="btnReadMore VedioPlayIcon">
            <i className="fa fa-play fs-3"></i>
          </div>{" "}
          <div className="projectSwiperBox shadow">
            <ProjectSwiper />
          </div>
        </div>
      </div>


     <PricesPage/>

      <div className="my-5 py-5">
        <BrandSwiper2 />
      </div>
      <Testmonials />
    </Layout2>
  );
};
export default ServiceDetails;
