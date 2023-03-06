import React from "react";
import "./BandDesign.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function BrandDesign1() {
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

            <div className="bannersectionanimation">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="/img/a1.jpg"
                    alt="First slide"
                    height="450"
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="/img/a1.jpg"
                    alt="First slide"
                    height="450"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/img/a1.jpg"
                    alt="First slide"
                    height="450"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="finallproduct">
              <h1>the Final Product</h1>
              <div className="productstagesample">
                <div className="setch">
                  <h4>Start</h4>
                  <img src="/img/a1.jpg" alt="" />
                </div>
                <div className="setch">
                  <h4>In Process</h4>
                  <img src="/img/a1.jpg" alt="" />
                </div>
                <div className="setch">
                  <h4>Finished</h4>
                  <img src="/img/a1.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="producttestimony">
              <div className="producttestimonybody">
                <h1> Client Feedback</h1>
                <div className="carryallfeedback">
                  <div className="textareatestimony">
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci, pariatur repellat vel blanditiis modi id rerum
                    earum, optio nulla omnis eligendi iure repellendus laborum
                    minus nesciunt officiis velit tempore nisi?"
                  </div>
                  <div className="textimagedetais">
                    <div className="imagetestside">
                      <img src="/img/myimg.jpeg" alt="" />
                    </div>
                    <div className="aboutimagesie">
                      CEO <span>Sabi man international</span> <br />
                      <span>Symphonii Studio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandDesign1;
