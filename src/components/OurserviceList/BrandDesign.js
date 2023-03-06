import React from "react";
import Footer from "../Footer";
import HomeNaveBar from "../HomeNavbar";
import "./Animation.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function Animation() {
  return (
    <div>
      <HomeNaveBar />
      <div className="bannersection11">
      <div
          className="bannercontainer1111"
          style={{ backgroundImage: "url(/img/s2.jpg)" }}
        >
          <div className="bd111q">
            <p>Brand Designs</p>
          </div>
        </div>

        <div
          className="bannercontainer1111c"
          style={{ backgroundImage: "url(/img/s224.jpg)" }}
        >
          <div className="bd111q">
            <p>Brand Designs</p>
          </div>
        </div>
      </div>
      <div className="aboutanimation">
        <div className="aboutanimationbody">
          <div className="servicelisted">
            <div className="aboutanimationherder">
              The business of making your brand stand out, outshining your
              competition and capturing the attention of your customers, is one
              we handle with utmost dedication. we are here to serve your brand
              in key areas.
            </div>
            <div className="caarryboryse">
              <div className="detainess">
                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Brand Identity Design</h1>
                    Your brand identity is a visual form of communication that
                    should complement and reinforce your brand core values. In
                    creating your brand identity, we deliver in whole or part of
                    the areas such as Name development Logo design and
                    development, color palette creation, Identity and brand
                    guidelines development. <br /> <br />
                    <span> - Name developement</span>
                    <br />
                    <span> - Logo design and development</span>
                    <br />
                    <span> - Colour palette creation</span>
                    <br />
                    <span> - Identity and brand guidelines development</span>
                    <br />
                  </div>
                </div>
                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Prints and Digital Designs</h1>
                    We create assets to help your brand communicate effectively
                    what you offer. These assets range from Business
                    Stationeries (Business cards, Letter head, ID cards, Email
                    signatures) Brochures, Magazines, Flyers, Advertising
                    Banners, etc. <br /> <br />
                    <span>
                      - Business Stationeries ( Business cards, Letter head, ID
                      cards, Email signantures){" "}
                    </span>
                    <br />
                    <span> - Brochures and Magazines</span>
                    <br />
                    <span> - Flyers and Advertising Banners, etc.</span>
                    <br />
                    <span> - Product packaging designs</span>
                    <br />
                  </div>
                </div>

                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1>Web design and development</h1>
                    Putting your business on the internet helps you get closer
                    to your customers, at symphonii we do this by designing and
                    developing a beautiful, user friendly websites that are
                    fully responsive and optimized for best performance <br/> <br/>
                    <span>
                      We design and develop beautiful, user friendly websites
                      that are fully responsive and optimized for best
                      performance{" "}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="imaesecion">
                <img
                  src="/img/BRq.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="iconlistedica">
            <Link to="/services" style={{ color: "white" }}>
              <BiArrowBack /> Back
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Animation;
