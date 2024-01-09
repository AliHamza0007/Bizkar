import { Link, Element } from "react-scroll";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Element name="navbar">
        <Navbar />
      </Element>
      <div className="overflow-hidden">{children}</div>
      <Link smooth spy duration={2000} to="navbar" className=" scroll-to-top ">
        <i className="fa fa-angle-up" />
      </Link>
      <Footer />
    </>
  );
};

export default Layout;
