const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require('express');

const { createAdminHandler } = require("./CreateUser/CreateAdmin");
const { createNewUserHandler } = require("./CreateUser/CreateUSer");
const {createNewServiceHandler } = require("./CreateProduct.js/CreateProduct");
admin.initializeApp();

exports.AddAdminRole =  functions.https.onCall((data, context)=>{
// get uers add a custome claim to users 

return admin.auth().getUserByEmail(data.email).then(user =>{
  return admin.auth().setCustomUserClaims(user.uid, {
    isAdmin : true, 
  })
}).then(()=>{
  return {
    message:  `success ${data.email} has been made a admin`
  }
}).catch(error => {
  return error
})
})

exports.Adduser = createNewUserHandler;
exports.AddOfficer = createAdminHandler
exports.addservices = createNewServiceHandler


