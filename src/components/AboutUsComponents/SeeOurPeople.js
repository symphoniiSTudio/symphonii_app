import React from "react";
import KingsleyProfile from "./staffprofile/KingsleyProfile";
import './SeeOurPeople.css'

function SeeOurPeople() {
  return (
    <div>
      <div className="staffcontainer">
        <div className="staffcontent">
          <div className="staffbody111">
            <div className="staffheader">
              <h1> See our People</h1>
             </div>
            <div className="stavecarry1">
              <div className="staffitems1">
                <KingsleyProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeOurPeople;
