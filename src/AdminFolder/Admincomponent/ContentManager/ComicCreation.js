import React, { useRef, useState, useEffect } from "react";
import firebase from "firebase";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../Admin.service/UserAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database, storage } from "../../../firebase";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import DashboardHeader from "../../AdminDasboard/DasboardHeader";
import "./ComicCreation.css";
import { getRandomString } from "../../Admin.service/UserData.service";

export default function ComicCreation() {
  const title = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setimage] = useState(null);
  const [coverimage, setcoverimage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setmessage] = useState('')
  const history = useHistory();
  const [user, setUser] = useState([]);
  const { uid, emailVerified } = useAuth().currentUser;


  const getUser = async () => {
    try {
      const documentSnapshot = await database
        .collection("users")
        .doc(uid)
        .get();
      const userData = documentSnapshot.data();

      if (emailVerified && userData.permissions !== "Content_Admin") {
        history.push(`/admin/auth_user/${uid}`);
        return;
      }

      setUser(userData)
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

const handleImage  = (e) =>{
  if (e.target.files[0]) {
    setcoverimage(e.target.files[0]);
  }
}
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
    }
   
  };
  function handleUpload() {
    return new Promise((resolve) => {
      const uploadTask = storage.ref(`comic/${image.name}`).put(image);
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
            .ref("comic")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  }
  function handleOver() {
    return new Promise((resolve) => {
      const uploadTask = storage.ref(`comic/${coverimage.name}`).put(coverimage);
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
            .ref("comic")
            .child(coverimage.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const image = await handleUpload();
      const coverImage = await handleOver();
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );
      const users = {
        id: id,
        Ref: id,
        image: image,
        Title: title.current.value,
        coverImage: coverImage,
        Posted_by: user.firstname,
        PostedIMG: user.image,
        creator_link: getRandomString(64),
        like: 0,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database.collection("Comic").doc(users.id).set(users);
      toast.success("comic created: Please wait...");
      const link = `https://symphoniistudios.com/new-user/${users.creator_link}`;
      setmessage(link);
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
    setimage(null)
    setcoverimage(null)
    
    setLoading(false);
  
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;

  return (
    <>
      <DashboardHeader />        
      <div className="reactmain">
        <div className="regboy1">
         <div className={message  ? "messaesss" : 'hide' }   >
         <span>{message}</span>
         </div>
          <div className="regsection">
            <div className="mainusers">
              <div className="maingss">
                <Card>
                  <Card.Body>
                    <h2 className="text-center mb-4">
                      <div className="registerheader">
                        <img src="/img/f.png" alt="" />
                        <h4>Create Comic</h4>
                      </div>
                    </h2>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref={title} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Cover Image</Form.Label>
                        <Form.Control type="file" onChange={handleChange} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={handleImage} />
                      </Form.Group>
                      <Button
                        disabled={loading}
                        className="w-100 bg-success"
                        type="submit"
                      >
                        Create Comic
                      </Button>
                    </Form>
                    {error && <Alert variant="danger">{error}</Alert>}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
