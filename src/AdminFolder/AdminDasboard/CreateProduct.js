import React, { useState, useEffect } from "react";
import { MdAnimation } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { RiBubbleChartLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import DasboardHeader from "./DasboardHeader";
import "./CreateProduct.css";
import { useAuth } from "../Admin.service/UserAuth";
import { database } from "../../firebase";

function CreateProduct() {
  const { uid } = useAuth().currentUser;
  const ref = database.doc(`users/${uid}`);
  const [message, setmessage] =  useState('')
  const [userinfo, setuserinfo] = useState({});
  const [toggle, settoggle] =  useState(false)
  const history = useHistory();


  const getUser = () => {
    ref.onSnapshot((doc) => {
      const user = doc.data();
      user.id = doc.id;
      setuserinfo(user);
    });

     if (userinfo.permissions !== "admin"){
       if (toggle){
        settoggle(true)
         setmessage('permission Error')
       }
    
  }
  settoggle(false)
  };
  useEffect(() => {
    getUser();
  }, []);

  const routeToAnimation = () => {
    history.push("/p1/animation/product");
  };
  const routeToIllustration = () => {
    history.push("/createnew/service");
  };
  const routeToDesign = () => {
    history.push("/p2/BrandDesign/product");
  };
 
  return (
    <div>
      <DasboardHeader />
      <div className="creamain">
        <div className="dds">
          <div className="headerproduct">select product type</div>
          <div className="cratbody">
            <div className="ani-enu" onClick={routeToAnimation}>
              <span>
                <MdAnimation />
              </span>
              <p>Animations</p>
            </div>
            <div className="ani-enu" onClick={routeToIllustration}> 
              <span>
                <BiVideo />
              </span>
              <p> Art & Illustrations</p>
            </div>
            <div className="ani-enu" onClick={routeToDesign}>
              <span>
                <RiBubbleChartLine />
              </span>
              <p>Brand Designs</p>
            </div>
          </div>
        </div>
      </div>
      <div  className={toggle ? "show" : "hide"}>
        {message}
      </div>
    </div>
  );
}

export default CreateProduct;
