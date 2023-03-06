import React, { useRef, useState, useEffect } from "react";
import { database } from "../../firebase";
import { useAuth } from "../Admin.service/UserAuth";
import { storage } from "../../firebase";
import axios from "axios";
import firebase from "firebase";
import { Form, Button, Card, Alert, TabContent } from "react-bootstrap";
import { getRandomString } from "../Admin.service/GetUserData.service";
import { ToastContainer, toast } from "react-toastify";
import DashboardHeader from "./DasboardHeader";
import "../../App.css";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const baseURL =
  "https://us-central1-app-symphoniistudios.cloudfunctions.net/addservices";

function CreateService() {
  //brand Identity Design

  const noofConceptRef = useRef();
  const NooLogoRef = useRef();
  const nameDeveopmentRef = useRef();
  const NoofRevisionRef = useRef();
  const DeliveryRef = useRef();
  const Logo3d = useRef();
  const LogoRevealRef = useRef();

  //prints and Digital design

  const businessCardRef = useRef();
  const LetterHeadDesignRef = useRef();
  const IDCardsRef = useRef();
  const brochureRef = useRef();
  const flyersRef = useRef();
  const socialMediaRef = useRef();
  const productpackage = useRef();
  const noofrevisionRef = useRef();

  // weDesign and Developement
  const webDesiRef = useRef();
  const noOfPageRef = useRef();
  const NofPageRef = useRef();
  const WebDevelopmentRef = useRef();
  const ecommerceRef =  useRef()
  const responsiveRef = useRef();
  const noofProductRef = useRef();
  const ContentDOwloadRef = useRef();
  const webDeliveryRef = useRef();
  const NoRevission = useRef();
  const domeanRef = useRef();

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState("");
  const [type, setType] = useState("");

  async function CreateServices(e) {
    e.preventDefault();

    if (type === "Brand Identity Design") {
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );

      const data = {
        id: id,
        noofConceptRef: parseFloat(noofConceptRef.current.value),
        NooLogoRef: parseFloat(NooLogoRef.current.value),
        nameDeveopmentRef: parseFloat(nameDeveopmentRef.current.value),
        NoofRevisionRef: parseFloat(NoofRevisionRef.current.value),
        DeliveryRef: parseFloat(DeliveryRef.current.value),
        Logo3d: parseFloat(Logo3d.current.value),
        LogoRevealRef: parseFloat(LogoRevealRef.current.value),

        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database
        .doc(`Service/BrandDesign/BrandIdentity/${id}`)
        .set(data)
        .then(() => {
          setmessage(`Brand Identity created with id ${id}`);
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    if (type === "Print and Digital Design") {
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );

      const data = {
        id: id,
        LetterHeadDesign: parseFloat(LetterHeadDesignRef.current.value),
        IDCardsRef: parseFloat(IDCardsRef.current.value),
        brochureRef: parseFloat(brochureRef.current.value),
        flyersRef: parseFloat(flyersRef.current.value),
        socialMediaRef: parseFloat(socialMediaRef.current.value),
        productpackage: parseFloat(productpackage.current.value),
        noofrevisionRef: parseFloat(noofrevisionRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database
        .doc(`Service/BrandDesign/PrintDesign/${id}`)
        .set(data)
        .then(() => {
          setmessage(`Print and Digital Design created with id ${id}`);
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    if (type === "Web Design and Development") {
      const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );

      const data = {
        id: id,
        webDesiRef: parseFloat(webDesiRef.current.value),
        noOfPageRef: parseFloat(noOfPageRef.current.value),
        NofPageRef: parseFloat(NofPageRef.current.value),
        WebDevelopmentRef: parseFloat(WebDevelopmentRef.current.value),
        responsiveRef: parseFloat(responsiveRef.current.value),
        noofProductRef: parseFloat(noofProductRef.current.value),
        ContentDOwloadRef: parseFloat(ContentDOwloadRef.current.value),
        webDeliveryRef: parseFloat(webDeliveryRef.current.value),
        NoRevission: parseFloat(NoRevission.current.value),
        domeanRef: parseFloat(domeanRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await database
        .doc(`Service/BrandDesign/WebDesign/${id}`)
        .set(data)
        .then(() => {
          setmessage(`Web Design created with id ${id}`);
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }

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
                       
                        setType(e.target.value);
                      }}
                    >
                      <option value="default">select staff role</option>
                      <option value="Brand Identity Design">Brand Identity Design</option>
                      <option value="Print and Digital Design">Print and Digital Design</option>
                      <option value="Web Design and Development">Web Design and Development</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Card.Body>
                  <Form onSubmit={CreateServices} className="m-1">
                    <div
                      className="form1item"
                      style={{
                        display: type === "Brand Identity Design" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>No of Logos</Form.Label>
                        <Form.Control type="text" ref={NooLogoRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Concept</Form.Label>
                        <Form.Control type="text" ref={noofConceptRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Name Development</Form.Label>
                        <Form.Control type="text" ref={nameDeveopmentRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Revision</Form.Label>
                        <Form.Control type="text" ref={NoofRevisionRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={DeliveryRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>3D Logo</Form.Label>
                        <Form.Control type="text" ref={Logo3d} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Logo Reveal</Form.Label>
                        <Form.Control type="text" ref={LogoRevealRef} />
                      </Form.Group>

                    </div>

                    <div
                      className="form1item"
                      style={{
                        display: type === "Print and Digital Design" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>Business Card</Form.Label>
                        <Form.Control type="text" ref={businessCardRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Letter Head Design</Form.Label>
                        <Form.Control type="text" ref={LetterHeadDesignRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>ID Card </Form.Label>
                        <Form.Control type="text" ref={IDCardsRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Brochure/Magazin </Form.Label>
                        <Form.Control type="text" ref={brochureRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Product Package design</Form.Label>
                        <Form.Control type="text" ref={productpackage} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Revision</Form.Label>
                        <Form.Control type="text" ref={noofrevisionRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Social Media Banner</Form.Label>
                        <Form.Control type="text" ref={socialMediaRef} />
                      </Form.Group>

                    </div>

                    <div
                      className="form1item"
                      style={{
                        display: type === "Web Design and Development" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>Web Design</Form.Label>
                        <Form.Control type="text" ref={webDesiRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Pages</Form.Label>
                        <Form.Control type="text" ref={noOfPageRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Web Development</Form.Label>
                        <Form.Control type="text" ref={WebDevelopmentRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Ecommerce Functionality</Form.Label>
                        <Form.Control type="text" ref={ecommerceRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Responsive design</Form.Label>
                        <Form.Control type="text" ref={responsiveRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> No of Product</Form.Label>
                        <Form.Control type="text" ref={noofProductRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Content Upload</Form.Label>
                        <Form.Control type="text" ref={ContentDOwloadRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={webDeliveryRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Revision</Form.Label>
                        <Form.Control type="text" ref={NoRevission} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Domain Name + Hosting</Form.Label>
                        <Form.Control type="text" ref={domeanRef} />
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

export default CreateService;
