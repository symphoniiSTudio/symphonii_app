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
          style={{ backgroundImage: "url(/img/s3.jpg)" }}
        >
          <div className="bd111q">
            <p>Art & Illustrations</p>
          </div>
        </div>

        <div
          className="bannercontainer1111c"
          style={{ backgroundImage: "url(/img/s33.jpg)" }}
        >
          <div className="bd111q">
            <p>Art & Illustrations</p>
          </div>
        </div>
      </div>
      <div className="aboutanimation">
        <div className="aboutanimationbody">
          <div className="servicelisted">
            <div className="aboutanimationherder">
              Our team of highly skilled artists can quickly turn your ideas and
              concepts to visual illustrations. We work in a wide variety of
              illustration style ranging and we create illustrations for diverse
              purposes such as
            </div>
            <div className="caarryboryse">
              <div className="detainess">
                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Story illustrations</h1>
                    Story illustration is a medium used to express ideas with
                    images, often combined with text or other visual
                    information. It typically takes the form of a sequence of
                    panels of images. Textual devices such as speech balloons,
                    captions, and onomatopoeia can indicate dialogue, narration,
                    sound effects, or other information <br /> <br />
                    <span> - Children’s book illustration</span>
                    <br />
                    <span> - Film Story board</span>
                    <br />
                    <span>- Character design</span>
                    <br />
                    <span>
                       - Cartoon environment and set design illustrations
                    </span>
                    <br />
                  </div>
                </div>
                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Caricature Illustrations</h1>
                    Caricature is a type of cartoon, usually based on an actual
                    person, with the individual’s various characteristics and
                    facial features exaggerated for comic and/or satirical
                    effect. We can create unique mascots character designs also
                    to represent your brand. <br /> <br />
                    <span> - Mascots</span>
                    <br />
                    <span> - Avatars</span>
                    <br />
                    <span> - Vector tracing</span>
                    <br />
                  </div>
                </div>

                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Product Illustrations</h1>
                    We create illustrations for your product ideas, this help
                    you have a visual understanding of what the product would
                    look like. This is a step to final realization of your
                    product development. <br/> <br/>
                    <span> - Product Concept illustration</span>
                    <br />
                    <span> - Pattern design</span>
                    <br />
                    <span> - Icon sets</span>
                    <br />
                    <span> - Illustration for games and Apps</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="imaesecion">
                <img
                  src="/img/illustration22.jpg"
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
