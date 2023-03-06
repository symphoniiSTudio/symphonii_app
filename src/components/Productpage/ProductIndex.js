import React, {useState} from 'react';
import HomeNavbar from '../HomeNavbar'
import './ProductIndex.css'
import { Form } from 'react-bootstrap';
import Advert1 from './ProductList/Advert1';
import Animated from './ProductList/Animated'
import ExplaniarVideo from './ProductList/ExplaniarVideo'
import MotionGraphics from './ProductList/MotionGraphics'
function ProductIndex() {
  const [type, setType] = useState("animation")
  return <div>
    <HomeNavbar/>

    <Advert1/>
    <div className="offercontainer">
           <div className="offerirem">
              <div className="optionArea">
              <div className="selecteditemview">
                  <Form.Group controlId="formBasicSelect" style={{backgroundColor: "black"}}>
                    <Form.Label>Select Type</Form.Label>
                    <Form.Control
                      as="select"
                      value={type}
                      onChange={(e) => {
                
                        setType(e.target.value);
                      }}
                      style={{backgroundColor: "black", color: "white"}}
                    >
                      <option value="default">select staff role</option>
                      <option value="animation">animation</option>
                      <option value="explainer video">explainer video</option>
                      <option value="motion graphics">motion graphics</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>

           </div>
       </div>
    <div className="animationDivOr" style={{display: type === "animation" ? "block" : "none" }}>
    <Animated/>
    </div>

    <div className="animationDivOr" style={{display: type === "explainer video" ? "block" : "none" }}>
    <ExplaniarVideo/>
    </div>

    <div className="animationDivOr" style={{display: type === "motion graphics" ? "block" : "none" }}>
    <MotionGraphics/>
    </div>
    
  </div>;
}

export default ProductIndex;
