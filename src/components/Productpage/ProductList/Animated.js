import React, {useState, useEffect} from "react";
import "./pr.css";
import {Link} from 'react-router-dom'
import { useAuth } from "../../../AdminFolder/Admin.service/UserAuth";
import {  getServicesexplainer, getUserById } from "../../../Services.js/GetServices";
// import axios

function AnimationProduct() {
  const [userCollection, setuserCollection] = useState([]);
  const [lastDocs, setlastDocs] = useState();
  const { uid, } = useAuth().currentUser;
   const [loading, setloading] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  useEffect(() => {
    getUserById(uid)
      .then(() => {
        return getServicesexplainer();
      })
      .then((collections) => {
        updateState(collections);
      });
  }, []);

  const updateState = (users) => {
    const isItemEmpty = users.length === 0;
    if (!isItemEmpty) {
      const lastDoc = users[users.length - 1];
      setuserCollection((userCollection) => [...userCollection, ...users]);
      setlastDocs(lastDoc);
    } else {
      setisEmpty(true);
    }
    setloading(false);
  };

  const fetchMore = () => {
    setloading(true);
    getServicesexplainer()
      .startAfter(lastDocs)
      .limit(20)
      .get()
      .then((collections) => {
        updateState(collections);
      });
  };
  if (userCollection.length === 0) {
    return <span> Please Wait</span>;
  }

  if (userCollection.length === "") {
    return <span>No more data to fetch</span>;
  }

  return (
    <div>
     {userCollection.map((item)=>{ 
       return(
        <div id="generic_price_table">
        <section>
          
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                {/* <!--PRICE HEADING START--> */}
                <div
                  class="price-heading clearfix"
                  style={{ backgroundImage: "url(/img/b3.png)" }}
                >
                  <h1> Amination Price Package</h1>
                </div>
                {/* <!--//PRICE HEADING END--> */}
              </div>
            </div>
          </div>
          <div class="container">
            {/* <!--BLOCK ROW START--> */}
            <div class="row">
              <div class="col-md-4">
                {/* <!--PRICE CONTENT START--> */}
                <div class="generic_content clearfix">
                  {/* <!--HEAD PRICE DETAIL START--> */}
                  <div class="generic_head_price clearfix">
                    {/* <!--HEAD CONTENT START--> */}
                    <div class="generic_head_content clearfix">
                      {/* <!--HEAD START--> */}
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Basic</span>
                      </div>
                      {/* <!--//HEAD END--> */}
                    </div>
                    {/* <!--//HEAD CONTENT END--> */}

                    {/* <!--PRICE START--> */}
                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">{item.scriptwritingRef}</span>
                        <span class="cent">.99</span>
                        <span class="month">/MON</span>
                      </span>
                    </div>
                    {/* <!--//PRICE END--> */}
                  </div>
                  {/* <!--//HEAD PRICE DETAIL END--> */}

                  {/* <!--FEATURE LIST START--> */}
                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>1</span> Bandwidth
                      </li>
                      <li>
                        <span>1</span> Storage
                      </li>
                      <li>
                        <span>12</span> Accounts
                      </li>
                      <li>
                        <span>7</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/* <!--//FEATURE LIST END--> */}

                  {/* <!--BUTTON START--> */}
                  <div class="generic_price_btn clearfix">
                    <Link to ={`/Animated/selected/customize/${item.id}`}>
                      Order Now
                    </Link>
                  </div>
                  {/* <!--//BUTTON END--> */}
                </div>
                {/* <!--//PRICE CONTENT END--> */}
              </div>

              <div class="col-md-4">
                {/* <!--PRICE CONTENT START--> */}
                <div class="generic_content active clearfix">
                  {/* <!--HEAD PRICE DETAIL START--> */}
                  <div class="generic_head_price clearfix">
                    {/* <!--HEAD CONTENT START--> */}
                    <div class="generic_head_content clearfix">
                      {/* <!--HEAD START--> */}
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Standard</span>
                      </div>
                      {/* <!--//HEAD END--> */}
                    </div>
                    {/* <!--//HEAD CONTENT END--> */}

                    {/* <!--PRICE START--> */}
                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">199</span>
                        <span class="cent">.99</span>
                        <span class="month">/MON</span>
                      </span>
                    </div>
                    {/* <!--//PRICE END--> */}
                  </div>
                  {/* <!--//HEAD PRICE DETAIL END--> */}

                  {/* <!--FEATURE LIST START--> */}
                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>2GB</span> Bandwidth
                      </li>
                      <li>
                        <span>150GB</span> Storage
                      </li>
                      <li>
                        <span>12</span> Accounts
                      </li>
                      <li>
                        <span>7</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/* <!--//FEATURE LIST END--> */}

                  {/* <!--BUTTON START--> */}
                  <div class="generic_price_btn clearfix">
                    <Link to = "">
                      Sign up
                    </Link>
                  </div>
                  {/* <!--//BUTTON END--> */}
                </div>
                {/* <!--//PRICE CONTENT END--> */}
              </div>
              <div class="col-md-4">
                {/* <!--PRICE CONTENT START--> */}
                <div class="generic_content clearfix">
                  {/* <!--HEAD PRICE DETAIL START--> */}
                  <div class="generic_head_price clearfix">
                    {/* <!--HEAD CONTENT START--> */}
                    <div class="generic_head_content clearfix">
                      {/* <!--HEAD START--> */}
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Unlimited</span>
                      </div>
                      {/* <!--//HEAD END--> */}
                    </div>
                    {/* <!--//HEAD CONTENT END--> */}

                    {/* <!--PRICE START--> */}
                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">299</span>
                        <span class="cent">.99</span>
                        <span class="month">/MON</span>
                      </span>
                    </div>
                    {/* <!--//PRICE END--> */}
                  </div>
                  {/* <!--//HEAD PRICE DETAIL END--> */}

                  {/* <!--FEATURE LIST START--> */}
                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>2GB</span> Bandwidth
                      </li>
                      <li>
                        <span>150GB</span> Storage
                      </li>
                      <li>
                        <span>12</span> Accounts
                      </li>
                      <li>
                        <span>7</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/* <!--//FEATURE LIST END--> */}

                  {/* <!--BUTTON START--> */}
                  <div class="generic_price_btn clearfix">
                    <Link to = "">
                      Order Now
                    </Link>
                  </div>
                  {/* <!--//BUTTON END--> */}
                </div>
                {/* <!--//PRICE CONTENT END--> */}
              </div>
            </div>
            {/* <!--//BLOCK ROW END--> */}
          </div>
          <div className="customixe">
          <Link to ={`/Animated/selected/customize/${item.id}`}>
                      Order Now
                    </Link>
          </div>
        </section>
      </div>
       )       
     })}
      
    </div>
  );
}

export default AnimationProduct;
