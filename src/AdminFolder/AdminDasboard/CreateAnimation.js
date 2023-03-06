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

function CreateService() {
  const NoCharactersRef = useRef();
  const videoDurationRef = useRef();
  const characterDesginRef = useRef();
  const DetailMovementRef = useRef();
  const NoBaackgroundRef = useRef();
  const soundFxRef = useRef();
  const voiceOverRecordRef = useRef();
  const musicAudioRef = useRef();
  const storyBoardRef = useRef();
  const animaticsRef = useRef();
  const scriptwritingRef = useRef();
  const NOofrevisionRef = useRef();
  const DeliveryDurationRef = useRef();

  const videodurationRef = useRef();
  const detailedcharacterRef = useRef();
  const soundFXxRef = useRef();
  const musicAudioSyncRef = useRef();
  const EvoiceOverRecordRef = useRef();
  const voiceOverRef = useRef();
  const ScriptWrittenRef = useRef();
  const AnimatimaticRef = useRef();
  const StoryboardingRef = useRef();
  const noRevisionRef = useRef();
  const durationRef = useRef();

  const logorevealRef = useRef();
  const titlesequenceRef = useRef();
  const animatedIconsRef = useRef();
  const motiondurationRef = useRef();
  const motionsoundFXRef = useRef();
  const grapgic3dRef = useRef();
  const motionnoRevisionRef = useRef();
  const deiveryDurationRef = useRef();

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState("");
  const [type, setType] = useState("");
  

  async function createServices(e) {
    e.preventDefault();
        
    if  (type === "animation"){
    const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );
   
  
      const data = {
        id:id,
        NoCharactersRef: parseFloat(NoCharactersRef.current.value),
        videoDurationRef: parseFloat(videoDurationRef.current.value),
        characterDesginRef: parseFloat(characterDesginRef.current.value),
        DetailMovementRef: parseFloat(DetailMovementRef.current.value),
        NoBaackgroundRef: parseFloat(NoBaackgroundRef.current.value),
        soundFxRef: parseFloat(soundFxRef.current.value),
        voiceOverRecordRef: parseFloat(voiceOverRecordRef.current.value),
        musicAudioRef:parseFloat( musicAudioRef.current.value),
        storyBoardRef: parseFloat(storyBoardRef.current.value),
        animaticsRef: parseFloat(animaticsRef.current.value),
        scriptwritingRef: parseFloat(scriptwritingRef.current.value),
        NOofrevisionRef: parseFloat(NOofrevisionRef.current.value),
        DeliveryDurationRef: parseFloat(DeliveryDurationRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp()
      } 
     await database
        .doc(`Service/animations/2DAnimated/${id}`)
        .set(data).then(() => {
         setmessage(`2D Animated video created with id ${id}`)
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );   
          setLoading(false)
        }).catch((error) => {
          toast.error(error.message);
        });
}

if  (type === "explainer video"){
    const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );
      
  
      const data = {
        id:id,
        videodurationRef: parseFloat(videodurationRef.current.value),
        detailedcharacterRef: parseFloat(detailedcharacterRef.current.value),
        soundFXxRef: parseFloat(soundFXxRef.current.value),
        musicAudioSyncRef: parseFloat(musicAudioSyncRef.current.value),
        voiceOverRef: parseFloat(voiceOverRef.current.value),
        EvoiceOverRecordRef:parseFloat(EvoiceOverRecordRef.current.value),
        ScriptWrittenRef: parseFloat(ScriptWrittenRef.current.value),
        AnimatimaticRef: parseFloat(AnimatimaticRef.current.value),
        StoryboardingRef: parseFloat(StoryboardingRef.current.value),
        noRevisionRef: parseFloat(noRevisionRef.current.value),
        durationRef: parseFloat(durationRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp()
      } 
     await database
        .doc(`Service/animations/explainervideo/${id}`)
        .set(data).then(() => {
         setmessage(`Explainer video created with id ${id}`)
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );   
          setLoading(false)
        }).catch((error) => {
          toast.error(error.message);
        });
}


