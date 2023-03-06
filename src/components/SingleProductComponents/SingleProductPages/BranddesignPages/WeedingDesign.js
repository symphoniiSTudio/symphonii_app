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
          style={{ backgroundImage: "url(/img/DWD3.png)" }}
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
                src="/img/WD 1.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 2.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 3.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 4.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 5.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 6.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 7.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 8.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/WD 9.jpg"
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
        </div>
    )
}

export default Logo2
