import React from "react";
import "./illus.css";
import SinglePageNav from "../../SinglePageNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Amanda() {
  return (
    <div>
      <SinglePageNav />
      {/* bannersection */}

      <div className="bannersection">
        <div
          className="bannercontainer"
          style={{ backgroundImage: "url(/img/young2.jpg)" }}
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
                Amanda is a fashion designer who is trying to put her name and
                brand on the map. Her fashion design business is a front for her
                real business, a drug trafficking ring, constantly crafting out
                new ways to move product while avoiding the authorities and the
                law.
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
                    src="/img/young1.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/young3.jpg"
                    alt="First slide"
                    height="550"
                  />
                </div>

                <div className="showiage">
                  <img
                    className="d-block w-100 "
                    src="/img/young4.jpg"
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

export default Amanda;
