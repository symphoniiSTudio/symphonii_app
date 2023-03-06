import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { database } from "../firebase";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiBehanceLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleNewSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    database
      .collection("newsletter")
      .add({
        name: name,
        email: email,
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
    setEmail("");
  };
  return (
    <div>
      <div className="footerhead">
        <div className="fheadcontainer">
          <div className="socialmediasection ">
            <div className="footer-icons">
              <div className="mediaimg1">
                <a href="https://web.facebook.com/symphoniistudios"  target="_blank">
                  <i>
                    <TiSocialFacebook />
                  </i>
                </a>
              </div>

              <div className="mediaimg1">
                <a
                  href="https://wa.me/2348140297987"
                  class="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaimg2"
                  target="_blank"
                >
                  <i>
                    <FaWhatsapp />
                  </i>
                </a>
              </div>

              <div className="mediaimg1">
                <a href="https://www.youtube.com/channel/UCz6XYBhKoCQVQR2yxRhcxqg/featured"  target="_blank">
                  <i>
                    <AiOutlineYoutube />
                  </i>
                </a>
              </div>
              <div className="mediaimg1">
                <a href="https://www.behance.net/symphonii612d268f"  target="_blank">
                  <i>
                    <RiBehanceLine />
                  </i>
                </a>
              </div>

              <div className="mediaimg1">
                <a href="https://www.linkedin.com/in/symphonii-studios-b88820222/" target="_blank">
                  <i>
                    <RiLinkedinLine />
                  </i>
                </a>
              </div>

              <div className="mediaimg1">
                <a href="https://www.instagram.com/symphoniistudios/?hl=en"  target="_blank">
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
            <Link to="/contact">
              <div className="emquireysection">make Enquiry</div>
            </Link>
          </div>
        </div>
      </div>

      <footer className="footer-distributed ">
        <div className="footerconent">
          <div className="footeritems">
            <div className="newsletersection">
              <form className="forma" onSubmit={handleNewSubmit}>
                <h1>Newsletter Signup</h1>
                <p>No spam, unsubscribe at any time.</p>
                <div className="info">
                  <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                  <input
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                  />

                  <input
                    type="submit"
                    value="Subscribe"
                    style={{ background: loader ? "#ccc" : " #ed1846" }}
                  />
                </div>
              </form>
            </div>
            <div className="menufooteritems">
              <div className="menufooterbody">
                <div className="menufooterlist">
                  <h2>Locate Us</h2>
                  <p>
                    <span>Address -</span> No. 15, Flodav Plaza, Village Market
                    Road, Kubwa Abuja, Nigeria
                  </p>
                  <p>
                    <span>Phone - </span>+234 (0)7039999979
                  </p>
                  <p>
                    <span>Email -</span> symphoniistudios@gmail.com
                  </p>
                </div>
                <div className="menufooterlist">
                  <h2>Quick Link</h2>
                  <p className="p1">
                    <Link to="/">
                      <span>Home</span>{" "}
                    </Link>
                  </p>
                  <p className="p1">
                    <Link to="/services/all">
                      <span>Service</span>{" "}
                    </Link>
                  </p>
                  <p className="p1">
                    <Link to="/portfolio">
                      <span>Portfolio</span>{" "}
                    </Link>
                  </p>
                  <p className="p1">
                    <Link to="/about">
                      <span>About</span>
                    </Link>
                  </p>
                  <p className="p1">
                    <Link to="/contact">
                      <span>Contact us</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="logofooter">
              <div className="logofooter">
                <div>
                  <img src="/img/symphonii.png" alt="" />
                </div>{" "}
                <br />
                <div>
                  <Link to="/privacy">privacy Policy</Link>
                </div>
                <div>symphonii studios @ 2021</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
