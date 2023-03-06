import React, { useRef, useState, useEffect } from "react";
import { database } from "../../firebase";
import { useAuth } from "../Admin.service/UserAuth";
import { storage } from "../../firebase";
import axios from "axios";
import firebase from "firebase";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { getRandomString } from "../Admin.service/GetUserData.service";
import { ToastContainer, toast } from "react-toastify";
import DashboardHeader from "./DasboardHeader";
import "../../App.css";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";


const baseURL =
  "https://us-central1-app-symphoniistudios.cloudfunctions.net/addservices";

function CreateIllustration() {
  const CartoonStyleRef = useRef();
  const noOfPannelRef = useRef();
  const coverDesignRef = useRef();
  const characterDesignRef = useRef();
  const TextLayoutRef = useRef();
  const noofCharacterRef = useRef();
  const enviromentRef = useRef();
  const revisionRef = useRef();
  const storyDurationRed = useRef()

  const charactersRef = useRef();
  const proportionFullBodyRef = useRef();
  const proportionPortraitRef = useRef();
  const proportionHeadshotRef = useRef();
  const cellshadeRef = useRef();
  const RealisticRef = useRef();
  const LineArtRef = useRef();
  const RevisionsRef = useRef();
  const deliveryDurationRef = useRef();
  const noOfConceptDesignRef = useRef();

  //Product Illustration

  const NoOfConceptRef = useRef();
  const NoofRevissions = useRef();
  const DurationDeliveryRef = useRef();
  const NoofProductRef = useRef();
  const noofLogoRef = useRef();

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState("");
  const [type, setType] = useState("");

  async function createServices(e)  {
    e.preventDefault();

    if (type === "Story Illustration") {
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );

      const data = {
        id: id,
        CartoonStyleRef:parseFloat(CartoonStyleRef.current.value),
        noOfPannelRef: parseFloat(noOfPannelRef.current.value),
        coverDesign: parseFloat(coverDesignRef.current.value),
        characterDesignRef: parseFloat(characterDesignRef.current.value),
        TextLayoutRef: parseFloat(TextLayoutRef.current.value),
        noofCharacterRef:parseFloat(noofCharacterRef.current.value),
        enviromentRef: parseFloat(enviromentRef.current.value),
        revisionRef: parseFloat(revisionRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database
        .doc(`Service/Illustration/StoryIllustration/${id}`)
        .set(data)
        .then(() => {
          setmessage(`Story Illustration created with id ${id}`);
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    if (type === "Character Design") {
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );

      const data = {
        id: id,
        charactersRef: parseFloat(charactersRef.current.value),
        proportionFullBodyRef: parseFloat(proportionFullBodyRef.current.value),
        proportionPortraitRef:parseFloat( proportionPortraitRef.current.value),
        proportionHeadshotRef: parseFloat(proportionHeadshotRef.current.value),
        cellshadeRef: parseFloat(cellshadeRef.current.value),
        RealisticRef: parseFloat(RealisticRef.current.value),
        LineArtRef: parseFloat(LineArtRef.current.value),
        RevisionsRef: parseFloat(RevisionsRef.current.value),
        deliveryDurationRef: parseFloat(deliveryDurationRef.current.value),
        noOfConceptDesignRef: parseFloat(noOfConceptDesignRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database
        .doc(`Service/Illustration/CharacterDesign/${id}`)
        .set(data)
        .then(() => {
          setmessage(`Character Design created with id ${id}`);
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    if (type === "Product Illustration") {
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );

      const data = {
        id: id,
        NoOfConceptRef: parseFloat(NoOfConceptRef.current.value),
        NoofRevissions: parseFloat(NoofRevissions.current.value),
        DurationDeliveryRef: parseFloat(DurationDeliveryRef.current.value),
        NoofProductRef: parseFloat(NoofProductRef.current.value),
        noofLogoRef: parseFloat(noofLogoRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database
        .doc(`Service/Illustration/ProductIllustration/${id}`)
        .set(data)
        .then(() => {
          setmessage(`Product Illustration created with id ${id}`);
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  
  return (
    <div>
      <div className=" mainusers1">
        <DashboardHeader />
        <div className="maingss">
          <div className=" cot">
            <ToastContainer position="bottom-left" />
            <div className="noticificqt">{message}</div>
            <Card>
              <div className="contenst">
                <h2 className="text-center mb-4">
                  <div className="registerheader">
                    <h4>create Services </h4>
                  </div>
                </h2>

                <div className="selecteditemview">
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>Select Type</Form.Label>
                    <Form.Control
                      as="select"
                      value={type}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setType(e.target.value);
                      }}
                    >
                      <option value="default">select staff role</option>
                      <option value="Story Illustration">Story Illustration</option>
                      <option value="Character Design">Character Design</option>
                      <option value="Product Illustration">Product Illustration</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Card.Body>
                  <Form onSubmit={createServices} className="m-1">
                    <div
                      className="form1item"
                      style={{
                        display: type === "Story Illustration" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>Cell Shaded style</Form.Label>
                        <Form.Control type="text" ref={cellshadeRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Realistic style</Form.Label>
                        <Form.Control type="text" ref={RealisticRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Line art</Form.Label>
                        <Form.Control type="text" ref={LineArtRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of panel</Form.Label>
                        <Form.Control type="text" ref={noOfPannelRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Cover Design</Form.Label>
                        <Form.Control type="text" ref={coverDesignRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Text layout</Form.Label>
                        <Form.Control type="text" ref={TextLayoutRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Character</Form.Label>
                        <Form.Control type="text" ref={noofCharacterRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Enviroment/Background Design</Form.Label>
                        <Form.Control type="text" ref={enviromentRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Revision</Form.Label>
                        <Form.Control type="text" ref={revisionRef} />
                      </Form.Group>

                      
                      <Form.Group id="email">
                        <Form.Label>Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={storyDurationRed} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> type</Form.Label>
                        <Form.Control type="text" defaultValue={type} />
                      </Form.Group>
                    </div>

                    <div
                      className="form1item"
                      style={{
                        display: type === "Character Design" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>No of Charcter/Figure</Form.Label>
                        <Form.Control type="text" ref={noofCharacterRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Full Body Proportion</Form.Label>
                        <Form.Control type="text" ref={proportionFullBodyRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Portrait proportion</Form.Label>
                        <Form.Control type="text" ref={proportionPortraitRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Head Shot</Form.Label>
                        <Form.Control type="text" ref={proportionHeadshotRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Cartoon style </Form.Label>
                        <Form.Control type="text" ref={CartoonStyleRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Realistic style</Form.Label>
                        <Form.Control type="text" ref={RealisticRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Line Art</Form.Label>
                        <Form.Control type="text" ref={LineArtRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Revision</Form.Label>
                        <Form.Control type="text" ref={RevisionsRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={deliveryDurationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Concept for Character</Form.Label>
                        <Form.Control type="text" ref={noOfConceptDesignRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" defaultValue={type} />
                      </Form.Group>
                    </div>

                    <div
                      className="form1item"
                      style={{
                        display: type === "Product Illustration" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>No of Concept</Form.Label>
                        <Form.Control type="text" ref={NoOfConceptRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Revison </Form.Label>
                        <Form.Control type="text" ref={NoofRevissions} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={DurationDeliveryRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Product</Form.Label>
                        <Form.Control type="text" ref={NoofProductRef} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label> type</Form.Label>
                        <Form.Control type="text" defaultValue={type} />
                      </Form.Group>
                    </div>

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

export default CreateIllustration;





