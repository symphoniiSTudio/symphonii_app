import React, { useState } from "react";
import "./Contactform.css";
import { database } from "../../firebase.js";
import countries from "./Country.js";
import validator from "validator";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [loader, setLoader] = useState(false);
  const [emailStatus, setEmailStatus] = useState({color: 'green', msg: ''});
  const [phoneError, setphoneError] = useState({color: 'green', msg:''});


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    database.collection("contacts")
      .add({
        name: name,
        email: email,
        phone: phone,
        message: message,
        country: country,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
       
        alert(error.message);
        setLoader(false);
      });

    setName("");

    setMessage("");
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailStatus({color: 'green', msg: "Valid Email :)"});
    } else {
      setEmailStatus({color: 'red', msg: "Enter valid Email!"});
    }

    setEmail(email);
  };

  const validatePhone = (e) => {
    var phone = e.target.value;

    if (validator.isMobilePhone(phone)) {
      setphoneError({color:'green' , msg : 'valid phone number'});
    } else {
      setphoneError({color:'red', msg : 'invalid number'});
    }

    setPhone(phone);
  };

 

  return (
    <div className="formapp">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Send us a Message </h1>

        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          value={phone}
          type="text"

          onChange={(e) => {
            validatePhone(e);
            if (e.target.value.length < 11) {
              setphoneError({color:'green', msg:'almost there'});
            }

            if (e.target.value.length < 5) {
              setphoneError({color:'red' , msg:'invalid format'});
            }
          }}
        
          required
        />

        <span
          style={{
            fontWeight: "bold",
            color: phoneError.color,
          }}
        >
          {phoneError.msg}
        </span>

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => validateEmail(e)}
          required
        />
        <span
          style={{
            fontWeight: "bold",
            color: emailStatus.color,
          }}
        >
          {emailStatus.msg}
        </span>
        <label>Country: </label>
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option key=""></option>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " #ed1846" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
