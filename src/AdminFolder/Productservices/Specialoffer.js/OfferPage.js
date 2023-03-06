import React, { useState } from 'react'
import Product2d from '../Compoents/2Dproduct'


function OfferPage() {
    const [type, setType] = useState("")
  return (
    <div>
       <div className="offercontainer">
           <div className="offerirem">
              <div className="optionArea">
              <div className="selecteditemview">
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>Select Type</Form.Label>
                    <Form.Control
                      as="select"
                      value={type}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setType(e.target.value);
                      }}
                    >
                      <option value="default">select staff role</option>
                      <option value="animation">animation</option>
                      <option value="explainer video">explainer video</option>
                      <option value="motion graphics">motion graphics</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="offerCntent">
              <Product2d/> 
              </div>
           </div>
       </div>
    </div>
  )
}

export default OfferPage