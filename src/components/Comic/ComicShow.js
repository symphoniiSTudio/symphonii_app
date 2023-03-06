import React from "react";
import { Link } from "react-router-dom";
import "../AboutUsComponents/staffprofile/Profileclass.css";

function ComicShow() {
  return (
    <>
      <div className="ourbodymain1">
        <div className="c">
          <div className="discomicImage">
           <Link to='/slapofice/symphoni/index'>
           <div className="disimagecomic" >
             <img src="/img/comic3.jpg" alt="/img/comic3.jpg" />
             <div className="pourselfd1">
             <strong>SlapStick Office</strong> <br/>
               This series captures the everyday misadventures of two young corporate office workers  
             </div>  
            </div>
           </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default ComicShow;

