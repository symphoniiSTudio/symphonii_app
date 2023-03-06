import React, { useState } from "react";
import "./StaffProfile.css";
import { Modal, Carousel } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

function SeeOurPeople() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <div className="staffdetails" onClick={() => setShow(true)}>
          <div className="staffimage">
            <img src="/img/myimg.jpeg" alt="" />
          </div>
          <div className="staffrole">
            <div className="staffrole">
              <div className="arrow">
                <img src="/img/arrow.png" alt="" />
              </div>
              <div className="aboutstaff">
                <div className="sypmphoniiname">stubborn Confidence</div>
                <div className="sypmphoniiposition">Free me now</div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="closebttn" onClick={() => setShow(false)}>
            <AiOutlineClose />
          </div>

          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <div className="profilebody" closeButton>
                  <div className="bodyflexcontainr">
                    <div className="imagesecl">
                      <img src="/img/myimg.jpeg" alt="" />
                    </div>
                    <div className="profileimae">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid ullam commodi itaque magni quis vel, ducimus
                      beatae soluta similique necessitatibus aspernatur at
                      quidem incidunt voluptatibus, dolore laboriosam eveniet,
                      repellendus qui.
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="profilebody" closeButton>
                  <div className="bodyflexcontainr">
                    <div className="imagesecl">
                      <img src="/img/myimg.jpeg" alt="" />
                    </div>
                    <div className="profileimae">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid ullam commodi itaque magni quis vel, ducimus
                      beatae soluta similique necessitatibus aspernatur at
                      quidem incidunt voluptatibus, dolore laboriosam eveniet,
                      repellendus qui.
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="profilebody" closeButton>
                  <div className="bodyflexcontainr">
                    <div className="imagesecl">
                      <img src="/img/myimg.jpeg" alt="" />
                    </div>
                    <div className="profileimae">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid ullam commodi itaque magni quis vel, ducimus
                      beatae soluta similique necessitatibus aspernatur at
                      quidem incidunt voluptatibus, dolore laboriosam eveniet,
                      repellendus qui.
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default SeeOurPeople;