if  (type === "motion graphics"){
    const id = getRandomString(
        20,
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      );
      
  
      const data = {
        id:id,
        logorevealRef: parseFloat(logorevealRef.current.value),
        titlesequenceRef: parseFloat(titlesequenceRef.current.value),
        animatedIconsRef: parseFloat(animatedIconsRef.current.value),
        motiondurationRef: parseFloat(motiondurationRef.current.value),
        motionsoundFXRef: parseFloat(motionsoundFXRef.current.value),
        grapgic3dRef: parseFloat(grapgic3dRef.current.value),
        motionnoRevisionRef: parseFloat(motionnoRevisionRef.current.value),
        deiveryDurationRef: parseFloat(deiveryDurationRef.current.value),
        type: type,
        created: firebase.firestore.FieldValue.serverTimestamp()
      } 
     await database
        .doc(`Service/animations/motiongraphics/${id}`)
        .set(data).then(() => {
         setmessage(`Motion Graphics created with id ${id}`)
          toast.success(
            "Your Request has been submitted👍 ... Awaiting Approval"
          );   
          setLoading(false)
        }).catch((error) => {
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
                        console.log(e.target.value);
                        setType(e.target.value);
                      }}
                    >
                      <option value="default">select staff role</option>
                      <option value="animation">animation</option>
                      <option value="explainer video">explainer video</option>
                      <option value="motion graphics">motion graphics</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Card.Body>
                  <Form onSubmit={createServices} className="m-1">
                    <div
                      className="form1item"
                      style={{
                        display: type === "animation" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>No Characters</Form.Label>
                        <Form.Control type="text" ref={NoCharactersRef} />
                      </Form.Group>


                      <Form.Group id="email">
                        <Form.Label>video duration</Form.Label>
                        <Form.Control type="text" ref={videoDurationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Character Desgin</Form.Label>
                        <Form.Control type="text" ref={characterDesginRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No Characters</Form.Label>
                        <Form.Control type="text" ref={NoCharactersRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>detail movement</Form.Label>
                        <Form.Control type="text" ref={DetailMovementRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No Background</Form.Label>
                        <Form.Control type="text" ref={NoBaackgroundRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>sound FX</Form.Label>
                        <Form.Control type="text" ref={soundFxRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Voice Over Record</Form.Label>
                        <Form.Control type="text" ref={voiceOverRecordRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Music Audio</Form.Label>
                        <Form.Control type="text" ref={musicAudioRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Music Audio</Form.Label>
                        <Form.Control type="text" ref={musicAudioRef} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Story Bord</Form.Label>
                        <Form.Control type="text" ref={storyBoardRef} />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Animatics</Form.Label>
                        <Form.Control type="text" ref={animaticsRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Script Writing</Form.Label>
                        <Form.Control type="text" ref={scriptwritingRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>No of Revision</Form.Label>
                        <Form.Control type="text" ref={NOofrevisionRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={DeliveryDurationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> type</Form.Label>
                        <Form.Control type="text" defaultValue={type} />
                      </Form.Group>
                    </div>

                    <div
                      className="form1item"
                      style={{
                        display: type === "explainer video" ? "block" : "none"
                        
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>Video Duration</Form.Label>
                        <Form.Control type="text" ref={videodurationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Detailed Character</Form.Label>
                        <Form.Control type="text" ref={detailedcharacterRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Sound FX</Form.Label>
                        <Form.Control type="text" ref={soundFXxRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Music Audio Sync</Form.Label>
                        <Form.Control type="text" ref={musicAudioSyncRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Voice Over</Form.Label>
                        <Form.Control type="text" ref={voiceOverRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Animatics</Form.Label>
                        <Form.Control type="text" ref={AnimatimaticRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Script Written</Form.Label>
                        <Form.Control type="text" ref={ScriptWrittenRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Story Boarding</Form.Label>
                        <Form.Control type="text" ref={StoryboardingRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Voice Over Record</Form.Label>
                        <Form.Control type="text" ref={EvoiceOverRecordRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> No of Revision</Form.Label>
                        <Form.Control type="text" ref={noRevisionRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" ref={durationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" defaultValue={type} />
                      </Form.Group>
                    </div>

                    <div
                      className="form1item"
                      style={{
                        display: type === "motion graphics" ? "block" : "none",
                      }}
                    >
                      <Form.Group id="email">
                        <Form.Label>Logo Reveal</Form.Label>
                        <Form.Control type="text" ref={logorevealRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Animated Icon</Form.Label>
                        <Form.Control type="text" ref={animatedIconsRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Title Sequence</Form.Label>
                        <Form.Control type="text" ref={titlesequenceRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Motion Duration</Form.Label>
                        <Form.Control type="text" ref={motiondurationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Motion Sound FX</Form.Label>
                        <Form.Control type="text" ref={motionsoundFXRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label> 3D Graphics</Form.Label>
                        <Form.Control type="text" ref={grapgic3dRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Motion No. Revision</Form.Label>
                        <Form.Control type="text" ref={motionnoRevisionRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Delivery Duration</Form.Label>
                        <Form.Control type="text" ref={deiveryDurationRef} />
                      </Form.Group>

                      <Form.Group id="email">
                        <Form.Label>Voice Over Record</Form.Label>
                        <Form.Control type="text" ref={voiceOverRecordRef} />
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
