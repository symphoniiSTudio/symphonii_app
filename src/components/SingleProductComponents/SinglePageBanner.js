import React from "react";
import './SingleBanner.css'

function SinglePageBanner() {
  return (
    <div>
      <div>
        <div className="bannersection">
          <div
            className="bannercontainer"
            style={{ backgroundImage: "url(/img/LLD.jpg)" }}
          >
            <div className="bd">
              <div className="bannermain"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePageBanner;
