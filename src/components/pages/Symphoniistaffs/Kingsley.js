import React from "react";
import { Link } from "react-router-dom";
import "../../../components/Staffcomponent.css";
import {AiOutlineClose} from 'react-icons/ai'

function Kingsley() {
  return (
    <div>
      <div className="staffnave">
        <div className="staffnavecontainer">
          <div className="navstaffconten">
            <Link to="/about">
              <div className="staffcloseicon">
               <AiOutlineClose/>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="staffinfo">
       <div className="staffdetaind">
       <div className="infodetails">
          <div className="staffimage111">
            <img src="/img/myimg2.jpeg" alt="" />
          </div>
          <div className="staffbio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores
              eum rerum laborum eius adipisci reiciendis quisquam hic
              voluptatum, unde aperiam similique esse, nisi quidem quos
              laudantium cumque quod vel.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              sunt aperiam neque magnam, consequatur cupiditate adipisci amet
              libero, perferendis totam repudiandae voluptas, quidem provident
              doloremque iusto. Voluptatem enim soluta aperiam?
            </p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Kingsley;
