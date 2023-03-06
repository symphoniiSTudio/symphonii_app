import React, { useRef, useState } from "react";
import firebase from "firebase";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../Admin.service/UserAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../../firebase";
import { Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import HomeNavbar from '../../../components/HomeNavbarmain'
import "./User.css";
import axios from "axios"
import { getRandomString } from "../../Admin.service/UserData.service";

export default function Signup1() {
  const nameRef = useRef();
  const firstnameRef = useRef();
  const phoneRef = useRef();
  const [password, setpassword] = useState("")
  const [confirmpassord, setconfirmPassword] = useState("")
  const [email , setemail] =  useState("")
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const [message, setmessage] =useState("")
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const baseURL = "https://us-central1-app-symphoniistudios.cloudfunctions.net/Adduser"

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return toast.error("Passwords do not match");
  //   }

  //   if (!nameRef || !firstnameRef || !phoneRef || !emailRef || !passwordRef) {
  //     toast.error("Please provide value in each input field");
  //   }
  //   axios.post(baseURL, { email : emailRef.current.value, passord: passwordRef.current.value })
  //   .then( async (response)=>{
  //     const res = response.data;
  //     console.log(res)
  //     try {
  //       setError("");
  //       setLoading(true);
  //       //send email
  //       toast.success("success");
  //       const id = res.uid;
  
  //       const user = {
  //         id: id,
  //         account: getRandomString(10, "1234567890"),
  //         firstname: nameRef.current.value,
  //         lastname: firstnameRef.current.value,
  //         PhoneNumber: phoneRef.current.value,
  //         Email: emailRef.current.value,
  //         image:"/img/f.png",
  //         created: firebase.firestore.FieldValue.serverTimestamp(),
  //         permissions:'user',
  //         Wallet: 0,
  //         Purchase: 0,
  //         cartNO:0
  //       };
  //       await database.collection("users").doc(user.id).set(user);
  //       history.push("/check");
  //     } catch (e) {
  //       console.log(e);
  //       toast.error(e.message);
  //     }
  //   })
  //   setLoading(false);
  // }

  async function handleSubmit(e) {
    e.preventDefault();
  if (password !== confirmpassord){
    setError("passord Mismatch, retry")
  }
      axios
      .post(baseURL, {email: email, password: password })
      .then( async (response) => {
        const res = response.data;  
        console.log(res)
        try {
          const id = res.uid;
          const user = {
            id: id,
            account: getRandomString(10, "1234567890"),
            firstname: nameRef.current.value,
            lastname: firstnameRef.current.value,
            PhoneNumber: phoneRef.current.value,
            Email: email,
            image: "/img/user.png",
            created: firebase.firestore.FieldValue.serverTimestamp(),
            permissions: "user",
            TranNo: 0,
            mainwallet: 0,
            cart:0,
            cartID: getRandomString(8, "123ABCDEFGHIGKLMNOPQRST90"),
            Task:false,
            Restriction: false,
            default : password,
          };
          database.doc(`users/${id}`).set(user);
          setmessage(`Great Job, user ${password} as your one time default password`)
          history.push("/login")
        } catch (e) {
          setError(e.message);
          
        }
        setLoading(false);
      });
  }

  return (
    <>
    <HomeNavbar/>
      <ToastContainer position="top-center" />
      <div className="reactmain">
        <div className="regboy">
          <div className="regsection">
            <div className=" mainusers1">
              <div className="maingss">
                <Card>
                  <Card.Body>
                    <h2 className="text-center mb-4">
                      <div className="registerheader">
                       
                        <h4>Create Account</h4>
                        <p>Join us today!</p>
                      </div>
                    </h2>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={firstnameRef} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" ref={phoneRef} />
                      </Form.Group>
                      <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group id="email">
                  <Form.Label>confirm passord</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => {
                      setconfirmPassword(event.target.value);
                    }}
                  />
                </Form.Group>
                      <Button
                        disabled={loading}
                        className="w-100 bg-success"
                        type="submit"
                      >
                        Create your Account
                      </Button>
                    </Form>
                    {error && <Alert variant="danger">{error}</Alert>}
                  </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                  Already have an account? <Link to="/login">Log In</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="imagesection">
            <img src="/img/newp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
