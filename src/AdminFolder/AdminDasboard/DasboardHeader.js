import React, { useState, useEffect } from "react"
import { useAuth } from "../Admin.service/UserAuth";
import { database } from "../../firebase";
import './DasboardHeader.css'
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLogin } from "react-icons/ai";


function DasboardHeader() {
    const { uid } = useAuth().currentUser;
    const ref = database.doc(`users/${uid}`);
    const [userinfo, setuserinfo] = useState({});
    const { logout } = useAuth();
    const history = useHistory();
  
    async function handlelogout() {
      try {
        await logout();
        toast.success("We Miss You");
        history.push("/login");
      } catch (e) {
        toast.error(e.message);
      }
    }
  
    const getUser = () => {
      ref.onSnapshot((doc) => {
        const user = doc.data();
        user.id = doc.id;
        setuserinfo(user);
      });
    };
    useEffect(() => {
      getUser();
    }, []);
  
    return (
        <div>
            <ToastContainer position="top-center" />
      <div className="contolermain">
        <div className="comtroerparnen">
          <div className="admininfp">
            <div className="imagesidenew">
            <div className="logoside1">
                <img src="/img/f.png" alt=""/>
              </div>          
            </div>
          </div>
         
          <div className="adminimage">
            <div className="namede">
              <img src={userinfo.image} alt="" />
            </div>
            <div className="sn">{userinfo.firstname} {userinfo.lastname} <br /></div>
            <div className="items11">
              <button onClick={handlelogout}>
                <AiOutlineLogin />
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default DasboardHeader
