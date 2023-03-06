import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";
import "./ViewAllComic.css";

const userRef = database.collection("Comic").orderBy("created", "desc");

function BranchLoanLog() {
  const [userCollection, setuserCollection] = useState([]);
  const [lastDocs, setlastDocs] = useState();
  const [loading, setloading] = useState(false);
  const [isItemEmpty, setisEmpty] = useState();
  const history = useHistory();

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
  const handleBack = () => {
    history.push("/slapofice/symphoni/index");
  };
  if (loading) {
    return <>Please Wait ...</>;
  }

  return (
    <div>
      <div className="imageGalary">
        <button type="submit" className="dhd my-1" onClick={handleBack}>
          back
        </button>
        <div className="disimame">
          <div className="imaagePic">
            <Carousel>
              {userCollection.map((item) => {
                return (
                 <Carousel.Item key={item.id}>
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt="First slide"
                      height={550}
                    />
                  </Carousel.Item>
               
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchLoanLog;
