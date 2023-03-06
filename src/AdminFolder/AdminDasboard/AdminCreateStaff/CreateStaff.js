import React, { useRef, useState, useEffect } from "react";
import { database } from "../../../firebase";
import { useAuth } from "../../Admin.service/UserAuth";
import { storage } from "../../../firebase";
import axios from 'axios'
import firebase from "firebase";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { getRandomString } from "../../Admin.service/GetUserData.service";
import { ToastContainer, toast } from "react-toastify";
import DashboardHeader from '../DasboardHeader'
import "../../../App.css";
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from 'react-router-dom'

const baseURL = "https://us-central1-app-symphoniistudios.cloudfunctions.net/AddOfficer";
function AdminCreatUser() {
 const nameRef = useRef();
  const firstnameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const garrantorRef = useRef();
  const garrantorPhoneRef = useRef();
  const garrantorEmailRef = useRef();
  const garrantorAddressRef = useRef();
  const [image, setimage] = useState(null);
  const history = useHistory()
 const [email, setemail] = useState('')
 const [password , setpassword] = useState('')
  const { currentUser } = useAuth();
  const  uid  = useAuth().currentUser;
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState("");
  const [gId, setgId] = useState(null);
  const [gimage, setgimage] = useState(null);
  // const [userinfo, setuserinfo] = useState({});
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState("");
  const [location, setLoation] = useState('')


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);  
    }
  };

  const handleChange1 = (e) => {
    if (e.target.files[0]) {
      setgimage(e.target.files[0]);
    }
  };
  const handleChange2 = (e) => {
    if (e.target.files[0]) {
      setgId(e.target.files[0]);
    }
  };


  function handleUploadGID() {
    return new Promise((resolve) => {
      const uploadTask = storage.ref(`staffDoc/${gId.name}`).put(gId);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("staffDoc")
            .child(gId.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  }

  function handleUploadGImage() {
    return new Promise((resolve) => {
      const uploadTask = storage
        .ref(`staffDoc/${gimage.name}`)
        .put(gimage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("staffDoc")
            .child(gimage.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  }

  function handleUpload() {
    return new Promise((resolve) => {
      const uploadTask = storage.ref(`staffDoc/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("staffDoc")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  }

  async function handlecreatuser(e) {
    e.preventDefault();
  const  password =  "symhonii"
  setpassword(password)
    axios
      .post(baseURL, {email: email, password: password })
      .then( async (response) => {
        const res = response.data; 
        console.log(res)
    if (
      !nameRef ||
      !firstnameRef ||
      !phoneRef ||
      !email ||
      !password ||
      !image ||
      !addressRef ||
      !garrantorRef ||
      !gId ||
      !gimage ||
      !garrantorEmailRef ||
      !location
    ) {
      toast.error("Please provide value in each input field");
    }

    try {
      setLoading(true);
      const image = await handleUpload();
      const garrantor_image = await handleUploadGImage();
      const garrantor_Id = await handleUploadGID();
      const id = res.uid;
      const user = {
        creator_id: currentUser.uid,
        id: id,
        creatore_Email: currentUser.email,
        creator_link: getRandomString(64),
        account: getRandomString(10, "1234567890"),
        Staff_id: getRandomString(8, "123ABC7890"),
        firstname: nameRef.current.value,
        lastname: firstnameRef.current.value,
        address: addressRef.current.value,
        garrantor: garrantorRef.current.value,
        garrantor_email: garrantorEmailRef.current.value,
        garrantor_image: garrantor_image,
        garrantor_id: garrantor_Id,
        garrantor_phone: garrantorPhoneRef.current.value,
        garranto_address: garrantorAddressRef.current.value,
        PhoneNumber: phoneRef.current.value,
        Email: email,
        image: image,
        location:location,
        permissions: type,
      };

      const promisses = [
      database.doc(`users/${id}`).set(user),
     ]
     await Promise.all(promisses)
    setmessage(`Great Job, user ${password} as your one time default password`)

    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
    setLoading(false);

  });
  }
 return (
    <div>
      <div className=" mainusers1">
         <DashboardHeader/>
        <div className="maingss">
        <div className=" cot">
          <ToastContainer position="bottom-left" />
          <div className="noticificqt">
            {message && (
              <Alert variant="success">
                <div className="header  text-white">user Created Successfully</div>
                New Staff default password {password}
              </Alert>
            )}
            {/* 
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
          </div>
          <Card>
            <div className="contenst">
              <Card.Body>
                <h2 className="text-center mb-4">
                  <div className="registerheader">
                    <h4>Create New Staff!</h4>
                  </div>
                </h2>
                <Form onSubmit={handlecreatuser}>
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
                    <Form.Control type="email"  onChange={(e) => {
                        setemail(e.target.value);
                      }}/>
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Contact Address</Form.Label>
                    <Form.Control type="text" ref={addressRef} />
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Upload Passport</Form.Label>
                    <Form.Control type="file" onChange={handleChange} />
                  </Form.Group>

                  <p>Garrantor Information</p>

                  <Form.Group id="email">
                    <Form.Label>Enter Garrantor Full Name</Form.Label>
                    <Form.Control type="text" ref={garrantorRef} />
                  </Form.Group>

                  <Form.Group id="email">
                    <Form.Label>Enter Garrantor Address</Form.Label>
                    <Form.Control type="text" ref={garrantorAddressRef} />
                  </Form.Group>

                  <Form.Group id="email">
                    <Form.Label>Enter Garrantor Email</Form.Label>
                    <Form.Control type="email" ref={garrantorEmailRef} />
                  </Form.Group>

                  <Form.Group id="email">
                    <Form.Label>Garrantor Phone Number</Form.Label>
                    <Form.Control type="tel" ref={garrantorPhoneRef} />
                  </Form.Group>

                  <Form.Group id="email">
                    <Form.Label>Garrantor Passport</Form.Label>
                    <Form.Control type="file" onChange={handleChange1} />
                  </Form.Group>

                  <Form.Group id="email">
                    <Form.Label>Garrantor id</Form.Label>
                    <Form.Control type="file" onChange={handleChange2} />
                  </Form.Group>

                  <p>Possition</p>
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>Select Staff Role</Form.Label>
                    <Form.Control
                      as="select"
                      value={type}
                      onChange={(e) => {
                        console.log("e.target.value", e.target.value);
                        setType(e.target.value);
                      }}
                    >
                      <option value="default">select staff role</option>
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                      <option value="Content_Admin">Content_Admin</option>
                      <option value="superAdmin">superAdmin</option>
                     
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>Select Staff Location</Form.Label>
                    <Form.Control
                      as="select"
                      value={location}
                      onChange={(e) => {
                        setLoation(e.target.value);
                      }}
                    >
                      <option value="default">select staff location</option>
                      <option value="Kubwa">Branch1</option>
                      <option value="Kubwa2">Branch2</option>
                    </Form.Control>
                  </Form.Group>

                  <p>
                    <strong>Affirmation:</strong>
                    <br />
                    <span>
                      i  have verify
                      that the information provided by the new staff is true and
                      correct. and i am carrying out this operation without any
                      pressure or oppression
                    </span>
                  </p>
                  <Button
                    disabled={loading} 
                    className="w-100 bg-danger"
                    type="submit"
                  >
                    Proceed ..
                  </Button>

                 
                </Form>
              </Card.Body>
              <Button
                    onClick={history.goBack}
                    className="w-100 bg-secondary"
                    type="submit"
                  >
                    back ..
                  </Button>
            </div>
          </Card>
        
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCreatUser;
