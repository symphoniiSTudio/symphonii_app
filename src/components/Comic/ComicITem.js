import React, { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import './comuc.css'
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { ComicService, getComics } from "../../AdminFolder/Admin.service/ComicService";
import { database } from "../../firebase";

function ComicTeam(props) {
  const [userinfo, setuserinfo] = useState([]);
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const [like, setLike] = useState(0),
  [isLike, setIsLike] = useState(false),
  
   onLikeButtonClick = async () => {
    setLike(like + (isLike?-1:1));
    setIsLike(!isLike);
  
  await   database.doc(`Comic/${userinfo.id}`).update({
    like:firebase.firestore.FieldValue.increment(like + (isLike?-1:1))
    })
  };

  useEffect(() => {
    const link = props.match.params.link;
    getComics(link).then((newUsers) => {
      // setloading(true);
      const newUser = newUsers[0];
      if (!newUser) {
        console.log("link expired or used");
      } else {
        setuserinfo(newUser);
        // setloading(false);
      }
    });
  }, [])

const HandleViewMore = () =>{
  history.push("/view/all/comic/symphonii")
}

  if ( loading) {
    return <>Loading ...</>;
  }

  return <div>
    <div className="viewsinclecomic">
      <div className="sww">
      <div className="comicocnt">
        <div className="imagesid">
        <img src={userinfo.image} alt="" className="hei"/>
       
        </div>
        <div className="lick">
        <button type="submit" onClick={onLikeButtonClick} className="dhd">Like : {like ? like : userinfo.like}</button>
        <button type="submit"   className="dhd" onClick={history.goBack}>back</button>
        <button type="submit"   className="dhd" onClick={HandleViewMore}>More...</button>
        </div>
      </div>
      </div>
    </div>
  </div>;
}

export default ComicTeam;
