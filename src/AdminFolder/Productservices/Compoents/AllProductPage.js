import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/HomeNavbarmain";
import "./AllProductPage.css";


function AllProductPage() {
    const history = useHistory ()

    const AnimationRouteHander = () =>{
       history.push("/product/index/symphonii/:uid")
    }
    const iLLustrationRouteHander = () =>{
        history.push("/product/index/symphonii/:uid")
     }
     const BrandDesignRouteHander = () =>{
        history.push("/product/index/symphonii/:uid")
     }
     




  return (
    <div>
      <Navbar />
      <div className="appAprent">
        <div className="conatr">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aperiam
          aspernatur id, necessitatibus alias dolores? Fugiat ipsum aperiam id,
          quam impedit ad cumque enim eligendi quas ipsa eveniet, asperiores
          voluptates!X
        </div>
        <div className="appchild">
          <div
            className="childitem"
            style={{ backgroundImage: "url(/img/b3.png)" }}
          >
            <div className="childist">
              <span>Animations</span>
              <br />
              <button onClick={AnimationRouteHander}>Make Request</button>
            </div>
          </div>
          <div
            className="childitem"
            style={{ backgroundImage: "url(/img/b3.png)" }}
          >
            <div className="childist">
              <span>Art & Illustration</span>
              <br />
              <button onClick={iLLustrationRouteHander}>Make Request</button>
            </div>
          </div>
          <div
            className="childitem"
            style={{ backgroundImage: "url(/img/b3.png)" }}
          >
            <div className="childist">
              <span>Brand Design</span>
              <br />
              <button onClick={BrandDesignRouteHander}>Make Request</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProductPage;
