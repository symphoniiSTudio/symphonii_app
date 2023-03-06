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
          style={{ backgroundImage: "url(/img/oldw3.jpg)" }}
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
                Mrs. Abejide is recently bereaved of her husband and is striving
                to keep the family business afloat. She is well organized and
                calculated individual who sometimes uses the guise of a frail
                ageing woman to outsmart her competitors and major players in
                the finance world.
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
                    src="/img/oldw1.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/oldw2.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/oldw4.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>
                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/oldw5.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>
                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/oldw6.jpg"
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
