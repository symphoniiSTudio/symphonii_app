import React, { useEffect, useState } from "react";
import { getnewUsers } from "../../Admin.service/GetUserData.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../../firebase";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../Admin.service/UserAuth";
import firebase from "firebase";
import "../../../App.css";
import { useHistory } from "react-router-dom";
import { getRandomString } from "../../Admin.service/GetUserData.service";
import Spiner from "../../Admin.service/Spiner";

function Randomcreate(props) {
  const history = useHistory();
  const { signup } = useAuth();
  const [olduser, setUser] = useState({});
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  

  useEffect(() => {
    const link = props.match.params.link;
    getnewUsers(link).then((newUsers) => {
      setloading(true);
      const newUser = newUsers[0];
      if (!newUser) {
        toast.error("link expired or used");
      } else {
        setUser(newUser);
        setloading(false);
      }
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const cred = await signup(olduser.Email, password);
      await cred.user
        .sendEmailVerification()
        .then((a) => console.log(a, "res"))
        .catch((e) => console.error(e, "err"));

        const {uid} = cred.user;
      const user = { 
        id:uid,
        creatore_Email:olduser.creatore_Email,
        creator_link: getRandomString(64),
        account: olduser.account,
        Staff_id : olduser.Staff_id,
        firstname: olduser.firstname,
        lastname: olduser.lastname,
        PhoneNumber: olduser.PhoneNumber,
        Email: olduser.Email,
        image: olduser.image,
        garrantor_phone: olduser.garrantor_phone,
        garrantor_image: olduser.garrantor_image,
        garrantor_id: olduser.garrantor_id,
        garrantor_email: olduser.garrantor_email,
        garrantor: olduser.garrantor,
        garranto_address: olduser.garranto_address,
        address: olduser.address,
        location: olduser.location,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        permissions: olduser.permissions,
      };
  
      await database.collection("users").doc(user.id).set(user);

      await database.collection("Newsusers").doc(olduser.id).delete();

      history.push("/check_user");
      toast.success("Great Job");
    } catch (e) {
      toast.error(e.message);
    }

    
  }

  if (!olduser){
    return loading ? (<div className="text-center"> <Spiner/> </div>) : (<div></div>)
   }
  return (
    <>

      <div className="p-4 w-75 m-auto">
        <ToastContainer position="top-center" />

        {!loading && (
          <div>
            <div className="headeralll">
              <img src="/img/Logo.png" alt="" />
            </div>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4 w-75">
                  <div className="registerheader">
                    <h4>Let’s get you started!</h4>
                  </div>
                </h2>
                <Form onSubmit={handleSubmit}>
                  <fieldset className="formset">
                    <input
                      placeholder="enter password"
                      className="w-100"
                      type="password"
                      required
                      onChange={(event) => {
                        setpassword(event.target.value);
                      }}
                    />
                  </fieldset>
                  <Button className="w-100 bg-success" type="submit" disabled={loading}>
                    Create Account
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        )}
      
      </div>
    </>
  );
}

export default Randomcreate;
