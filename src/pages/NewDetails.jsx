import aboutBG from "../assets/About/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import u1 from "../assets/users/u1.jpg";
import u2 from "../assets/users/u2.webp";
import u3 from "../assets/users/u3.jpg";
import u4 from "../assets/users/u4.jpg";
import Layout2 from "../components/Layout2";
import blogDetail1 from "../assets/newDetails/blog-lp-1-1.jpg";
import blogDetail2 from "../assets/newDetails/blog-s-1-1.jpg";
import "../styles/NewsDetails.css";
const NewsDetails = () => {
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
            <h1 className="display-4 font-b">Blog Details</h1>
            <div className="text-center">
              <Link className="text-decoration-none cr font-b fs-5" to="/">
                Home
              </Link>
              <i className="fas fa-angle-double-right  px-2"></i>{" "}
              <span className="font-b fs-5">Blog Details</span>
            </div>
          </div>
        </section>
        <div className=" mx-xxl-auto m-md-5 py-5 my-5">
          <div className="row px-3">
            <div className="col-lg-8 col-12 ">
              <div className="position-relative overflow-hidden">
                <img
                  src={blogDetail2}
                  alt="blogDetail2"
                  className="img-fluid blogDetail2 w-100"
                />
              </div>
              {/* links share */}

              <div className="d-flex  justify-content-md-between justify-content-center flex-md-row mb-3 flex-column align-items-center">
                <div className="d-flex py-4 align-items-center">
                  <img src={u4} alt="u1" className="userBlog " />
                  <h5 className="cg fs-6 ps-4 font-b">Hakila K.Dolika</h5>
                </div>
                <div className="d-flex gap-2 ">
                  <h6 className="cg ">Share Now</h6>
                  <Link className=" cp" to="#">
                    <i className="fas fa-share-alt "></i>
                  </Link>{" "}
                  <Link className=" cg hp" to="#">
                    <i className="fa  fa-facebook-f"></i>
                  </Link>
                  <Link className=" cg hp" to="#">
                    <i className="fa fa-twitter "></i>
                  </Link>
                  <Link className=" cg hp" to="#">
                    <i className="fa fa-google-plus "></i>
                  </Link>
                </div>
              </div>

              {/* heading  */}

              <h3 className="font-b cg hp mb-3">
                Adobe Experience Manager vs. WordPress The Authoring Expeene
                Compared
              </h3>
              <p className="lh-lg mb-4">
                But we ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
              <p className="lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur
              </p>
              <div className=" py-3 px-md-5 mx-md-3 mb-4">
                <h2 className="font-b cg">
                  Keeping Node.js Fast Tools Techniques And Tips For Making High
                  Performance Node Ser Ways Another System Commity.
                  <span className="position-relative">
                    <i className="fas fa-quote-right cp fs-1 ms-5"></i>
                  </span>
                </h2>
              </div>

              <p className="blogs">
                <i className="fas fa-tags cp pe-2" />
                <span>Popular Tag : </span>
                <Link
                  className="text-decoration-none text-dark   hp gap-3"
                  to="#"
                >
                  Business,
                </Link>
                <Link
                  className="text-decoration-none text-dark   hp gap-3"
                  to="#"
                >
                  SEO,
                </Link>
                <Link
                  className="text-decoration-none text-dark   hp gap-3"
                  to="#"
                >
                  Digital Marketing
                </Link>
              </p>
              <div className="d-md-flex justify-content-center  align-items-center gap-3 py-3">
                <h5 className="newsDetailink font-b p-4">
                  <Link className="text-decoration-none   cg z-2" to="#">
                    Building Pub Sub Service House Using Node And Redis
                  </Link>
                  <div className="bgBox" />
                </h5>

                <h5 className="newsDetailink  font-b p-4">
                  <Link className="text-decoration-none  cg z-2 " to="#">
                    Once Upon Time Using Story Stre For Better Engagement
                  </Link>{" "}
                  <div className="bgBox" />
                </h5>
              </div>

              {/* comments  */}
              <div className="py-5">
                <h2 className="font-b cg">Client’s Comments</h2>
                <div className="lineBottom" />

                <div className="d-flex my-5 cg">
                  <img
                    alt="u1"
                    className="img-fluid commentUserImg me-3"
                    src={u1}
                  />
                  <div>
                    <h5>
                      Alexzeder Alex{" "}
                      <span className="cp small ps-2"> 25 July 2019</span>
                    </h5>
                    <p className="lh-lg">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and <br />I praising pain was born and
                      will give you a complete account
                    </p>
                    <h6 className="small font-b hp">Reply Commets</h6>
                  </div>
                </div>
                <div className="d-flex my-5 cg">
                  <img
                    alt="u1"
                    className="img-fluid commentUserImg ms-5 me-3"
                    src={u3}
                  />
                  <div>
                    <h5>
                      Alexzeder Alex{" "}
                      <span className="cp small ps-2"> 25 July 2019</span>
                    </h5>
                    <p className="lh-lg">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and <br />I praising pain was born and
                      will give you a complete account
                    </p>
                    <h6 className="small font-b hp">Reply Commets</h6>
                  </div>
                </div>
                <div className="d-flex my-5 cg">
                  <img
                    alt="u1"
                    className="img-fluid commentUserImg me-3"
                    src={u2}
                  />
                  <div>
                    <h5>
                      Alexzeder Alex{" "}
                      <span className="cp small ps-2"> 25 July 2019</span>
                    </h5>
                    <p className="lh-lg">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and <br />I praising pain was born and
                      will give you a complete account
                    </p>
                    <h6 className="small font-b hp">Reply Commets</h6>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <h2 className="font-b cg">Leave Comment</h2>
                <div className="lineBottom" />

                <form action="#" className="form-groupComment mt-5">
                  <div className="row">
                    <div className="col-lg-6">
                      <i className="far fa-user" />
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                    <div className="col-lg-6">
                      <i className=" far fa-envelope" />
                      <input type="text" placeholder="Your Email " />
                    </div>
                    <div className="col-lg-12">
                      <i className=" fas fa-pencil-alt" />
                      <textarea
                        rows={4}
                        className=""
                        placeholder="Write Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </form>
                <div className="col-lg-12">
                  <button
                    type="submit"
                    className=" btnReadMore formCommentBtn "
                  >
                    Send Message <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className=" form-searchComment">
                <i className="fas fa-search" />
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search"
                />
              </div>

              <div className="border1 p-4 mb-5">
                <h5 className="font-b cg">Category</h5>
                <div className="lineBottom" />

                <div className="lh-1 mt-4">
                  <p className="hp">Business Strategy</p>
                  <p className="hp">Investment Planning</p>
                  <p className="hp">Financial Investment</p>
                  <p className="hp">Banking & Insurance</p>
                  <p className="hp">Free Consulting</p>
                  <p className="hp">Meet Our Team</p>
                </div>
              </div>
              <div className="border1 p-4 mb-5">
                <h4 className="font-b cg">Recent News</h4>
                <div className="lineBottom" />

                <div className="d-flex my-4">
                  <img
                    src={blogDetail1}
                    alt="blogDetail1"
                    className="blogDetail1 recentNewImg "
                  />
                  <div className="px-4">
                    <h6 className="font-b cg hp">
                      Quick Win For Improe Perfor Security Of Your Website.{" "}
                    </h6>
                    <p className="small cg">05 Apr 2019</p>
                  </div>
                </div>
                <hr className="w-75  mx-auto" />
                <div className="d-flex my-4">
                  <img
                    src={blogDetail1}
                    alt="blogDetail1"
                    className="blogDetail1 recentNewImg "
                  />
                  <div className="px-4">
                    <h6 className="font-b cg hp">
                      Quick Win For Improe Perfor Security Of Your Website.{" "}
                    </h6>
                    <p className="small cg">05 Apr 2019</p>
                  </div>
                </div>
                <hr className="w-75  mx-auto" />
                <div className="d-flex my-4">
                  <img
                    src={blogDetail1}
                    alt="blogDetail1"
                    className="blogDetail1 recentNewImg "
                  />
                  <div className="px-4">
                    <h6 className="font-b cg hp">
                      Quick Win For Improe Perfor Security Of Your Website.{" "}
                    </h6>
                    <p className="small cg">05 Apr 2019</p>
                  </div>
                </div>
                <hr className="w-75  mx-auto" />
              </div>
              <div className="border1 p-4 mb-5">
                <h4 className="font-b cg">Newsletters</h4>
                <div className="lineBottom" />

                <p className="lh-lg my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor ince didunt ut labore dolore magne.
                </p>
                <input type="text " placeholder="Enter Your Email" />
                <div className="col-lg-12">
                  <button
                    type="submit"
                    className=" btnReadMore formCommentBtn "
                  >
                    Subscribe Now <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
              <div className="border1 p-4 mb-5">
                <h4 className="font-b cg">Tags</h4>
                <div className="lineBottom" />

                <div className="d-flex justify-content-center flex-wrap my-4 gap-2">
                  <Link to="#" className="tagsLink">
                    Cleaning
                  </Link>
                  <Link to="#" className="tagsLink">
                    Business
                  </Link>
                  <Link to="#" className="tagsLink">
                    Booking
                  </Link>
                  <Link to="#" className="tagsLink">
                    Car
                  </Link>
                  <Link to="#" className="tagsLink">
                    House
                  </Link>
                  <Link to="#" className="tagsLink">
                    Apartment
                  </Link>
                  <Link to="#" className="tagsLink">
                    Washing
                  </Link>
                  <Link to="#" className="tagsLink">
                    Agency
                  </Link>
                  <Link to="#" className="tagsLink">
                    Listing
                  </Link>
                </div>
              </div>
              <section
                className="page-header "
                style={{
                  backgroundImage: `url(${aboutBG})`,
                }}
              >
                <div className="container ">
                  <h1 className="display-5 font-b">Work Together</h1>
                  <p className="lh-lg py-3 px-md-3 ">
                    Bur wemust ipsum dolor sit amet consectetur adipisicing elit
                    sed eiusmod tempor incididunt ut labore
                  </p>
                  <div className="col-lg-12 text-center">
                    <button
                      type="submit"
                      className=" btnReadMore formCommentBtn rounded-pill"
                    >
                      Contact Now <i className="fas fa-angle-double-right" />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};
export default NewsDetails;
