import React from "react";
import "./Introduction.css";
import { Link } from "react-router-dom";

function IntroductionComponent() {
  return (
    <div>
      <div className="intromain">
        <div className="introcontainer">
          <div className="introbody">
            <div className="intodetails">
              
              <div className="introtitle">
                <h1>Welcome</h1>
              </div>
              <p>
                Symphonii is a visual creative studio that thrives in the areas
                of Animations, Brand designs, Arts and Illustrations. From
                household names to disruptive startups, we create for a wide
                range of awesome brands.
                <br /> <br />
                Our studio is made up of a team of passionate, committed and
                extremely talented artists, animators, designers and developers.
                Our creatives understand the importance of professionalism,
                excellence in service delivery and keen detailing which are our
                core values and would not take any part of your project for
                granted.
                <br /> <br />
                We are here to help your ideas become a reality and thrive.
                <br />
                Our process is quite simple: Define, Design and Deliver.
              </p>

              <Link to="/about" className="btn-danger p-3 aaaa">
                Read More..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionComponent;
