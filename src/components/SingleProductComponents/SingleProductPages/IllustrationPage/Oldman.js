import React from "react";
import "./illus.css";
import SinglePageNav from "../../SinglePageNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Oldworman() {
  return (
    <div>
      <SinglePageNav />
      {/* bannersection */}

      <div className="bannersection">
        <div
          className="bannercontainer"
          style={{ backgroundImage: "url(/img/man1.jpg)" }}
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
                "Amanoukha is an old god trapped in a human body and forced to
                live in modern society. Having only a fraction of his power as a
                human, he is still a formidable opponent to dark spiritual
                forceS. He is always grumpy because he is disgusted at modern
                humanty's disrespect for old tradition and apparent absorption
                into technology and consumerism
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
                    src="/img/man2.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/man3.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/man4.jpg"
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
  );
}

export default Oldworman;
