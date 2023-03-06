import React, { useState, useRef, useEffect } from "react";
import Spiner from "../Admin.service/Spiner";
import DasboardHeader from "./DasboardHeader";
import axios from "axios";
import "./AdminCreateStaff/alUsser.css";
import { database } from "../../firebase";
import { useHistory } from "react-router-dom";

function AllUserLog() {
  const [loading, setloading] = useState(false);
  const [userCollection, setuserCollection] = useState([]);
  const [lastDocs, setlastDocs] = useState();
  const [isEmpty, setisEmpty] = useState(false);
  const [date, setdate] = useState(null);
  const [gettime, setgettime] = useState("");
  const history = useHistory();

  const userRef = database.collection("users").orderBy("created", "desc");
  const baseURL = "http://worldtimeapi.org/api/timezone/Africa/Lagos";
  useEffect(() => {
    userRef
      .limit(30)
      .get()
      .then((collections) => {
        updateState(collections);
      });

    axios.get(baseURL).then((response) => {
      const res = response.data;
      setgettime(res);

      const date = new Date(res.datetime);
      setdate(date);
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
    return <Spiner />;
  }

  if (userCollection.length === "") {
    return <span>No more data to fetch</span>;
  }

  console.log(userCollection);
  return (
    <>
      {loading ? (
        <div className="app1">
          <div className="symphoniiicone">
            <Spiner />
          </div>
        </div>
      ) : (
        <div>
          <DasboardHeader />
          <div className="headtable">
            <div className="usrinpit">Users Log</div>
            <div className="viewuserdetans">
              <button type="submit bg-success" onClick={history.goBack}>
                Back
              </button>
              This shows all the users
            </div>
            <div className="thiswor1">
              <table>
                <tr>
                  <th>TxT NO</th>
                  <th>Date Created</th>
                  <th>Name</th>
                  <th>Unique Number</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>wallet</th>
                  <th>Purchases</th>
                  <th>permissions</th>
                  <th>Action</th>
                </tr>

                {userCollection.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>{item.id}</td>
                      <td data-column="Created">
                        {date ? date.toDateString() : ""}
                      </td>
                      <td>
                        {item.firstname} {item.lastName}
                      </td>
                      <td>{item.account}</td>
                      <td>{item.Email}</td>
                      <td>{item.PhoneNumber}</td>
                      <td>{item.Wallet}</td>
                      <td>{item.Purchase}</td>
                      <td>{item.permissions}</td>
                      <td>
                        {" "}
                        <div className="btn bg-info">action</div>{" "}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>

            {loading && (
              <div className="text-center">
                {" "}
                <Spiner />{" "}
              </div>
            )}
            {!loading && !isEmpty && (
              <div className="text-center textsss">
                <button onClick={fetchMore}>see more</button>
              </div>
            )}
            {isEmpty && <h1 className="hshhs">no more data to fetch</h1>}
          </div>
        </div>
      )}
    </>
  );
}

export default AllUserLog;
