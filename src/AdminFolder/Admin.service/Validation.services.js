import React, { useEffect, useState } from "react";
import { useAuth } from "./UserAuth";
import { database } from "../../firebase";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Spiner from "./Spiner";
import './Validation.css'

function Validation() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState([]);
  const [message, setmessage] = useState('')
  const { uid, emailVerified } = useAuth().currentUser;

  const history = useHistory();

  const getUser = async () => {
    try {
      const documentSnapshot = await database
        .collection("users")
        .doc(uid)
        .get();
      const userData = documentSnapshot.data();

      // checking user permission

      if (emailVerified && userData.permissions === "user") {
        history.push(`/product/index/symphonii/${uid}`);
        return;
      }
      if (emailVerified && userData.permissions === 'admin') {
        history.push(`/admin/auth_user/${uid}`);
        return;
      }

      // if (emailVerified && userData.permissions === "superAdmin") {
      //   history.push(`/admin_auth/super/${uid}`);
      //   return;
      // }

      if (emailVerified && userData.permissions === "Content_Admin") {
        history.push(`/admin/auth_user/${uid}`);
        return;
      }

      if (emailVerified) {
        history.push(`/product/index/symphonii/${uid}`);
        return;
      }

      setUser(userData);
    } catch (e) {
      setmessage(e.message);
    }
  };

  
const resetLink = async (e) =>{
  firebase.auth().currentUser.reload() // reloads user fields, like emailVerified:
if (!firebase.auth().currentUser.emailVerified) {
    //resend verification email
    await currentUser.sendEmailVerification()
  .then((a) => e.message)
  .catch((e) => e.message);
  setmessage('Activation Link sent');
} else {
     history.push('/login')
} 
}
  

  // Get user on mount
  useEffect(() => {
    getUser();
  }, []);

  return !user ? (
    <div>
      <Spiner />
    </div>
  ) : (
    <div>
      <div className="welcome1">
        <div className="welcomeman">
          <div className="indv">
            <img src="/img/email.png" alt="" />
          </div>
          Welcome <strong></strong> {currentUser.email}
          <div className="welcomegrand">
            <div className="welcomeparent">
              <div className="welcomechil">
                Your Account need To be Verified; <br />
                Please click on the link sent to your Email to verify your
                account with Symhonii Studios 
              </div>{" "}

              <br />
              <><div className="btn bg-success" onClick={resetLink}>  Send Link</div></> <br/>
             <p> {message}</p>
              <p>If you didnt perform this operation please Contact us </p>{" "}
              <span>
                <Link to="/contact">Support</Link>
              </span>{" "}
              <br />
              <Link to="/services">Check Services</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;
