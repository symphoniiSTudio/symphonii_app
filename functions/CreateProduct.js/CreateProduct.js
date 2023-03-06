const functions =  require("firebase-functions")
const admin =  require('firebase-admin')


const express = require("express");
const app = express();
const cors = require("cors")({ origin: true });
app.use(cors);

const router = express.Router();
//add services 

 router.post('/' , async (req, res) =>{
  
  console.log(req.body);

  if (req.method !== "POST") {
    res.status(400).send("what are you doing?");
    return 0;
  }

  //get the request body 
const type = req.body.type
  //store 2D animated Video
  const NoCharacters = req.body.NoCharacters
  const videoDuration = req.body.videoDuration
  const characterDesgin = req.body.characterDesgin
  const DetailMovement = req.body.DetailMovement
  const NoBaackground = req.body.NoBaackground
  const soundFx = req.body.soundFx
  const voiceOverRecord = req.body.voiceOverRecord
  const musicAudio = req.body.musicAudio
  const storyBoard = req.body.storyBoard
  const animatics = req.body.animatics
  const scriptwriting = req.body.scriptwriting
  const NOofrevision = req.body.NOofrevision
  const DeliveryDuration = req.body.DeliveryDuration
  

  // explainer video
  const videoduration = req.body.videoduration
  const detailedcharacter = req.body.detailedcharacter
  const soundFX = req.body.soundFX
  const musicAudioSync = req.body.musicAudioSync
  const voiceOver = req.body.voiceOver
  const ScriptWritten = req.body.ScriptWritten
  const Animatimatic = req.body.Animatimatic
  const Storyboarding = req.body.Storyboarding
  //create a seclection option for video styling to white, motion ,  2d cartoon 
  const noRevision = req.body.noRevision
  const duration  = req.body.duration

  
 
  //motion graphics
  
  const logoreveal = req.body.ScriptWritten
  const titlesequence = req.body.ScriptWritten
  const animatedIcons = req.body.ScriptWritten
  const motionduration = req.body.motionduration
  const motionsoundFX = req.body.motionsoundFX
  const grapgic3d = req.body.grapgic3d
  const motionnoRevision = req.body.motionnoRevision
  const deiveryDuration = req.body.deiveryDuration
  

  //request a post request

  if (req.method ==="post"){
    const db = admin.database() 
  // insert object with 
  const animation  = {
     NoCharacters:NoCharacters,
     videoDuration:videoDuration,  
     characterDesgin:characterDesgin, 
     DetailMovement:DetailMovement,
     NoBaackground:NoBaackground,
     soundFx:soundFx,
     voiceOverRecord:voiceOverRecord,
     musicAudio:musicAudio,
     storyBoard:storyBoard,
     animatics:animatics,
     scriptwriting:scriptwriting,
     NOofrevision:NOofrevision,
     DeliveryDuration:DeliveryDuration,
     Type:type
  }
  

  const vidio  = {
     videoduration:videoduration,
     detailedcharacter:detailedcharacter,
     soundFX:soundFX,
     musicAudioSync:musicAudioSync,
     voiceOver:voiceOver,
     ScriptWritten:ScriptWritten,
     Animatimatic:Animatimatic,
     Storyboarding:Storyboarding,
    //create a seclection option for video styling to white, motion ,  2d cartoon 
     noRevision:noRevision,
     duration :duration,
     videoType:type,
   
 }

 const motion  = {
  logoreveal : logoreveal,
 titlesequence : titlesequence,
 animatedIcons : animatedIcons,
 motionduration : motionduration,
 motionsoundFX : motionsoundFX,
 grapgic3d : grapgic3d,
 motionnoRevision : motionnoRevision,
deiveryDuration:deiveryDuration
}

  db.ref('/service/animation').push(animation)
  res.json({status : "service created successfully"})
  res.send("created successfully")

  }

})

const createserviceRoute = app.use("/", router);
exports.createNewServiceHandler = functions.https.onRequest(createserviceRoute);