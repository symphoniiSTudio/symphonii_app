import React from "react";
import "./AnimationBrief.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function AnimationBrief() {
  return (
    <div>
      <div className="animationBriefAnimation">
        <div className="briefBodyAnination">
          <div className="animationprope">
            {/* <div className="thebrifesection">
              <h1>the brief!</h1>
              <p>
                Amanoukha is an old god trapped in a human body and forced to
                live in modern society. Having only a fraction of his powers as
                a human, he is still a formidable opponent to dark spiritual
                forces. He is always grumpy because he is disgusted at modern
                humanity’s disrespect for old tradition and different absorption
                into technology and consumerism.
              </p>

              <Link to="/portfolio">
                <button className="briefbutton">Check Our Portfolio</button>
              </Link>
            </div> */}
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
              <div className="showcaseimage">
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/LL1.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100 "
                src="/img/LL2.jpg"
                alt="First slide"
                height="550"
              />
              </div>
             <div>
             <img
                className="d-block w-100 "
                src="/img/LL3.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div>
             <img
                className="d-block w-100 "
                src="/img/LL4.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             
             <div>
             <img
                className="d-block w-100 "
                src="/img/LL5.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL6.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL7.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL8.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL9.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL10.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL11.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div>
             <img
                className="d-block w-100 "
                src="/img/LL12.jpg"
                alt="First slide"
                height="550"
              />
             </div>

              </div>
            </div>


          </div>
        </div>
        <div className="iconlistedica">
          <Link to="/portfolio" style={{ color: "white" }}>
            <BiArrowBack /> Back to Portforlio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnimationBrief;
