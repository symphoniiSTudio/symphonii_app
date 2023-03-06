import React from "react";
import "./AllServiceItem.css";
import AnimationPagenation from "./AnimationPagenation";
import Footer from "../Footer";
import { useHistory } from "react-router";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllServiceItem() {
  let history = useHistory();

  function handleChange(value) {
    history.push(`/services${value}`);
  }

  return (
    <div>
      <div className="serviceitemheader">
        <div className="sheaderitem">
          <Link to="/services/all ">
            <div className="All" >All</div>
          </Link>
          <div className="Aniimation">Animation</div>
          <Link to="/services/illustration">
            <div
              className="Illustration"
              style={{ color: "white", border: "1px solid red" }}
            >
              Illustration
            </div>
          </Link>
          <div className="BrandDesign">Brand Design</div>
        </div>
        <div className="filteritem">
          <select onChange={(event) => handleChange(event.target.value)}>
            <option>Select your preferred Services?</option>
            <option value="/all">All </option>
            <option value="/animation">Animation</option>
            <option value="/illustration">Illustration</option>
            <option value="north">Brand Design</option>
          </select>
        </div>

        <div className="ServiceBody">
          <AnimationPagenation/>
        </div>

        <div className="ourprocessdiv">
          <div className="ourprocessconatiner">
            <div className="ourserviceheader">Our process</div>
            <div className="ourprocessmain">
              <div className="ourbrief">
                <h1>Brief</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci consectetur quia explicabo provident. Fugit quia
                  asperiores, sed impedit voluptate exercitationem aperiam
                  debitis a eos ipsum quasi molestias corrupti. Reprehenderit,
                  dolores.
                </p>
              </div>
              <div className="ourconcept">
                <h1>concept</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci consectetur quia explicabo provident. Fugit quia
                  asperiores, sed impedit voluptate exercitationem aperiam
                  debitis a eos ipsum quasi molestias corrupti. Reprehenderit,
                  dolores.
                </p>
              </div>
              <div className="oursolution">
                <h1>solution</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci consectetur quia explicabo provident. Fugit quia
                  asperiores, sed impedit voluptate exercitationem aperiam
                  debitis a eos ipsum quasi molestias corrupti. Reprehenderit,
                  dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonysection">
        <div className="testimonycontainer">
          <div className="testimonyitems">
            <Carousel>
              <Carousel.Item>
                <div className="testcourasel">
                  <div className="couraselimage">
                    <img src="/img/i1.jpg" alt="" />
                  </div>
                  <div className="couraselcontent">
                    <div className="nametext">enter name here</div>
                    <div className="testicommet">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi ducimus corporis aliquam maxime odio maiores
                      doloribus molestiae repellendus velit hic. Fugit quibusdam
                      voluptate, ex officiis fuga mollitia iste minima
                      similique?
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testcourasel">
                  <div className="couraselimage">
                    <img src="/img/i1.jpg" alt="" />
                  </div>
                  <div className="couraselcontent">
                    <div className="nametext">enter name here</div>
                    <div className="testicommet">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi ducimus corporis aliquam maxime odio maiores
                      doloribus molestiae repellendus velit hic. Fugit quibusdam
                      voluptate, ex officiis fuga mollitia iste minima
                      similique?
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testcourasel">
                  <div className="couraselimage">
                    <img src="/img/i1.jpg" alt="" />
                  </div>
                  <div className="couraselcontent">
                    <div className="nametext">enter name here</div>
                    <div className="testicommet">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi ducimus corporis aliquam maxime odio maiores
                      doloribus molestiae repellendus velit hic. Fugit quibusdam
                      voluptate, ex officiis fuga mollitia iste minima
                      similique?
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="footersectionservice">
        <Footer />
      </div>
    </div>
  );
}

export default AllServiceItem;
