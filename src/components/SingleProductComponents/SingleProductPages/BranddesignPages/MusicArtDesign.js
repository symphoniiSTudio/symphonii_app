import React from 'react'
import  PortfolioNavbar from '../../../Portfolio/PortfolioComponents/PortfolioNavbar'
import '../../../OurServices/OurServiceBanner.css'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

function Logo2() {
    return (
        <div>
            <PortfolioNavbar/>
            <div>
      <div className="bannersection11">
        <div
          className="bannercontainer111"
          style={{ backgroundImage: "url(/img/DMCA3.png)" }}
        >
          <div className="bd11">
            </div>
          </div>
        </div>
       
      </div>
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
                src="/img/MC 1.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/MC 2.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/MC 3.jpg"
                alt="First slide"
                height="550"
              />
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
        <div className="iconlistedica">
          <Link to="/portfolio" style={{ color: "white" }}>
            <BiArrowBack /> Back to Portforlio
          </Link>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Logo2
