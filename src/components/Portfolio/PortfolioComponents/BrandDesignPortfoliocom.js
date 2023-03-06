import React from "react";
import "./Allportfolio.css";
import BrandDesignPagenation from "../PagenationComponents/BranDesignPagenation";
import Footer from "../../Footer";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Allportfolio() {
  let history = useHistory();

  function handleChange(value) {
    history.push(`${value}`);
  }
  return (
    <div>
      <div className="serviceitemheader">
        <div className="sheaderitem">
          <Link to="/portfolio">
            <div className="All">All</div>
          </Link>
          <Link to="/animation_portfolio">
            <div
              className="Aniimation"
              
            >
              Animation
            </div>
          </Link>
          <Link to="/illustration">
            <div className="Illustration">Illustration</div>
          </Link>
          <Link to='/brand_design_portfolio'>
          <div className="BrandDesign" style={{ color: "white", border: "1px solid red" }}>Brand Design</div>
          </Link>
        </div>

        <div className="filteritem">
          <select onChange={(event) => handleChange(event.target.value)}>
          <option value="/brand_design_portfolio">Brand Design</option>
            <option value="/portfolio">All </option>
            <option value="/animation_portfolio">Animation</option>
            <option value="/illustration">Illustration</option>
            
          </select>
        </div>

        <div className="ServiceBody">
          <BrandDesignPagenation/>
        </div>
        {/* 
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
        </div> */}
      </div>

      <div className="footersectionservice">
        <Footer />
      </div>
    </div>
  );
}

export default Allportfolio;
