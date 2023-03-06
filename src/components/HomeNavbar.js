import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../firebase";
import { useAuth } from "../AdminFolder/Admin.service/UserAuth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DataContext } from "../AdminFolder/Admin.service/Context";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const {cart} = DataContext;
  const { uid } = useAuth().currentUser;
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [userinfo, setuserinfo] = useState([])
  const ref = database.doc(`users/${uid}`);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const getUser = () => {
    ref.onSnapshot((doc) => {
      const user = doc.data();
      user.id = doc.id;
      setuserinfo(user);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <nav className="navbar1">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/img/logo1.png" alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              style={{ color: "#ed1846" }}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to= "" id="cart" style={{color: userinfo.cart > 0 ?  "#ed1864" : ""}}>
            <span >{userinfo.cart ? userinfo.cart : 0}</span>
                  <i class="fa fa-shopping-cart" ></i>         
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
