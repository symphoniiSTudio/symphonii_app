import React from "react";
import ContactNav from "../ContactUsComponent/ContactNav";
import Contactform from "../ContactUsComponent/Contactform";
import Footer from "../Footer";
import '../ContactPage.css'
import Contactbody from "../ContactUsComponent/Contactbody";

function ContactUs() {
  return (
    <div>
      <ContactNav />
      <div className="headercontact">
        Contact us
      </div>
      <div className="contactusdive">
        <div className="contactform">
        <Contactform />
         
        </div>
        <div className="contactmap">
        <Contactbody />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
