import axios from "axios";
import React, {useEffect, useState}from "react";
import { useAuth } from "../Admin.service/UserAuth";
import { database } from "../../firebase";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import "./DashboardMenu.css";

function DashboardMenu() {
const [ShowDate, setShowDate] = useState("");
const [user, setUser] = useState([]);
const {uid} = useAuth().currentUser
  const baseURL = "http://worldtimeapi.org/api/timezone/Africa/Lagos";

  useEffect(() => {
    // numDay()
    axios.get(baseURL).then((response) => {
      const res = response.data;
      const date = new window.Date(res.datetime);
      setShowDate(date);
    });
  }, []);



  const getUser = async () => {
      
    try {
      const documentSnapshot = await database
        .collection("users")
        .doc(uid)
        .get();
     const userData = documentSnapshot.data()  

    // checking user permission 

    //  if (emailVerified && userData.permissions === 'user'){
    //   history.push(`/auth_user/${uid}`)
        
    //     return; 
    // }
  
    // if (emailVerified && userData.permissions === 'credit_Officer'){
    //   history.push(`/credit_officer_auth/users/${uid}`);
    //   return; 
    // }

    // if (emailVerified && userData.permissions === 'branch_Manager'){
    //   history.push(`/branch_manager_auth/users/${uid}`);
    //   return; 
    // }

    // if (emailVerified && userData.permissions === 'Super_Admin'){
    //   history.push(`/admin_auth/users/${uid}`);
    //   return; 
    // }
  
    // if (emailVerified ){
    //     history.push(`/auth_user/${uid}`);
    //     return;
    //   }

      setUser(userData);
    } catch(e) {
        console.log(e);
    }
  }

    // Get user on mount
    useEffect(() => {
      getUser();
    }, []);
  

  console.log(user)
  return (
    <div>
      <div className="indexmain">
        <div className="indexcoontainer">
          <div className="header">
            <div className="date">
              {ShowDate ? ShowDate.toDateString() : ""}
            </div>

            <div className="tss">Admin Dashboard</div>
          </div>
          <div className= "indexitem">
            <div className="menulists" style={{display : user.permissions === 'admin' ?  'block' : 'none'}}>
              <div className="menutitle">Users</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                  
                </p>
                <div className="btn btn-secondary anchor  m-3"> <Link to='/user/view'>Open</Link></div>
              </div>
            </div>

            <div className="menulists" style={{display : user.permissions === 'admin' ?  'block' : 'none'}}>
              <div className="menutitle">Permissions</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                </p>
                <div className="btn btn-secondary  m-3" ><Link to= '/Admin/create_staff/user'>Open</Link></div>
              </div>
            </div>

            <div className="menulists" style={{display : user.permissions === 'admin' ?  'block' : 'none'}}>
              <div className="menutitle">View Service Log</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                </p>
                <div className="btn btn-secondary  m-3">Open</div>
              </div>
            </div>

            <div className="menulists" style={{display : user.permissions === 'admin' ?  'block' : 'none'}}>
              <div className="menutitle">Create Service</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                </p>
                <div className="btn btn-secondary  m-3"><Link to="/select/product/symhonii/index">Open</Link></div>
              </div>
            </div>

            <div className="menulists"style={{display : user.permissions === 'Content_Admin' || user.permissions === 'admin' ?  'block' : 'none'}}>
              <div className="menutitle">Create Comic</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                </p>
                <div className="btn btn-secondary dssd m-3"><Link to= '/create/comic/symphoni/studios' className="linkstyle">Open</Link></div>
              </div>
            </div>
            
            <div className="menulists"style={{display : user.permissions === 'Content_Admin' || user.permissions === 'admin'?  'block' : 'none'}}>
              <div className="menutitle">Comic Log</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                </p>
                <div className="btn btn-secondary  m-3">Open</div>
              </div>
            </div>
            <div className="menulists" style={{display : user.permissions === 'Content_Admin' || user.permissions === 'admin' ?  'block' : 'none'}}>
              <div className="menutitle">Support</div>
              <div className="menuedetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque, quas tempora illum cum, quos doloremque
                  veniam voluptatibus ex impedit velit nostrum itaque asperiores
                  repellat, sunt dolore corporis quidem magni?
                </p>
                <div className="btn btn-secondary  m-3">Open</div>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMenu;
