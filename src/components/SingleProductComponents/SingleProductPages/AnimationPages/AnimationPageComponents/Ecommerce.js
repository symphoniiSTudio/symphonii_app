import React from "react";
import SinglePageNav from "../../../SinglePageNav";
import "./AnimationBrief.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Ymcs() {
  return (
    <div>
      <SinglePageNav />

      <div>
        <div className="bannersection">
          <div
            className="bannercontainer"
            style={{ backgroundImage: "url(/img/vh11.png)" }}
          >
            <div className="bd">
              <div className="bannermain"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="animationBriefAnimation">
        <div className="briefBodyAnination">
          <div className="animationprope">
            {/* 
            <div className="thebrifesection">
              <h1>Solution!</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, facere hic, excepturi recusandae pariatur
                inventore accusamus ad cupiditate nulla numquam illum nobis,
                impedit nostrum ipsam tempore perferendis dicta itaque sequi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, facere hic, excepturi recusandae pariatur
                inventore accusamus ad cupiditate nulla numquam illum nobis,
                impedit nostrum ipsam tempore perferendis dicta itaque sequi.
              </p>

              <Link to="/contact">
                <button className="briefbutton">Make Enquiry</button>
              </Link>
            </div> */}

            <div className="bannersectionanimation">
              <div className="ifameclass">
                <iframe
                  width="100%"
                  height="550"
                  src="https://www.youtube.com/embed/oXx0d_1b0Ek"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="iconlistedica">
            <Link to="/portfolio" style={{color: "white"}}>
              <BiArrowBack /> Back To Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ymcs;
