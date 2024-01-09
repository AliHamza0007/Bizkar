import { Link, Element } from "react-scroll";
import Footer2 from "./Footer2";
import Navbar2 from "./Navbar2";
const Layout2 = ({ children }) => {
  return (
    <>
      <Element name="navbar">
        <Navbar2 />
      </Element>
      <div className="overflow-hidden">{children}</div>
      <Link smooth spy duration={2000} to="navbar" className=" scroll-to-top ">
        <i className="fa fa-angle-up" />
      </Link>
      <Footer2 />
    </>
  );
};

export default Layout2;
