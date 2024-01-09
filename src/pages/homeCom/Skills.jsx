import "../../styles/Skills.css";
import progress1 from "../../assets/home/progress-1-1.png";

const Skills = () => {
  return (
    <div className=" pb-5 over  ">
      <div className="container pb-5">
        <div className="row mobileHeight">
          <div className="col-md-6 position-relative  col-12">
            <img
              src={progress1}
              className="img-fluid  ImgBounce progress1"
              alt="progress1"
            />
          </div>
          <div className="col-md-6  col-12">
            <h6 className="cp  font-b p-1 px-2 d-inline bggray">Our Skills</h6>
            <h1 className=" WLU_Heading py-4   font-b  ">
              know Everything About Professional Skills{" "}
            </h1>
            <div className="d-flex  align-items-center">
              <div className="pg" />
              <div className="pgp mx-2" />
              <div className="pg" />
            </div>
            <p className="font-l cgt pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incid dunt utlabore et dolore magna aliqua. Ut enim
              ad minim veniam weay.
            </p>
            <div className="bar mb-4">
              <div className="d-flex py-3 justify-content-between barHead1 align-items-center cg">
                <h5>Business Strategy</h5>
                <h5>
                  <b>95%</b>
                </h5>
              </div>
              <div className="progress" style={{ height: 4 }}>
                <div
                  className="progress-bar bar1"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="bar mb-4">
              <div className="d-flex py-3 justify-content-between barHead2 align-items-center cg">
                <h5>SEO Optimization</h5>
                <h5>
                  <b>87%</b>
                </h5>
              </div>
              <div className="progress" style={{ height: 4 }}>
                <div
                  className="progress-bar bar2"
                  role="progressbar"
                  style={{ width: "87%" }}
                  aria-valuenow={87}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="bar mb-4">
              <div className="d-flex py-3 justify-content-between barHead3 align-items-center">
                <h5>Social Media Marketing</h5>
                <h5>
                  <b>63%</b>
                </h5>
              </div>
              <div className="progress" style={{ height: 4 }}>
                <div
                  className="progress-bar bar3"
                  role="progressbar"
                  style={{ width: "63%" }}
                  aria-valuenow={63}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="bar ">
              <div className="d-flex py-3 justify-content-between barHead4 align-items-center">
                <h5>Web Development</h5>
                <h5>
                  <b>55%</b>
                </h5>
              </div>
              <div className="progress" style={{ height: 4 }}>
                <div
                  className="progress-bar bar4"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
