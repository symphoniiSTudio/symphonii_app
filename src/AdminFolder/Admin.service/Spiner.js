import React, {useEffect, useState} from 'react'
import RingLoader from "react-spinners/RingLoader";
import './Spiner.css'

function Spiner() {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
    return (
        <div>
              {loading ? (
        <div className="aspiner">
          <div className="symphoniiicone">
            <div className='holderssss'>
            <p><RingLoader size={60} loading={loading} color={"#ed1846"} /></p>
            <p>Fetching Data....Please Wait</p>
            </div>
          </div>
          
        </div>
      ): <></>} 
        </div>
    )
}

export default Spiner
