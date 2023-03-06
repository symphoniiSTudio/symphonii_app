import React, { useEffect, useState } from "react";
import { timeStamptoDate } from "../../AdminFolder/Admin.service/Utility";
// import Navbar from "../NavbarComponent/Navbar";
import { database } from "../../firebase";
import { compareAsc, format } from "date-fns";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../SingleProductComponents/SinglePageNav";
import Footer from "../Footer";
import "./OfficeSlap.css";
const userRef = database.collection("Comic").orderBy("created", "desc");

function OfficeSlap() {
  const [userCollection, setuserCollection] = useState([]);
  const [lastDocs, setlastDocs] = useState();
  const [loading, setloading] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  useEffect(() => {
    userRef
      .limit(30)
      .get()
      .then((collections) => {
        updateState(collections);
      });
  }, []);

  const updateState = (collections) => {
    const isItemEmpty = collections.size === 0;
    if (!isItemEmpty) {
      const users = collections.docs.map((user) => user.data());
      const lastDoc = collections.docs[collections.docs.length - 1];
      setuserCollection((userCollection) => [...userCollection, ...users]);
      setlastDocs(lastDoc);
    } else {
      setisEmpty(true);
    }
    setloading(false);
  };
  const fetchMore = () => {
    setloading(true);
    userRef
      .startAfter(lastDocs)
      .limit(20)
      .get()
      .then((collections) => {
        updateState(collections);
      });
  };
  if (userCollection.length === 0) {
    return <span> Loading ...</span>;
  }

  if (userCollection.length === "") {
    return <span>No more data to fetch</span>;
  }

  return (
    <div>
      <Navbar />
      <div className="headtable">
        <div className="bannslap">
          <div className="banner">
            <div className="imageside">
              <img src="/img/2.jpg" alt="" />
            </div>
            <div className="flexatepoint">
              <div className="detailsSde">
                <h2>SlapStick Office</h2>
                <div className="soci">
                  <div className="footer-icons1">
                    <div className="mediaimg111">
                      <a
                        href="https://web.facebook.com/symphoniistudios"
                        target="_blank"
                      >
                        <i>
                          <TiSocialFacebook />
                        </i>
                      </a>
                    </div>

                    <div className="mediaimg111">
                      <a
                        href="https://wa.me/2348140297987"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mediaimg1111"
                        target="_blank"
                      >
                        <i>
                          <FaWhatsapp />
                        </i>
                      </a>
                    </div>

                    <div className="mediaimg111">
                      <a
                        href="https://www.youtube.com/channel/UCz6XYBhKoCQVQR2yxRhcxqg/featured"
                        target="_blank"
                      >
                        <i>
                          <AiOutlineYoutube />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comicinformation">
                <strong>Genres :</strong> <span>Comic. </span> <br />
                <strong>Publish :</strong> <span>Symphonii Studios</span> <br />
                <strong>Publication Date :</strong> <span>30 / Nov / 2021</span>{" "}
                <br />
                <strong>Status :</strong> <span>On going.</span> <br />
                <strong>Summary :</strong>
                <span>
                  The Series captures the everyday misadventures of two corporate
                  office workers.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="thiswor">
          <div className="slapcontainer">
            {userCollection.map((itemDoc, index) => {
              const item = timeStamptoDate(itemDoc);
              return (
                <>
                  <div key={index}>
                    <div className="carrislap">
                      <div className="s">
                        <Link to={`/view/all/comic/symphonii`}>
                          <div className="cob">
                            <img
                              src={item.coverImage}
                              alt=""
                              className="heiimg hiden"
                            />
                            <div className="opend">
                              <div className="title">
                                <td>{item.Title}</td>
                              </div>
                              <div className="descri">
                                <span>
                                  {format(item.created, "dd/MM/yyyy hh:mm a")}
                                </span>
                                <h6> Likes: {item.like}</h6>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {loading && <div className="text-center"> loading ... </div>}
        {!loading && !isEmpty && (
          <div className="text-center textsss">
            <button onClick={fetchMore}>see more</button>
          </div>
        )}
        <div className="text-center text-white">
          {isEmpty && <span className="hshhs">no more data to fetch</span>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OfficeSlap;
