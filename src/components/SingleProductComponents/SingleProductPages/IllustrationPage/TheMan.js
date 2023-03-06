import React from "react";
import "./illus.css";
import SinglePageNav from "../../SinglePageNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function TheMan() {
  return (
    <div>
      <SinglePageNav />
      {/* bannersection */}

      <div className="bannersection">
        <div
          className="bannercontainer"
          style={{ backgroundImage: "url(/img/sman0.jpg)" }}
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
                Thompson signed up for the super soldier program of the West
                African Joint military (W.A.J.M) after losing his family to an
                extra terrestestial alien threat on the continent, he loses all
                restraint and will do anything to fight back against the aliens
                and help humanity win the war on the aliens.
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
                    src="/img/sman1.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/sman2.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/manp2.jpg"
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

export default TheMan;
