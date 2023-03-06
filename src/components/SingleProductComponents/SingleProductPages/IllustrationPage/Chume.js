import React from "react";
import "./illus.css";
import SinglePageNav from "../../SinglePageNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Chume() {
  return (
    <div>
      <div>
        <SinglePageNav />
        {/* bannersection */}

        <div className="bannersection">
          <div
            className="bannercontainer"
            style={{ backgroundImage: "url(/img/boy.jpg)" }}
          >
            <div className="bd">
              <div className="bannermain"></div>
            </div>
          </div>
        </div>

        {/* show the diffrent images here  */}

        <div className="animationBriefAnimation">
          <div className="briefBodyAnination">
            <div className="animationprope">
              <div className="thebrifesection">
                <h1>the brief!</h1>
                <p>
                  Chume is a bright boy with an unusual talent in music. After
                  his parents died in a car accident which left him as the sole
                  survivor, he goes from neighbourhood to neighbourhood every
                  evening playing music on the sidewalks and making money. He
                  uses the money to fend for himself and keep himself in school.
                </p>

                <Link to="/portfolio">
                  <button className="briefbutton">Check Our Portfolio</button>
                </Link>
              </div>

              <div className="bannersectionanimation">
                <div className="showcaseimage">
                  <div className="showiage">
                    <img
                      className="d-block w-100"
                      src="/img/boy1.jpg"
                      alt="First slide"
                      height="550"
                    />
                  </div>

                  <div className="showiage">
                    <img
                      className="d-block w-100 "
                      src="/img/boy2.jpg"
                      alt="First slide"
                      height="550"
                    />
                  </div>

                  <div className="showiage">
                    <img
                      className="d-block w-100 "
                      src="/img/boy3.jpg"
                      alt="First slide"
                      height="550"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="iconlistedica">
              <Link to="/portfolio" style={{ color: "white" }}>
                <BiArrowBack /> Back To Portfolio
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Chume;
