const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();
const cors = require("cors")({ origin: true });
app.use(cors);

const router = express.Router();

router.post("/", async (req, res) => {
  //get email, name and password from the req body
  console.log(req.body);

  if (req.method !== "POST") {
    res.status(400).send("what are you doing?");
    return 0;
  }

  const email = req.body.email;
  const password = req.body.password;

  // check the parameter sent

  if (password !== null && email !== null) {
    admin
      .auth()
      .createUser({
        email: email,
        emailVerified: false,
        password: password,
      })
      .then(async function (userRecord) {
        await admin.auth().setCustomUserClaims(userRecord.uid, {
          isUser: true,
        });
        res.send({ uid: userRecord.uid });
        console.log(userRecord.uid);
        console.log(userRecord)
        return { success: userRecord.uid };
      })
      .catch(function (error) {
        res.send("Error:" + error);
        console.log(error);
        return { success };
      });
  }
});

const createUserRoute = app.use("/", router);
exports.createNewUserHandler = functions.https.onRequest(createUserRoute);
