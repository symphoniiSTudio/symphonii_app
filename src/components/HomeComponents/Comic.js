import React from 'react';
import { Link } from 'react-router-dom';
import './Dvert.css'
function Dvert() {
  return <div>
      <div className="advertment" style={{ backgroundImage: "url(/img/b1.png)" }}>
    <div className="advertbidy">
        <Link to = "/comic/symphoni/index" >
        <button className="getcustome">Our Comic</button>
        </Link>
    </div>
      </div>
  </div>;
}

export default Dvert;
