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
          style={{ backgroundImage: "url(/img/s1.jpg)" }}
        >
          <div className="bd111q">
            <p>Animations</p>
          </div>
        </div>

        <div
          className="bannercontainer1111c"
          style={{ backgroundImage: "url(/img/s12.jpg)" }}
        >
          <div className="bd111q">
            <p>Animations</p>
          </div>
        </div>
      </div>
      <div className="aboutanimation">
        <div className="aboutanimationbody">
          <div className="servicelisted">
            <div className="aboutanimationherder">
              We create engaging stories for cinema, broadcast, and the web with
              strong emphasis on well designed characters, elements and
              environments. We take your scripts and ideas and create dynamic 2D
              animated videos such as;
            </div>
            <div className="caarryboryse">
              <div className="detainess">
                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Films</h1>
                    <p>
                      Animated films are limitless medium for telling stories.
                      Our artist creates worlds, defy gravity, flip from factual
                      to fantasy, and transport audiences to places they never
                      imagined. In Animated films we create memorable stories
                      using animation and motion graphics by following processes
                      that take you through the stages of concept development,
                      pre-production, storyboarding, and design. Whether your
                      goal is to create exciting shorts for film, feature length
                      films, effective messaging for broadcast or online,
                      Animated Storytelling simplifies the process of creating
                      clear and engaging stories for animation and motion
                      graphics so you can get started easily. The biggest use
                      for animation films is for entertainment on the TV, on
                      your phones, and all over the internet. In television, to
                      occupy children, as is gives them something to laugh about
                      and keep them entertained for long periods of time.
                    </p> <br />
                    <span> - Feature Length Films</span>
                    <br />
                    <span> - Short Films </span>
                    <br />
                    <span> - Cartoon Series</span>
                    <br />
                    <span> - Kiddies Rhymes</span>
                    <br />
                    <span> - Campaigns and animated commercials videos</span>
                    <br />
                  </div>
                </div>

                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1> Explainer Videos</h1>
                    An explainer video is a short-form video usually used for
                    marketing or sales purposes that highlights a company’s
                    product, service, or business idea in a compelling and
                    efficient way. Most businesses host explainer videos on
                    their landing pages or feature them on the homepage of their
                    website. Some even use these videos to advertise for their
                    product or service on Facebook or other social media
                    websites. <br /><br />
                    <span> - Product Launching</span> <br/>
                    <span> - Business Service Explainers</span>
                    <br />
                    <span> - Eductional Videos</span>
                    <br />
                    <span> - Tutorial Videos</span>
                    <br />
                  </div>
                </div>

                <div className="detatilsanimaion">
                  <div className="anidetails1">
                    <h1>Motion Graphics</h1>
                    Motion graphics describes moving or animated graphic design,
                    it focuses on giving movement to graphic design elements,
                    but tend to have less of a concrete storytelling aspect than
                    other types of animation. Motion graphics takes graphic
                    design that would be otherwise static and gives it animation
                    and movement, usually without following a specific
                    narrative. Want the bars in your graph to rise up for some
                    extra visual flair? That’s motion graphics. Want the logo on
                    your website to spin around? That’s motion graphics.<br/> 
                    <span> - Logo Reveals</span> <br/>
                    <span>- Title sequence</span>
                   <br/>
                    <span> - Animated Icon</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="imaesecion">
                <img
                  src="/img/slider4.jpg"
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
