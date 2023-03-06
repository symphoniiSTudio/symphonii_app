import React from "react";
import "./AnimationBrief.css";
import { Link } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'

function AnimationBrief() {
  return (
    <div>
      <div className="animationBriefAnimation">
        <div className="briefBodyAnination">
          <div className="animationprope">
            <div className="thebrifesection">
              <h1>the brief!</h1>
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

              <Link to="/portfolio">
                <button className="briefbutton">Check Our Portfolio</button>
              </Link>
            </div>

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
            </div>

            <div className="bannersectionanimation">
              <div className="ifameclass">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/28CIeC8cZks"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                >
                  
                </iframe>
              </div>

              <img
                className="d-block w-100"
                src="/img/a1.jpg"
                alt="First slide"
                height="550"
              />

              <img
                className="d-block w-100 py-2"
                src="/img/a1.jpg"
                alt="First slide"
                height="550"
              />
            </div>
          </div>
          <div className="iconlistedica">
            <Link to="/portfolio" style={{ color: "white" }}>
              <BiArrowBack/> Back To Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationBrief;
