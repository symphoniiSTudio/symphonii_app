import React from 'react';
import { Link } from 'react-router-dom';
import './Dvert.css'
function Dvert() {
  return <div>
      <div className="advertment" style={{ backgroundImage: "url(/img/b3.png)" }}>
    <div className="advertbidy">
        {/* <Link to = "/product/index/symphonii/:uid" >
        <button className="getcustome">Create A Custom Request</button>
        </Link> */}

        <Link to = "/customize/request/symphonii" >
        <button className="getcustome">Create A Custom Request</button>
        </Link>
    </div>
      </div>
  </div>;
}

export default Dvert;
