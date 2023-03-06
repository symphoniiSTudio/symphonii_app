import React from "react";
import "./OurServiceHome.css";
// import { Carousel } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function ServiceQuoteSection() {
  const history =  useHistory()

  const handleComic = () => {
history.push("/components/Comic/ComicITem")
  }
  return (
    <div>
      <div className="quotemain">
        <div className="cardmain">
          <div className="homereact">
            <div className="container1">
              <div className="content">
                <Link to="/animation">
                  <div className="content-overlay"></div>
                  <div
                    className="content-image"
                    style={{ backgroundImage: "url(/img/Illustration21.jpg)" }}
                  >
                    <div className="contentbackgount">
                      <p>Animations</p>
                      <div className="line1"></div>
                    </div>
                  </div>
                  <div className="content-details fadeIn-bottom">
                    <div className="content-title">
                      <h3>Animations</h3>
                      <div className="line"></div>
                      <ul className="listiem">
                        <div className="comic">2D Short</div>
                        <div className="design">Motion Graphics</div>
                        <div className="vector">Explainer Video</div>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="content">
                <Link to="/art">
                  <div className="content-overlay"></div>
                  <div
                    className="content-image"
                    style={{ backgroundImage: "url(/img/214.jpg)" }}
                  >
                    <div className="contentbackgount">
                      <p>Illustrations</p>
                      <div className="line1"></div>
                    </div>
                  </div>
                  <div className="content-details fadeIn-bottom">
                    <div className="content-title">
                      <h3>Illustrations</h3>
                      <div className="line"></div>
                      <ul className="listiem">
                        <div className="comic" onClick={handleComic}>Comics</div>
                        <div className="design">Character Design</div>
                        <div className="vector">Vector Tracing</div>
                        <div className="cartoon">Cartoon Illustration</div>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="content">
                <Link to="/BrandDesign">
                  <div className="content-overlay"></div>
                  <div
                    className="content-image"
                    style={{ backgroundImage: "url(/img/brandm.jpg)" }}
                  >
                    <div className="contentbackgount">
                      <p>Brand Designs</p>
                      <div className="line1"></div>
                    </div>
                  </div>
                  <div className="content-details fadeIn-bottom">
                    <div className="content-title">
                      <h3>Brand Designs</h3>
                      <div className="line"></div>
                      <ul className="listiem">
                        <div className="comic">Product/Parkage Design</div>
                        <div className="design">Print Media</div>
                        <div className="vector">Social Media Banners</div>
                        <div className="cartoon">Logos/Business Branding</div>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceQuoteSection;
