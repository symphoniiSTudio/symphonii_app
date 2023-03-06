import React from "react";
import { Link } from "react-router-dom";
import "./OurServiceList.css";
function OurServiceList() {
  return (
    <div>
      <div className="ourservicelistcontainer">
        <div className="ourserviceitembody">
          <div className="ourserviceheader1">
            Everything we do is about you. Your ideas are our inspiration to
            innovation. We prioritize what you need to get on your way. We
            strive to create amazing works you would admire.
          </div>
          <div className="thelistitem">
            <Link to="/animation">
              <div
                className="serviceitem1"
                style={{ backgroundImage: "url(/img/s1.jpg)" }}
              >
                <div></div>
                <div className="sectehds">
                  <h3>Animations</h3>
                  <p>
                    Animation is a gradual process of discovery and refinement,
                    complicated and lengthy but very fulfilling and enjoyable at
                    Symphonii studios we engage with you throughout every
                    process to create animations of products, services,
                    character, stories etc. that you would love.
                  </p>
                  <input type="button" value="Read More" />
                </div>
              </div>
            </Link>
            <Link to="/art">
              <div
                className="serviceitem1"
                style={{ backgroundImage: "url(/img/s3.jpg)" }}
              >
                <div></div>
                <div className="sectehds">
                  <h3>Arts & Illustrations</h3>
                  <p>
                    From character design, book illustration, to comic book
                    style our artist creates everything possible keeping up with
                    the trends to your targeted audience. We walk you through
                    the story board, giving you an overall feel of the story
                    creation. We breathe your ideology and colors into reality
                    and make it stand out..
                  </p>
                  <input type="button" value="Read More" />
                </div>
              </div>
            </Link>

            <Link to="/BrandDesign">
              <div
                className="serviceitem1"
                style={{ backgroundImage: "url(/img/s2.jpg)" }}
              >
                <div></div>
                <div className="sectehds">
                  <h3>Brand Designs</h3>
                  <p>
                    We go all way out to create the brand identity that
                    perfectly reflects your brand and gives you an outstanding
                    brands personality.
                  </p>
                  <input type="button" value="Read More" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServiceList;
