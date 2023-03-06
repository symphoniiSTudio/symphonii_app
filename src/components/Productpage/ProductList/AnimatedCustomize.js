import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../../firebase";
import { compareAsc, format } from "date-fns";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../../AdminFolder/Admin.service/UserAuth";
import HomeNavbar from "../../HomeNavbar";
import Footer from "../../Footer";
import "./AnimatedCustomize.css";
import { getServicesexplainer } from "../../../Services.js/GetServices";
import { Checkbox } from "@material-ui/core";

// import { timeStamptoDate } from "../../../Services/Utility";

function AnimatedCustomize(props) {
  const [userinfo, setuserinfo] = useState([]);
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const [user, setuser] = useState(null);
  const { uid } = useAuth().currentUser;
  const [number, setNumber] =  useState(1)
  const [duration, setduration] =  useState(0.5)
  const [checked, setchecked] = useState (0)
  const [detail, setdeails] = useState(0)
  const [NoBackground, setNoBackground] = useState(0)
  const [soundFX, setsoundFxRef] = useState(0)
  const [music, setmusicc] = useState(0)
  const [stroyBoard, setStoryBoard] =  useState(0)
  const [animastic, setanimastic] = useState(0)
  const [scripture , setscripture] =  useState(0)
  

  useEffect(() => {
    const id = props.match.params.id;
    getServicesexplainer(id).then((newloans) => {
      // setloading(true);
      const loan = newloans[0];
      if (!loan) {
        setloading(true);
        toast.error("invalid request, please contact support");
      } else {
        setuserinfo(loan);
        setloading(false);
      }
    });
  }, []);

  const getUser = async () => {
    try {
      const documentSnapshot = await database
        .collection("users")
        .doc(uid)
        .get();
      const userData = documentSnapshot.data();
      setuser(userData);
    } catch (e) {
      toast.error(e.message);
    }
  };

  // Get user on mount
  useEffect(() => {
    getUser();
  }, []);

  // if (user.Restriction === true){
  //     history.push('/Fetch/Error')
  // }

  const  handleDecrease =(e)=>{
    e.preventDefault()
    setNumber(number -1)
  }
  const  handleIncrese =(e)=>{
    e.preventDefault()
    setNumber(number +1)
   
  }
 

  const handledurationDecrease  = (e)=>{
    e.preventDefault()
    setduration(duration - 0.5)
  }

  const handledurationIncrease  = (e)=>{
    e.preventDefault()
    setduration(duration + 0.5)
  }

  const handleCheck = (e) =>{
    let isChecked = e.target.checked;
    if (isChecked){
      setchecked(parseFloat(userinfo.characterDesginRef))
    }else{
      setchecked(0)
    }
  }

  const handleSoundFX = (e) =>{
    let isChecked = e.target.checked;
    if (isChecked){
      setsoundFxRef(parseFloat(userinfo.soundFxRef))
    }else{
      setsoundFxRef(0)
    }
  }

  const handleDetaile = (e)=>{
    let isChecked = e.target.checked;
    if (isChecked){
      setdeails(parseFloat(userinfo.DetailMovementRef))
    }else{
      setdeails(0)
    }
  }

  // const handlebackgroudDesign = (e)=>{
  //   let isChecked = parseFloat(userinfo.NoBaackgroundRef)
  //   if (isChecked){
  //     setbackgroundDesign(parseFloat(userinfo.NoBaackgroundRef))
  //   }else{
  //     setbackgroundDesign(parseFloat(userinfo.NoBaackgroundRef))
  //   }
  // }


const handlebackgroundDecrease = (e)=>{
  e.preventDefault()
  setNoBackground(NoBackground -1)
}

const handlebackgroundIncrease = (e)=>{
  e.preventDefault()
  setNoBackground(NoBackground + 1)
}


const handleMusicAudio = (e)=>{
  let isChecked = e.target.checked;
  if (isChecked){
    setmusicc(parseFloat(userinfo.musicAudioRef))
  }else{
    setmusicc(0)
  }
}

const handleStroyboard = (e)=>{
  let isChecked = e.target.checked;
  if (isChecked){
    setStoryBoard(parseFloat(userinfo.storyBoardRef))
  }else{
    setStoryBoard(0)
  }
}


const handlescriptwriting = (e)=>{
  let isChecked = e.target.checked;
  if (isChecked){
    setscripture(parseFloat(userinfo.scriptwritingRef))
  }else{
    setscripture(0)
  }
}


const handleanimastic = (e)=>{
  let isChecked = e.target.checked;
  if (isChecked){
    setanimastic(parseFloat(userinfo.animaticsRef))
  }else{
    setanimastic(0)
  }
}


  const numCharat =  number * userinfo.NoCharactersRef * duration
  const check =  checked * duration
  const deails =  detail * duration
  const b = userinfo.NoBaackgroundRef *duration * NoBackground
  const SoundFX = soundFX *duration 
  const hadmusic = music * duration
  const stroryBord = stroyBoard * duration
  const animastics = animastic * duration
  const  scriptures = scripture * duration

  const VoiceOverRecoding =  userinfo.VoiceOverRecoding * duration * scriptures * animastics


if (number < 1){
  setNumber(1)
}

if (NoBackground < 1){
  setNoBackground(1)
}
if (duration < 0.5){
  setduration(0.5)
}



const Sum = numCharat + check + deails + b + SoundFX + VoiceOverRecoding + hadmusic +stroryBord

  return (
    <div>
      <HomeNavbar />

      <ToastContainer position="top-center" />

      <div className="anima">
        <div className="animaterdconent">
          <div className="animatedcntaainer">2D Animated</div>
          <div className="itemcotaner">
            <div className="d-flex  cons">
            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Number of Character </div>
              <div className="producumer">
                <div className="countArea">
                  <div className="countBuo">
                    <button type="submit" onClick={handleDecrease}> - </button>
                  </div>
                  <div className="cuntInput">
                  {number}
                  </div>
                  <div className="countbuttomIncrat">
                    <button type="submit" onClick={handleIncrese}> + </button>
                  </div>
                </div>
              </div>

             </div>
            </div>
            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Video Duration </div>
              <div className="producumer">
                <div className="countArea">
                  <div className="countBuo">
                    <button type="submit" onClick={handledurationDecrease}> - </button>
                  </div>
                  <div className="cuntInput">
                  {duration}
                  </div>
                  <div className="countbuttomIncrat">
                    <button type="submit" onClick={handledurationIncrease}> + </button>
                  </div>
                </div>
              </div>

             </div>
            </div>
            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Character Design </div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={e => handleCheck(e)} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>
            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Detailed Movement</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={e => handleDetaile(e)} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>
            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> No of Background</div>
              <div className="producumer">
              <div className="countArea">
                  <div className="countBuo">
                    <button type="submit" onClick={handlebackgroundDecrease}> - </button>
                  </div>
                  <div className="cuntInput">
                  {NoBackground}
                  </div>
                  <div className="countbuttomIncrat">
                    <button type="submit" onClick={handlebackgroundIncrease}> + </button>
                  </div>
                </div>
              </div>

             </div>
            </div>

            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Background Design</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps  checked={true} defaultChecked={userinfo.NoBaackgroundRef}/>
                  </div>
               
                </div>
              </div>

             </div>
            </div>

            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Sound FX</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={handleSoundFX} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>

            {/* <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Background Design</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps  checked={true} defaultChecked={userinfo.NoBaackgroundRef}/>
                  </div>
               
                </div>
              </div>

             </div>
            </div> */}

            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Voice Over Recording</div>
              <div className="producumer">
                <div className="countArea">

                  <div className="cuntInput1">
                  <Checkbox otherProps  checked={true} defaultChecked={userinfo.NoBaackgroundRef}/>
                  </div>
               
                </div>
              </div>

             </div>
            </div>

            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Music & Audio Sync</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={e => handleMusicAudio(e)} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>

            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Story Board</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={e => handleStroyboard(e)} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>


            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Script Writing</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={e => handlescriptwriting(e)} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>


            <div className="itemcontainer">
             <div className="itemsflex">
             <div className="productDacritio"> Animatics</div>
              <div className="producumer">
                <div className="countArea">
                 
                  <div className="cuntInput1">
                  <Checkbox otherProps onChange={e => handleanimastic(e)} />
                  </div>
               
                </div>
              </div>

             </div>
            </div>
            
            </div>
            <div className="showTodal">
              <h5>Total </h5>
             <span> {Sum ? Sum : "Please wait.." }</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AnimatedCustomize;
