import React from 'react'
import  PortfolioNavbar from '../../../Portfolio/PortfolioComponents/PortfolioNavbar'
import '../../../OurServices/OurServiceBanner.css'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Footer from '../../../Footer'

function Logo2() {
    return (
        <div>
            <PortfolioNavbar/>
            <div>
      <div className="bannersection11">
        <div
          className="bannercontainer111"
          style={{ backgroundImage: "url(/img/DFL3.png)" }}
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
                src="/img/FL 1.jpg"
                alt="First slide"
                height="550"
              />
             </div>

             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 2.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 4.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 5.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 6.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 7.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 8.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 9.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 10.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 11.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 12.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 13.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 14.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 15.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 16.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 17.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL 18.jpg"
                alt="First slide"
                height="550"
              />
             </div>
             <div className="showiage">
             <img
                className="d-block w-100"
                src="/img/FL3.jpg"
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

    <Footer/>
        </div>
    )
}

export default Logo2
